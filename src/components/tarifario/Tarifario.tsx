import React from "react";
import { Multas } from "../../utils/type";
import { Link } from "react-router-dom";

interface Props {
  multa: Multas;
}
const Tarifario: React.FC<Props> = ({ multa }) => {
  return (
    <div className="w-full rounded-lg p-4 border-[1px] border-gray-200 bg-white flex flex-col gap-2">
      <span className="text-lg font-semibold">{multa.reason}</span>
      <p className="font-medium">{multa.comment}</p>
      <Link
        to={`/trafficFineDetails/${multa.id}`}
        className="self-end p-1 mt-2 font-medium bg-gray-200 rounded-lg"
      >
        Ver mas
      </Link>
    </div>
  );
};

export default Tarifario;
