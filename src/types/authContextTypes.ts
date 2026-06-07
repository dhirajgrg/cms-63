import { type ILoginData } from "../types/loginTypes.ts";
import type {  IUserProfileTypes } from "./userProfileTypes.ts";

export interface IAuthContextTypes {
  login(data: ILoginData): Promise<void | IUserProfileTypes>;
  loggedInUser: null | IUserProfileTypes;
  loading: boolean;
}
