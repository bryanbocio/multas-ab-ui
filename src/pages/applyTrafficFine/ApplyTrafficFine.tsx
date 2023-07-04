import React from "react";
/*
  comment: string,
  latitude: string,
  longitude: string,
  dateCreated: Date
  agentIdentity: string */
const ApplyTrafficFine = () => {
  return (
    <div className="flex justify-center ">
      <form action="" className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 md:gap-10 md:flex-row">
          <div className="flex flex-col gap-2">
            <input type="text" className="p-2 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full" placeholder="Cedula del conductor"/>
            <input type="text" className="p-2 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full" placeholder="Celular del conductor"/>
            <input type="text" className="p-2 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full" placeholder="Placa del vehiculo" />
            <input type="text" className="p-2 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full" placeholder="Razon por la multa"/>
            <input type="text" className="p-2 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full" placeholder="Cedula de conductor"/>
          </div>
          <div className="flex flex-col gap-2">
            <input type="text" className="p-2 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full" placeholder="Comentario"/>
            <input type="text" className="p-2 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full" placeholder="Longitud"/>
            <input type="text" className="p-2 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full" placeholder="Latitud"/>
            <input type="date" className="p-2 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full" placeholder="Fecha"/>
            <input type="text" className="p-2 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full" placeholder="Identidad del agente"/>
          </div>
        </div>
        <button  className="w-full p-2 font-medium text-white rounded-md bg-emerald-500/90">Agregar multa</button>
      </form>
    </div>
  );
};

export default ApplyTrafficFine;
