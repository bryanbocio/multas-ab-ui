import { Link } from "react-router-dom";

const Footbar = () => {
  return (
    <div className="sticky inset-x-0 bottom-0 block overflow-hidden bg-emerald-500/90 dark:bg-emerald-600 md:hidden backdrop-blur-md">
      <div className="flex justify-center gap-5 p-5 font-semibold text-white">
        <Link to="/home" className="sm:text-sm">Multas</Link>
        <Link to="/drivers" className="sm:text-sm">Consultas</Link>
        <Link to="/map"className="sm:text-sm">Mapa</Link>
        <div className="sm:text-sm">Noticias</div>
        <Link to="/weather" className="sm:text-sm">Clima</Link>
      </div>
    </div>
  );
};

export default Footbar;
