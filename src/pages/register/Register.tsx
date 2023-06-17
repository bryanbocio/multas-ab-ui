import { Link } from "react-router-dom";
//cambios
const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 ">
      <div className="flex flex-row-reverse h-full w-[40%] items-center justify-center">
        <div className="flex flex-col items-center justify-center flex-1 p-5 scale-110 rounded-lg item1 h-96 gap-7 bg-emerald-500/90">
          <h2 className="text-2xl font-semibold text-white">
            Inicio de sesion
          </h2>
          <form className="flex w-[260px] flex-col gap-3">
            <input
              type="text"
              className="rounded-lg border-[1px] border-gray-100 bg-transparent p-2 text-white placeholder-gray-100 caret-white outline-none"
              placeholder="Nombre"
            />
            <input
              type="text"
              className="rounded-lg border-[1px] border-gray-100 bg-transparent p-2 text-white placeholder-gray-100 caret-white outline-none"
              placeholder="Apellido"
            />
            <input
              type="email"
              className="rounded-lg border-[1px] border-gray-100 bg-transparent p-2 text-white placeholder-gray-100 caret-white outline-none"
              placeholder="Correo"
            />

            <button className="p-2 mt-2 text-black transition duration-300 bg-gray-100 rounded-lg hover:bg-white">
              Iniciar sesion
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 gap-5 p-5 ml-3 bg-white rounded-lg item2 h-[400px] border-[1px] border-gray-100">
          <div className="mt-auto text-5xl font-semibold text-transparent uppercase bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text">
            multasab
          </div>
          <div className="text-[gray] ">
            <p className="w-64 text-lg">
              ¡Que vaina! Registrate pronto, para que puedas iniciar sesion en
              la plataforma, para ver tus multas.
            </p>
          </div>

          <span className="text-lg text-center text-[gray] mt-auto">
            ¿Ya tienes cuenta?
            <Link to="/" className="underline text-rose-500">
              Inicia sesion
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
