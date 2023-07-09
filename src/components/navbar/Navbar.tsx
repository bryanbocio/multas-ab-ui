import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../Request";
import { ThemeContext } from "../../context/themeContext";
import { ThemeContextType } from "../../context/ThemeContextType";

const Navbar = () => {
  const { logout, currentUser } = useContext(AuthContext) as AuthContextType;
  const { toggle, darkMode } = useContext(ThemeContext) as ThemeContextType;
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const { data } = useQuery({
    queryKey: ["basketItem"],
    queryFn: () => {
      return newRequest(currentUser)
        .get(`Basket?id=${1}`)
        .then((results) => results.data)
        .catch((err) => console.log(err));
    },
  });
  console.log(data);
  return (
    <nav className="sticky top-0 w-full p-5 bg-white border-b-[1px] border-gray-200 dark:border-[#444] dark:bg-[#333]  flex justify-between z-50">
      <div className="flex items-center gap-5 md:gap-3">
        <button className="block md:hidden">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="text-3xl font-semibold text-transparent uppercase bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text">
          multasab
        </div>

        <div className="search border-[1px] border-gray-200 rounded-lg   h-11 w-[300px] px-2  items-center justify-between hidden md:flex">
          <input
            type="text"
            placeholder="Buscar multa"
            className="outline-none caret-emerald-500 w-[250px] p-1 peer bg-white dark:bg-[#333] dark:bg-transparent dark:text-[whitesmoke] dark:placeholder-[lightgray]"
          />
          <span className="text-[gray] transition duration-300 cursor-pointer peer-focus:text-emerald-500 dark:text-[lightgray]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="items-center hidden gap-1 md:flex">
        <div className="relative cursor-pointer">
          <span className="absolute -top-0 right-0 bg-rose-500 rounded-full h-4 w-4 p-1 text-xs text-white flex items-center justify-center">
            2
          </span>
          <Link to="#" className="dark:text-[lightgray] text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </Link>
        </div>
        <div>
          <button
            className="hover:rotate-12 transition duration-300 "
            onClick={toggle}
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-[lightgray]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>
        </div>
        <img
          className="rounded-full w-11 h-11"
          src="https://images.pexels.com/photos/17168340/pexels-photo-17168340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <button
          className="p-1 font-medium text-black rotate-180 rounded-md dark:text-[lightgray]"
          onClick={handleLogout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
