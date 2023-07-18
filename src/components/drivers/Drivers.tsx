import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import newRequest from "../../Request";
import { DriverType } from "../../utils/type";
import Driver from "../driver/Driver";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import Loader from "../loader/Loader";
import Warnings from "../warnings/Warnings";
import ErrorComponent from "../errorComponent/ErrorComponent";

const Drivers = () => {
  const { token } = useContext(AuthContext) as AuthContextType;
  const { data, error, isLoading } = useQuery({
    queryKey: ["driver"],
    queryFn: () => {
      return newRequest(token)
        .get("Driver")
        .then((result) => result.data.data)
        .catch((error) => console.log(error));
    },
  });

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {error ? (
        <div className="col-span-full">
          <ErrorComponent />
        </div>
      ) : isLoading ? (
        <Loader />
      ) : data.length ? (
        data.map((e: DriverType) => <Driver key={e.id} driver={e} />)
      ) : (
        <Warnings msg={"No hay multas aun registradas"} />
      )}
    </div>
  );
};

export default Drivers;
