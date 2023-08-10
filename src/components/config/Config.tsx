import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import { ThemeContext } from "../../context/themeContext";
import { ThemeContextType } from "../../context/ThemeContextType";
interface Props {
  setOpenConfig: React.Dispatch<React.SetStateAction<boolean>>;
}
const Config: React.FC<Props> = ({ setOpenConfig }) => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext) as AuthContextType;
  const { toggle, darkMode } = useContext(ThemeContext) as ThemeContextType;
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="absolute top-[67px]  bg-white dark:bg-[#333] overflow-hidden flex flex-col inset-x-0 w-[200px] -left-28 rounded-lg  gap-2 ">
      <div className="flex w-full justify-between items-center p-2 dark:text-[lightgray]">
        <span></span>
        <span className="text-lg font-semibold">Opciones</span>
        <button
          className="self-end uppercase"
          onClick={() => setOpenConfig(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <button
        className="flex gap-1 items-center p-2 hover:bg-[gray] hover:text-[whitesmoke] font-medium dark:text-[lightgray] dark:hover:bg-[#444]"
        onClick={toggle}
      >
        {darkMode ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-[lightgray]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
            Claro
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
            Oscuro
          </>
        )}
      </button>

      <button
        className="flex gap-1 items-center hover:bg-[gray] p-2 hover:text-[whitesmoke] font-medium dark:text-[lightgray] dark:hover:bg-[#444]"
        onClick={handleLogout}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        Cerrar sesion
      </button>
    </div>
  );
};

export default Config;
