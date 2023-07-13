import { createContext, useEffect, useState } from "react";
import { SignIn, TokenType } from "../utils/type";

import axios from "axios";
import { unpackToken } from "../utils/decompress";
export const AuthContext = createContext({});
interface Props {
  children: React.ReactNode;
}
const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<TokenType>(
    unpackToken(JSON.parse(localStorage.getItem("token")!)) || null
  );

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")!) || null
  );

  const [ok, setOk] = useState<boolean>(false);
  const login = async (inputs: SignIn): Promise<void> => {
    axios
      .post("https://localhost:5001/api/Account/login", inputs)
      .then((results) => {
        setToken(results.data.token);
        setOk(true);
      })
      .catch((err) => console.log(err));
  };
  const logout = () => {
    setToken(null);
    setOk(false);
  };

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
    setCurrentUser(unpackToken(token));
  }, [token]);
  return (
    <AuthContext.Provider value={{ login, ok, token, currentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
