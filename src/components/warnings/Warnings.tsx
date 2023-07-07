import React from "react";

interface Props{
    msg: string;
}

const Warnings:React.FC<Props> = ({msg}) => {
  return         <div className="col-span-full mx-auto font-medium text-lg md:text-xl ">{msg}</div>
  ;
};

export default Warnings;
