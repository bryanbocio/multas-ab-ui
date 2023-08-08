import React from "react";
import { Multas } from "../../utils/type";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import esLocale from "date-fns/locale/es"; // Importa el locale español
interface Props {
  multa: Multas;
}
const Tarifario: React.FC<Props> = ({ multa }) => {
  const date = new Date(multa.dateCreated);
  const formattedDistance = formatDistanceToNow(date , { locale: esLocale });
  return (
    <div className="w-full h-[200px]  rounded-lg p-4 border-[1px] border-gray-200 bg-white dark:bg-[#444] flex flex-col gap-2 dark:border-[#444] justify-between">
      <span className="text-sm font-semibold capitalize">{formattedDistance}</span>
      <span className="text-lg font-bold dark:text-[whitesmoke] truncate">
        {multa.reason.split(" ").slice(1).join(" ")}
      </span>
      <p className="font-semibold dark:text-[lightgray] truncate ">
        {multa.comment}
      </p>

      <div className="flex flex-row-reverse justify-between">
        <Link
          to={`/trafficFineDetails/${multa.id}`}
          className=" p-2 mt-2 font-medium bg-gray-200 dark:bg-[#333] dark:text-[lightgray] rounded-lg"
        >
          Ver mas
        </Link>

        <span
          className={`self-end p-2 mt-2  ${
            multa.status === "PAGADO" ? "text-emerald-500/90" : "text-rose-500"
          } font-semibold`}
        >
          {multa.status === "PAGADO" ? "Pagada" : "Pendiente"}
        </span>
      </div>
    </div>
  );
};

export default Tarifario;
