import React from "react";
import { Multas } from "../../utils/type";
import { Link } from "react-router-dom";

interface Props {
  multa: Multas;
}
const Tarifario: React.FC<Props> = ({ multa }) => {
  return (
    <div className="w-full h-[200px]  rounded-lg p-4 border-[1px] border-gray-200 bg-white dark:bg-[#444] flex flex-col gap-2 dark:border-[#444] justify-between">
      <span className="text-lg font-semibold dark:text-[whitesmoke]">
        {multa.reason}
      </span>
      <p className="font-medium dark:text-[lightgray]">{multa.comment}</p>
      <Link
        to={`/trafficFineDetails/${multa.id}`}
        className="self-end p-1 mt-2 font-medium bg-gray-200 dark:bg-[#333] dark:text-[lightgray] rounded-lg"
      >
        Ver mas
      </Link>
    </div>
  );
};

export default Tarifario;
