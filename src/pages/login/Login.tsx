import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("false");
  const handleVisible = () => setVisible(!visible);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user == "" || password == "") {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 ">
      <div className="flex h-full w-[40%] items-center justify-center">
        <div className="flex flex-col items-center justify-center flex-1 p-5 scale-110 rounded-lg item1 h-96 gap-7 bg-emerald-500/90">
          <h2 className="text-2xl font-semibold text-white">
            Inicio de sesion
          </h2>
          <form className="flex w-[260px] flex-col gap-3">
            <input
              type="text"
              className="rounded-lg border-[1px] border-gray-100 bg-transparent p-2 text-white placeholder-gray-100 caret-white outline-none"
              placeholder="Usuario"
            />
            <input
              type="password"
              className="rounded-lg border-[1px] border-gray-100 bg-transparent p-2 text-white placeholder-gray-100 caret-white outline-none"
              placeholder="Contraseña"
            />

            <button className="p-2 mt-2 text-black transition duration-300 bg-gray-100 rounded-lg hover:bg-white">
              Iniciar sesion
            </button>
            <a href="" className="text-sm text-center text-gray-100">
              ¿Olvidaste tu contraseña?
            </a>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 gap-5 p-5 ml-3 bg-white rounded-lg item2 h-[400px] border-[1px] border-gray-100">
          <div className="mt-auto text-5xl font-semibold text-transparent uppercase bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text">
            multasab
          </div>
          <div className="text-[gray] ">
            <p className="w-64 text-lg ml-9">
              ¡Wow! Te pusieron una multa. Inicia sesion para ver cuales fueron.
            </p>
          </div>

          <span className="text-lg text-center text-[gray] mt-auto">
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
