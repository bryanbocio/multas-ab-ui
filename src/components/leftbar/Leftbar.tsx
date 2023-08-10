import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import { hasMultipleRoles } from "../../utils/Roles";

const Leftbar = () => {
  const { currentUser } = useContext(AuthContext) as AuthContextType;
  const role = hasMultipleRoles(currentUser.role);
  const { pathname } = useLocation();
  return (
    <div className=" hidden md:flex md:flex-col justify-between sticky flex-2 lg:flex-1 h-[calc(100vh_-_85px)] p-5 bg-white dark:bg-[#333] top-[85px] overflow-scroll scroll-fire scroll">
      <div className="flex flex-col mt-5 gap-9">
        <div className="dark:text-[lightgray] ">
          <Link
            to="/home"
            className={`text-lg font-medium ${
              pathname === "/home" && "text-emerald-600/90"
            }`}
          >
            Tarifario multas
          </Link>
        </div>
        <div className="dark:text-[lightgray] ">
          <Link
            to="/record"
            className={`text-lg font-medium ${
              pathname === "/record" && "text-emerald-600/90"
            }`}
          >
            Historico de multas
          </Link>
        </div>
        {role === "ADMIN" && (
          <div className="dark:text-[lightgray] ">
            <Link
              to="/agents"
              className={`text-lg font-medium ${
                pathname === "/agents" && "text-emerald-600/90"
              }`}
            >
              Consultar Agentes
            </Link>
          </div>
        )}
        {(role == "ADMIN") && (
          <div className="dark:text-[lightgray] ">
            <Link
              to="/drivers"
              className={`text-lg font-medium ${
                pathname === "/drivers" && "text-emerald-600/90"
              }`}
            >
              Consultar Conductor
            </Link>
          </div>
        )}
        {(role == "ADMIN" || role == "AGENT") && (
          <div className="dark:text-[lightgray] ">
            <Link
              to="/applyTrafficFine"
              className={`text-lg font-medium ${
                pathname === "/applyTrafficFine" && "text-emerald-600/90"
              }`}
            >
              Aplicar Multa
            </Link>
          </div>
        )}
        {role === "ADMIN" && (
          <div className="dark:text-[lightgray] ">
            <Link
              to="/createAgent"
              className={`text-lg font-medium ${
                pathname === "/createAgent" && "text-emerald-600/90"
              }`}
            >
              Crear Agente
            </Link>
          </div>
        )}
        <div className="dark:text-[lightgray] ">
          <Link
            to="/map"
            className={`text-lg font-medium ${
              pathname === "/map" && "text-emerald-600/90"
            }`}
          >
            Mapa de Multas
          </Link>
        </div>
        <div className="dark:text-[lightgray] ">
          <Link
            to="/weather"
            className={`text-lg font-medium ${
              pathname === "/weather" && "text-emerald-600/90"
            }`}
          >
            Estado del Clima
          </Link>
        </div>
      </div>
      <div className="mt-5 bg-transparent">
        <div className="text-base font-semibold text-center text-transparent uppercase lg:text-lg bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500 bg-clip-text">
          Developed by group 6
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
