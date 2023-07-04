import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { logout } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="sticky top-0 w-full p-5 bg-white border-b-[1px] border-gray-100 flex justify-between z-50">
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
            className="outline-none caret-emerald-500 w-[250px] p-1 peer"
          />
          <span className="text-[gray] transition duration-300 cursor-pointer peer-focus:text-emerald-500">
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
        <img
          className="rounded-full w-11 h-11"
          src="https://images.pexels.com/photos/17168340/pexels-photo-17168340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <button
          className="p-1 font-medium text-black rotate-180 rounded-md"
          onClick={handleLogout}
        >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
</svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
