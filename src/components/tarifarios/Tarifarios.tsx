import { useQuery } from "@tanstack/react-query";
import Tarifario from "../tarifario/Tarifario";
import { Multas } from "../../utils/type";
import newRequest from "../../Request";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import Loader from "../loader/Loader";
import Warnings from "../warnings/Warnings";
import { hasMultipleRoles } from "../../utils/Roles";
const Tarifarios = () => {
  const { token, currentUser } = useContext(AuthContext) as AuthContextType;
  const role = hasMultipleRoles(currentUser.role);
  const { data, error, isLoading } = useQuery({
    queryKey: ["multas"],
    queryFn: () => {
      return newRequest(token)
        .get(
          role
            ? "TrafficFine"
            : `TrafficFine?IdentityDriver=${currentUser.given_name}`
        )
        .then((result) => result.data.data)
        .catch((error) => console.log(error));
    },
  });

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {error ? (
        "Error"
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

export default Tarifarios;
