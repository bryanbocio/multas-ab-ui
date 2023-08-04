import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import { hasMultipleRoles } from "../../utils/Roles";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../Request";
import { Multas } from "../../utils/type";
import ErrorComponent from "../../components/errorComponent/ErrorComponent";
import Loader from "../../components/loader/Loader";
import Warnings from "../../components/warnings/Warnings";
import Tarifario from "../../components/tarifario/Tarifario";

const Record = () => {
  const { token, currentUser } = useContext(AuthContext) as AuthContextType;
  const role = hasMultipleRoles(currentUser.role);
  const { data, error, isLoading } = useQuery({
    queryKey: ["multasRecord"],
    queryFn: () => {
      return newRequest(token)
        .get(
          role
            ? "TrafficFine"
            : `TrafficFine?IdentityDriver=${currentUser.given_name}`
        )
        .then((result) =>
          result.data.data.filter((e: Multas) => e.status == "PAGADO")
        )
        .catch((error) => console.log(error));
    },
  });
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {error ? (
        <div className="col-span-full ">
          <ErrorComponent />
        </div>
      ) : isLoading ? (
        <Loader />
      ) : data.length ? (
        data.map((e: Multas) => <Tarifario multa={e} key={e.id} />)
      ) : (
        <Warnings msg={"No hay multas aun registradas"} />
      )}
    </div>
  );
};

export default Record;
