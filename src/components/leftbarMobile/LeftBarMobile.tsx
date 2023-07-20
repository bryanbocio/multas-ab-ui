import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import { hasMultipleRoles } from "../../utils/Roles";

interface Props {
  setShowMobile: React.Dispatch<React.SetStateAction<boolean>>;
}
const LeftBarMobile: React.FC<Props> = ({ setShowMobile }) => {
  const { currentUser } = useContext(AuthContext) as AuthContextType;
  const role = hasMultipleRoles(currentUser.role);
  return (
    <div className="fixed  inset-x-0 top-[77px] bottom-[72px] overflow-scroll block md:hidden z-10  bg-[#f6f3f3] dark:bg-[#444]">
      <div className="flex flex-col gap-2 pt-5">
        <div
          className="dark:text-[lightgray] hover:bg-gray-200 dark:hover:bg-[#333] p-3"
          onClick={() => setShowMobile(false)}
        >
          <Link to="/home" className="text-xl font-medium ">
            Tarifario de multas
          </Link>
        </div>
        {role && (
          <div
            className="dark:text-[lightgray] hover:bg-gray-200 dark:hover:bg-[#333] p-3 "
            onClick={() => setShowMobile(false)}
          >
            <Link to="/agents" className="text-xl font-medium ">
              Consultar Agentes
            </Link>
          </div>
        )}
        {role && (
          <div
            className="dark:text-[lightgray] hover:bg-gray-200 dark:hover:bg-[#333] p-3 "
            onClick={() => setShowMobile(false)}
          >
            <Link to="/drivers" className="text-xl font-medium ">
              Consultar conductor
            </Link>
          </div>
        )}
        {role && (
          <div
            className="dark:text-[lightgray] hover:bg-gray-200 dark:hover:bg-[#333] p-3 "
            onClick={() => setShowMobile(false)}
          >
            <Link to="/applyTrafficFine" className="text-xl font-medium ">
              Aplicar Multa
            </Link>
          </div>
        )}
                {role && (
          <div
            className="dark:text-[lightgray] hover:bg-gray-200 dark:hover:bg-[#333] p-3 "
            onClick={() => setShowMobile(false)}
          >
            <Link to="/createAgent" className="text-xl font-medium ">
              Crear Agente
            </Link>
          </div>
        )}

        <div
          className="dark:text-[lightgray] hover:bg-gray-200 dark:hover:bg-[#333] p-3 "
          onClick={() => setShowMobile(false)}
        >
          <Link to="/map" className="text-xl font-medium ">
            Mapa de Multas
          </Link>
        </div>
        <div
          className="dark:text-[lightgray] hover:bg-gray-200 dark:hover:bg-[#333] p-3 "
          onClick={() => setShowMobile(false)}
        >
          <Link to="/home" className="text-xl font-medium ">
            Noticias
          </Link>
        </div>
        <div
          className="dark:text-[lightgray] hover:bg-gray-200 dark:hover:bg-[#333] p-3 "
          onClick={() => setShowMobile(false)}
        >
          <Link to="/weather" className="text-xl font-medium ">
            Estado del Clima
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftBarMobile;
