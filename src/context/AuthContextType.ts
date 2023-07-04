import { SignIn } from "../utils/type";

export interface AuthContextType {
  login: (input: SignIn) => void;
  ok: boolean;
  currentUser: string;
  logout: () => void;
}
