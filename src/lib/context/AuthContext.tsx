import { createContext } from "react";

import { type IAuthContextTypes } from "../../types/authContextTypes.ts";

const AuthContext = createContext<IAuthContextTypes>({
  login: async () => {},
  loggedInUser: null,
});

export default AuthContext;
