import { SignIn, TokenType } from "../utils/type";

export interface AuthContextType {
  login: (input: SignIn) => void;
  ok: boolean;
  token: string;
  currentUser: TokenType;
  logout: () => void;
}
