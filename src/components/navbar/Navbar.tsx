import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../Request";
import Config from "../config/Config";
import LeftBarMobile from "../leftbarMobile/LeftBarMobile";

const Navbar = () => {
  const { token, currentUser } = useContext(AuthContext) as AuthContextType;
  const [showMobile, setShowMobile] = useState<boolean>(false);
  const [openConfig, setOpenConfig] = useState<boolean>(false);
  const { data } = useQuery({
    queryKey: ["basketItem"],
    queryFn: () => {
      return newRequest(token)
        .get(`Basket?id=${currentUser.given_name}`)
        .then((results) => results.data)
        .catch((err) => console.log(err));
    },
  });
  const basketCount = data && data.items.length;
  return (
    <nav className="sticky top-0 w-full p-5 bg-white border-b-[1px] border-gray-200 dark:border-[#444] dark:bg-[#333]  flex justify-between z-50">
      <div className="flex items-center gap-5 md:gap-3">
        {/* Mobile */}
        <button
          className="block md:hidden dark:text-[whitesmoke]"
          onClick={() => setShowMobile(!showMobile)}
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {showMobile && <LeftBarMobile setShowMobile={setShowMobile}/>}
        <div className="text-3xl font-semibold text-transparent uppercase bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text">
          <Link to="/home">multasab</Link>
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

      <div className="items-center hidden gap-5 md:flex relative">
        <div className="relative cursor-pointer">
          {basketCount > 0 && (
            <span className="absolute -top-0 right-0 bg-rose-500 rounded-full h-4 w-4 p-1 text-xs text-white flex items-center justify-center">
              {basketCount}
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

        <img
          className="rounded-full w-11 h-11 cursor-pointer"
          src="https://images.pexels.com/photos/17168340/pexels-photo-17168340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          onClick={() => setOpenConfig(!openConfig)}
        />
        {openConfig && <Config setOpenConfig={setOpenConfig} />}
      </div>
    </nav>
  );
};

export default Navbar;
