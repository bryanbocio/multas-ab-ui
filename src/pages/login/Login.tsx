import { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import ButtonLoader from "../../components/buttonLoader/ButtonLoader";
const Login = () => {
  const { login, ok, token } = useContext(AuthContext) as AuthContextType;
  const [email, setEmail] = useState<string>("");
  const [iniciando, setIniciando] = useState<boolean>(false);

  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("false");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError(true);
      return;
    }
    setIniciando(true);
    login({ email, password });
  };

  useEffect(() => {
    if (ok) {
      navigate("/home");
      setIniciando(false);
    }
    if (token) {
      navigate("/home");
    }
  }, [ok]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:flex-row bg-gray-50 dark:bg-[#222] relative">
      <div className="block my-10 text-3xl font-semibold text-transparent uppercase md:hidden bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text">
        multasab
      </div>
      <Link
        to="/"
        className="absolute top-10 left-10 text-[lightgray] block md:hidden"
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
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      </Link>
      <div className="rounded-tl-[60px] rounded-tr-[60px] md:rounded-none  flex h-screen md:h-full  w-full  md:w-[50%] md:items-center justify-center bg-emerald-500/90  md:bg-transparent pt-12">
        <div className="flex flex-col items-center justify-center flex-1 p-9 lg:p-14 scale-100 bg-transparent rounded-lg md:scale-110 item1 h-[550px] gap-8 md:bg-emerald-500/90 dark:md:bg-emerald-600 relative">
          <Link
            to="/"
            className="absolute top-10 left-10 text-[lightgray] hidden md:block"
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
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </Link>
          <h2 className="text-4xl font-semibold text-white md:text-2xl">
            Inicio de sesion
          </h2>
          <form
            className="flex w-[90%] md:w-[260px] lg:w-[300px] flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className={`rounded-lg border-[1px] ${
                error ? "border-rose-500" : "border-gray-100"
              } bg-transparent p-2 text-white placeholder-gray-100 caret-white outline-none transition duration-300`}
              placeholder="Usuario"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className={`rounded-lg border-[1px] ${
                error ? "border-rose-500" : "border-gray-100"
              } bg-transparent p-2 text-white placeholder-gray-100 caret-white outline-none transition duration-300`}
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link
              to="/"
              className="block text-lg text-gray-100 text-end md:hidden"
            >
              ¿Olvidaste tu contraseña?
            </Link>
            <button className="flex items-center justify-center h-10 p-2 mt-2 text-black transition duration-300 bg-gray-100 rounded-lg hover:bg-white">
              {iniciando ? <ButtonLoader /> : "Iniciar sesion"}
            </button>
            <a
              href=""
              className="hidden text-sm text-center text-gray-100 md:block"
            >
              ¿Olvidaste tu contraseña?
            </a>
            <span className="block mt-auto text-base text-center text-gray-100 md:hidden">
              ¿No tienes una cuenta?
              <Link to="/register" className="underline text-rose-500">
                Crea una
              </Link>
            </span>
          </form>
        </div>
        <div className="md:flex hidden  flex-col items-center justify-center flex-1 gap-8 md:p-9 lg:p-14 ml-3 bg-white dark:bg-[#444] rounded-lg item2 h-[500px] border-[1px] border-gray-100 dark:border-gray-400">
          <div className="mt-auto text-5xl font-semibold text-transparent uppercase bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text">
            multasab
          </div>
          <div className="text-[gray] dark:text-[lightgray] ">
            <p className="w-64 text-xl ml-9">
              ¡Wow! Te pusieron una multa. Inicia sesion para ver cuales fueron.
            </p>
          </div>

          <span className="text-lg text-center text-[gray] dark:text-[lightgray] mt-auto">
            ¿No tienes una cuenta?
            <Link to="/register" className="underline text-rose-500">
              Crea una
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
