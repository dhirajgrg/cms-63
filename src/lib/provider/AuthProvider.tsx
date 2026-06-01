import { type ReactNode } from "react";
import AuthContext from "../context/AuthContext.tsx";

const AuthProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <AuthContext.Provider value={{ loggedInUser: null }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
