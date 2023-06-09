import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleVisible = () => setVisible(!visible);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-100">
      <div className="relative flex flex-col items-center gap-4 p-4 bg-white rounded-lg border-b-[1px] border-emerald-500">
        <h1 className="text-3xl font-semibold ">Inicio de sesion</h1>

        <form
          action=""
          onSubmit={handleSubmit}
          className="mx-auto flex w-[100%] flex-col justify-center  p-4 md:w-[400px]"
        >
          <input
            type="email"
            placeholder="Usuario"
            className="rounded-lg border-[1px] border-gray-300 p-3 caret-teal-500 outline-none transition duration-300 hover:border-green-600"
          />
          <div className="flex  overflow-hidden rounded-lg border-[1px] border-gray-300 hover:border-green-500 items-center transition duration-300  mt-5 ">
            <input
              onChange={(e) => {
                e.target.value ===""&& setVisible(false);
              }}
              type={visible ? "text" : "password"}
              placeholder="Contraseña"
              className="w-full p-3 rounded-lg outline-none "
            />
            <button className="pr-2" onClick={handleVisible}>
              {visible ? (
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
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
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
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="text-[gray] ml-auto mt-1">
            ¿Olvidaste tu contraseña?
          </div>
          <button className="p-3 mt-5 font-semibold text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-700">
            Iniciar Sesion
          </button>
          <div className="mx-auto mt-3">
            ¿No tienes cuenta?
            <Link className="text-green-500 underline" to="/register">
              crea una
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
