import React from "react";
import { DriverType } from "../../utils/type";

interface Props {
  driver: DriverType;
}
const Driver: React.FC<Props> = ({ driver }) => {
  return (
    <div className="w-full rounded-lg p-4 border-[1px] border-gray-200 bg-white dark:bg-[#444] dark:text-[whitesmoke]  flex flex-col gap-2 dark:border-[#444]">
      <h2 className="text-xl font-semibold">
        {driver.name} {driver.lastName}
      </h2>

      <span className="text-xl font-">{driver.phoneNumber}</span>
      <span className="text-xl font-">
        {driver.driverIdentity.replace(/(\d{3})(\d{7})(\d{1})/, "$1-$2-$3")}
      </span>
    </div>
  );
};

export default Driver;
