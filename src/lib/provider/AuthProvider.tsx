import { useEffect, useState, type ReactNode } from "react";
import AuthContext from "../context/AuthContext.tsx";
import { type ILoginData } from "../../types/loginTypes.ts";
import axiosInstance from "../api/axios.ts";
import Cookies from "js-cookie";
import { type IUserProfileTypes } from "../../types/userProfileTypes.ts";

const AuthProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  const [loggedInUser, setLoggedInUser] = useState<null | IUserProfileTypes>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(() => {
    return !!Cookies.get("cookie");
  });
  //get user details
  const getLoggedInUser = async () => {
    try {
      const userProfile = (await axiosInstance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${Cookies.get("cookie")}`,
        },
      })) as IUserProfileTypes;
      setLoggedInUser(userProfile);

      return userProfile;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //login function
  const login = async (data: ILoginData) => {
    try {
      const response = (await axiosInstance.post(
        "/auth/login",
        data,
      )) as unknown as { accessToken: string };

      Cookies.set("cookie", response.accessToken, {
        secure: true,
        sameSite: "strict",
        expires: 1,
      });
      return await getLoggedInUser();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

useEffect(() => {
  const handler = async () => {
    const cookie = Cookies.get("cookie")||null;

    if (cookie) {
      await getLoggedInUser();
    } else {
      setLoading(false);
    }
  };

  handler();
}, []);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <AuthContext.Provider
      value={{
        login: login,
        loggedInUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
