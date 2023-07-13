import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import newRequest from "../../Request";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";

interface Props {
  trafficFines: any;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}

const BasketItem: React.FC<Props> = ({ trafficFines, setTotal, total }) => {
  const { token } = useContext(AuthContext) as AuthContextType;
  const { data, isLoading } = useQuery({
    queryKey: ["basketTrafficFines"],
    queryFn: () => {
      return newRequest(token)
        .get("TrafficFine")
        .then((results) => results.data.data)
        .catch((err) => console.log(err));
    },
  });
  const { data: reasonData } = useQuery({
    queryKey: ["reasonsPrice"],
    queryFn: () => {
      return newRequest(token)
        .get("TrafficFine/reasons")
        .then((results) => results.data)
        .catch((err) => console.log(err));
    },
  });
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTotal(total + parseInt(e.target.value));
    } else {
      setTotal(total - parseInt(e.target.value));
    }
  };

  return (
    <div>
      {isLoading
        ? "loading..."
        : data.map(
            (e: any) =>
              e.id === trafficFines.trafficFineId && (
                <div
                  key="e.id"
                  className="flex gap-5 items-center border-b-[1px] p-2 border-zinc-200 dark:border-zinc-600"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded-lg hidden md:block"
                    onChange={handleCheckboxChange}
                    value={reasonData
                      .filter((reason: any) => reason.reason == e.reason)
                      .map((obj: any) => obj.price)}
                  />
                  <div className="flex flex-col gap-2 max-w-3xl">
                    <span className="text-xl font-semibold">{e.reason}</span>
                    <span className="text-lg font-medium">{e.comment}</span>
                    <span className="font-medium mt-2">
                      RD$
                      {reasonData
                        .filter((reason: any) => reason.reason == e.reason)
                        .map((obj: any) => obj.price)}
                    </span>
                  </div>
                </div>
              )
          )}
    </div>
  );
};

export default BasketItem;
