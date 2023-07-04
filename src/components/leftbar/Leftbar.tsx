import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import { unpackToken } from "../../utils/decompress";

const Leftbar = () => {
  const { currentUser } = useContext(AuthContext) as AuthContextType;
  const [role, setRole] = useState<any>();
  useEffect(() => {
    const roles = unpackToken(currentUser);
    setRole(roles.role);
  }, []);
  return (
    <div className=" hidden md:flex md:flex-col justify-between sticky flex-2 lg:flex-1 h-[calc(100vh_-_85px)] p-5 bg-white top-[85px]">
      <div className="flex flex-col mt-5 gap-9">
        <div className="">
          <Link to="/home" className="text-lg font-medium text-emerald-500">
            Tarifario multas
          </Link>
        </div>

        <div className="">
          <Link to="/" className="text-lg font-medium ">
            Consultar Vehiculos
          </Link>
        </div>
        <div className="">
          <Link to="/" className="text-lg font-medium ">
            Consultar Conductor
          </Link>
        </div>
        {role !== "USER" && (
          <div className="">
            <Link to="/applyTrafficFine" className="text-lg font-medium ">
              Aplicar Multa
            </Link>
          </div>
        )}
        <div className="">
          <Link to="/" className="text-lg font-medium ">
            Multas Registradas
          </Link>
        </div>
        <div className="">
          <Link to="/map" className="text-lg font-medium ">
            Mapa de Multas
          </Link>
        </div>
        <div className="">
          <Link to="/" className="text-lg font-medium ">
            Noticias
          </Link>
        </div>
        <div className="">
          <Link to="/weather" className="text-lg font-medium ">
            Estado del Clima
          </Link>
        </div>
      </div>
      <div className="bg-transparent ">
        <div className="text-base font-semibold text-center text-transparent uppercase lg:text-lg bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500 bg-clip-text">
          Developed by group 6
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
