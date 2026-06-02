import { useContext } from "react";
import AuthContext from "../context/AuthContext.tsx";

const useUser = () => {
  const userContext = useContext(AuthContext);
  return { ...userContext };
};

export default useUser;
