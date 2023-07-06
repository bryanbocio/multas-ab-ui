import React from "react";
import { DriverType } from "../../utils/type";

interface Props {
  driver: DriverType;
}
const Driver: React.FC<Props> = ({ driver }) => {
  const style = `w-full rounded-lg p-4 border-[1px] border-gray-300 bg-white  flex flex-col gap-2`;
  return (
    <div className={style}>
      <h2>
        {driver.name} {driver.lastName}
      </h2>

      <span>{driver.phoneNumber}</span>
    </div>
  );
};

export default Driver;
