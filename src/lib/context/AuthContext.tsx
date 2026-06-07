import { createContext } from "react";

import { type IAuthContextTypes } from "../../types/authContextTypes.ts";

const AuthContext = createContext<IAuthContextTypes>({
  login: async () => {},
  loggedInUser: null,
  loading: false,
});

export default AuthContext;
