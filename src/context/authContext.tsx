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

  const [location, setLocation] = useState<{
    lat?: string | null;
    lon?: string | null;
  }>(JSON.parse(localStorage.getItem("location")!) || { lat: null, lon: null });
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")!) || null
  );

  const [ok, setOk] = useState<boolean>(false);
  const login = async (inputs: SignIn): Promise<void> => {
   await axios
      .post("https://localhost:5001/api/Account/login", inputs)
      .then((results) => {
        setToken(results.data.token);
        setOk(true);
      })
      .catch((err) => console.log(err));
  };
  const logout = () => {
    setToken(null);
    setLocation({ lat: null, lon: null });
    setOk(false);
  };

  const getLocation = async () => {
    try {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          const newLocation = {
            lat: position.coords.latitude.toString(),
            lon: position.coords.longitude.toString(),
          };
          setLocation(newLocation);
          localStorage.setItem("location", JSON.stringify(newLocation));
        },
        function (error) {
          console.error("Error al obtener la ubicación:", error);
        }
      );
    } catch (error) {
      console.error("Error al obtener o guardar la ubicación:", error);
    }
  };
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
    setCurrentUser(unpackToken(token));
    if (token) {
      getLocation();
    } else {
      localStorage.removeItem("location");
    }
  }, [token]);
  return (
    <AuthContext.Provider
      value={{ login, ok, token, currentUser, logout, location }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
