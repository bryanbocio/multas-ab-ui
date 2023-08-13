import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../Request";
import Config from "../config/Config";
import LeftBarMobile from "../leftbarMobile/LeftBarMobile";

const Navbar = () => {
  const { token, currentUser } = useContext(AuthContext) as AuthContextType;
  const [showMobile, setShowMobile] = useState<boolean>(false);
  const navigate = useNavigate();
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
  
  const { pathname } = useLocation();
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
        {showMobile && <LeftBarMobile setShowMobile={setShowMobile} />}
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

      <div className="relative items-center hidden gap-5 md:flex">
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/basket")}
        >
          {basketCount > 0 && (
            <span className="absolute right-0 flex items-center justify-center w-4 h-4 p-1 text-xs text-white rounded-full -top-0 bg-rose-500">
              {basketCount}
            </span>
          )}
          <span
            className={`dark:text-[lightgray]  ${
              pathname === "/basket" && "text-emerald-500/90"
            }`}
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </span>
        </div>

        <img
          className="rounded-full cursor-pointer w-11 h-11"
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
