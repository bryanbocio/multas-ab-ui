import { createContext, useEffect, useState } from "react";
import { SignIn } from "../utils/type";

import axios from "axios";
import { unpackToken } from "../utils/decompress";
export const AuthContext = createContext({});
interface Props {
  children: React.ReactNode;
}
const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")!) || null
  );
  const [ok, setOk] = useState<boolean>(false);
  const login = async (inputs: SignIn): Promise<void> => {
    axios
      .post("https://localhost:5001/api/Account/login", inputs)
      .then((results) => {
        setCurrentUser(results.data.token);
        setOk(true);
      })
      .catch((err) => console.log(err));
  };
  const logout = async() => {
    setCurrentUser(null);
    localStorage.removeItem('role')
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    localStorage.setItem("role", JSON.stringify(unpackToken(currentUser)));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ login, ok, currentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
