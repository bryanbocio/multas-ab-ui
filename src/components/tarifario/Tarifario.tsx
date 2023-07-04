import React from "react";
import { Multas } from "../../utils/type";

interface Props {
  multa: Multas;
}
const Tarifario: React.FC<Props> = ({ multa }) => {
  return (
    <div className="w-full rounded-lg p-4 border-[1px] border-gray-200 bg-white flex flex-col gap-2">
      <span className="text-lg font-semibold">{multa.reason}</span>
      <p className="font-medium">{multa.comment}</p>
      <button className="self-end p-1 mt-2 font-medium bg-gray-200 rounded-lg">
        Ver mas
      </button>
    </div>
  );
};

export default Tarifario;
