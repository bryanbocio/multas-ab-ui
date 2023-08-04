import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import { hasMultipleRoles } from "../../utils/Roles";

const Leftbar = () => {
  const { currentUser } = useContext(AuthContext) as AuthContextType;
  const role = hasMultipleRoles(currentUser.role);
  return (
    <div className=" hidden md:flex md:flex-col justify-between sticky flex-2 lg:flex-1 h-[calc(100vh_-_85px)] p-5 bg-white dark:bg-[#333] top-[85px] overflow-scroll">
      <div className="flex flex-col mt-5 gap-9">
        <div className="dark:text-[lightgray] ">
          <Link to="/home" className="text-lg font-medium text-emerald-500">
            Tarifario multas
          </Link>
        </div>
        <div className="dark:text-[lightgray] ">
          <Link to="/record" className="text-lg font-medium ">
            Historico de multas
          </Link>
        </div>
        {role && (
          <div className="dark:text-[lightgray] ">
            <Link to="/agents" className="text-lg font-medium ">
              Consultar Agentes
            </Link>
          </div>
        )}
        {role && (
          <div className="dark:text-[lightgray] ">
            <Link to="/drivers" className="text-lg font-medium ">
              Consultar Conductor
            </Link>
          </div>
        )}
        {role && (
          <div className="dark:text-[lightgray] ">
            <Link to="/applyTrafficFine" className="text-lg font-medium ">
              Aplicar Multa
            </Link>
          </div>
        )}
        {role && (
          <div className="dark:text-[lightgray] ">
            <Link to="/createAgent" className="text-lg font-medium ">
              Crear Agente
            </Link>
          </div>
        )}
        <div className="dark:text-[lightgray] ">
          <Link to="/map" className="text-lg font-medium ">
            Mapa de Multas
          </Link>
        </div>
        <div className="dark:text-[lightgray] ">
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
