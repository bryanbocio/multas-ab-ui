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

const BasketItem: React.FC<Props> = ({ trafficFines }) => {
  const { token } = useContext(AuthContext) as AuthContextType;
  const { data, isLoading, error } = useQuery({
    queryKey: ["basketTrafficFines"],
    queryFn: () => {
      return newRequest(token)
        .get("TrafficFine")
        .then((results) => results.data.data)
        .catch((err) => console.log(err));
    },
  });
  const { data: reasonData, isLoading: loadingReason } = useQuery({
    queryKey: ["reasonsPrice"],
    queryFn: () => {
      return newRequest(token)
        .get("TrafficFine/reasons")
        .then((results) => results.data)
        .catch((err) => console.log(err));
    },
  });

  return (
    <div>
      {error
        ? "Error"
        : isLoading
        ? "loading..."
        : data.map(
            (e: any) =>
              e.id === trafficFines.trafficFineId && (
                <div
                  key="e.id"
                  className="flex gap-5 items-center border-b-[1px] p-2 border-zinc-200 dark:border-zinc-600"
                >
                  <div className="flex flex-col max-w-3xl gap-2">
                    <span className="text-xl font-semibold">
                      {e.reason.split(" ").slice(1).join(" ")}
                    </span>
                    <span className="text-lg font-medium">{e.comment}</span>
                    <span className="mt-2 font-medium">
                      RD$
                      {reasonData &&
                        reasonData
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
