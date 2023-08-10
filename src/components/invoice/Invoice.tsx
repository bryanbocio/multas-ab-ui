import React from "react";
import Loader from "../loader/Loader";

interface Props {
  multa: any;
}
const Invoice: React.FC<Props> = ({ multa }) => {
  console.log(multa);
  return (
    <div>
      <Loader />
    </div>
  );
};

export default Invoice;
