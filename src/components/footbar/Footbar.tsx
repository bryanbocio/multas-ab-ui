import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { ThemeContextType } from "../../context/ThemeContextType";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../Request";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";

const Footbar = () => {
  const { token, currentUser } = useContext(AuthContext) as AuthContextType;
  const { toggle, darkMode } = useContext(ThemeContext) as ThemeContextType;
  const navigate = useNavigate();
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
    <div className="sticky inset-x-0 bottom-0 z-10 block overflow-hidden bg-[#f6f3f3] dark:bg-[#333] md:hidden backdrop-blur-md border-t-[1px] border-gray-300 dark:border-[#444]">
      <div className="flex items-center justify-center gap-5 p-3 font-semibold text-white">
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
        <div
          className="relative block cursor-pointer md:hidden"
          onClick={() => navigate("/basket")}
        >
          {data && data.items.length !== 0 && (
            <span className="absolute right-0 flex items-center justify-center w-4 h-4 p-1 text-xs text-white rounded-full -top-0 bg-rose-500">
              {data.items.length}
            </span>
          )}
          <span className="dark:text-[lightgray] text-black">
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footbar;
