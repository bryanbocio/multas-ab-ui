import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import { hasMultipleRoles } from "../../utils/Roles";

interface Props {
  setShowMobile: React.Dispatch<React.SetStateAction<boolean>>;
}
const LeftBarMobile: React.FC<Props> = ({ setShowMobile }) => {
  const { currentUser } = useContext(AuthContext) as AuthContextType;
  const role = hasMultipleRoles(currentUser.role);
  const { pathname } = useLocation();
  return (
    <div className="fixed  inset-x-0 top-[77px] bottom-[72px] overflow-scroll block md:hidden z-10  bg-[#f6f3f3] dark:bg-[#444]">
      <div className="flex flex-col gap-2 pt-5">
        <div
          className="dark:text-[lightgray] hover:bg-gray-200 dark:hover:bg-[#333] p-3"
          onClick={() => setShowMobile(false)}
        >
          <Link
            to="/home"
            className={`text-xl font-medium ${
              pathname === "/home" && "text-emerald-600/90"
            }`}
          >
            Tarifario de multas
          </Link>
          <Link
            to="/record"
            className={`text-xl font-medium ${
              pathname === "/record" && "text-emerald-600/90"
            }`}
          >
            Historico de multas
          </Link>
        </div>
        {role === "ADMIN" && (
          <div
            className="dark:text-[lightgray] hover:bg-gray-200 dark:hover:bg-[#333] p-3 "
            onClick={() => setShowMobile(false)}
          >
            <Link
              to="/agents"
              className={`text-xl font-medium ${
                pathname === "/agents" && "text-emerald-600/90"
              }`}
            >
              Consultar Agentes
            </Link>
          </div>
        )}
        {(role == "ADMIN") && (
          <div
            className="dark:text-[lightgray] hover:bg-gray-200 dark:hover:bg-[#333] p-3 "
            onClick={() => setShowMobile(false)}
          >
            <Link
              to="/drivers"
              className={`text-xl font-medium ${
                pathname === "/drivers" && "text-emerald-600/90"
              }`}
            >
              Consultar conductor
            </Link>
          </div>
        )}
        {(role == "ADMIN" || role == "AGENT") && (
          <div
            className="dark:text-[lightgray] hover:bg-gray-200 dark:hover:bg-[#333] p-3 "
            onClick={() => setShowMobile(false)}
          >
            <Link
              to="/applyTrafficFine"
              className={`text-xl font-medium ${
                pathname === "/applyTrafficFine" && "text-emerald-600/90"
              }`}
            >
              Aplicar Multa
            </Link>
          </div>
        )}
        {role === "ADMIN" && (
          <div
            className="dark:text-[lightgray] hover:bg-gray-200 dark:hover:bg-[#333] p-3 "
            onClick={() => setShowMobile(false)}
          >
            <Link
              to="/createAgent"
              className={`text-xl font-medium ${
                pathname === "/createAgent" && "text-emerald-600/90"
              }`}
            >
              Crear Agente
            </Link>
          </div>
        )}

        <div
          className="dark:text-[lightgray] hover:bg-gray-200 dark:hover:bg-[#333] p-3 "
          onClick={() => setShowMobile(false)}
        >
          <Link
            to="/map"
            className={`text-xl font-medium ${
              pathname === "/map" && "text-emerald-600/90"
            }`}
          >
            Mapa de Multas
          </Link>
        </div>
        <div
          className="dark:text-[lightgray] hover:bg-gray-200 dark:hover:bg-[#333] p-3 "
          onClick={() => setShowMobile(false)}
        >
          <Link
            to="/weather"
            className={`text-xl font-medium ${
              pathname === "/weather" && "text-emerald-600/90"
            }`}
          >
            Estado del Clima
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftBarMobile;
