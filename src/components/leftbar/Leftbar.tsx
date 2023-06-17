import { Link } from "react-router-dom";

const Leftbar = () => {
  return (
    <div className=" hidden md:block sticky flex-2 lg:flex-1 h-[calc(100vh_-_0px)] p-5 bg-white top-0">
      <div className="text-3xl font-semibold text-transparent uppercase bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text">
        multasab
      </div>

      <div className="flex flex-col mt-5 gap-9">
        <div className="">
          <Link to="/" className="text-lg font-medium text-emerald-500">
            Tarifario multas
          </Link>
        </div>

        <div className="">
          <Link to="/" className="text-lg font-medium ">
            Consultar Vehiculos
          </Link>
        </div>
        <div className="">
          <Link to="/" className="text-lg font-medium ">
            Consultar Conductor
          </Link>
        </div>
        <div className="">
          <Link to="/" className="text-lg font-medium ">
            Aplicar Multa
          </Link>
        </div>
        <div className="">
          <Link to="/" className="text-lg font-medium ">
            Multas Registradas
          </Link>
        </div>
        <div className="">
          <Link to="/" className="text-lg font-medium ">
            Mapa de Multas
          </Link>
        </div>
        <div className="">
          <Link to="/" className="text-lg font-medium ">
            Noticias
          </Link>
        </div>
        <div className="">
          <Link to="/" className="text-lg font-medium ">
            Estado del Clima
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 mx-auto bg-transparent">
        <div className="text-base font-semibold text-center text-transparent uppercase lg:text-lg bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500 bg-clip-text">
          Developed by group 6
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
