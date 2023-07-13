import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { ThemeContextType } from "../../context/ThemeContextType";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../Request";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";

const Footbar = () => {
  const { token, currentUser } = useContext(AuthContext) as AuthContextType;
  const { toggle, darkMode } = useContext(ThemeContext) as ThemeContextType;
  const { data } = useQuery({
    queryKey: ["basketItemMobile"],
    queryFn: () => {
      return newRequest(token)
        .get(`Basket?id=${currentUser.given_name}`)
        .then((results) => results.data)
        .catch((err) => console.log(err));
    },
  });
  return (
    <div className="sticky inset-x-0 bottom-0 block overflow-hidden bg-[#f6f3f3] dark:bg-[#333] md:hidden backdrop-blur-md border-t-[1px] border-gray-300 dark:border-[#444]">
      <div className="flex justify-center gap-5 p-3 items-center font-semibold text-white">
        <button
          className="flex gap-1 items-center p-2  font-medium  dark:text-[lightgray] text-black"
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
                className="w-8 h-8 text-[lightgray]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </>
          ) : (
            <>
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
            </>
          )}
        </button>
        <div className="relative cursor-pointer block md:hidden">
          {data && data.items.length !== 0 && (
            <span className="absolute -top-0 right-0 bg-rose-500 rounded-full h-4 w-4 p-1 text-xs text-white flex items-center justify-center">
              {data.items.length}
            </span>
          )}
          <Link to="/basket" className="dark:text-[lightgray] text-black">
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
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footbar;
