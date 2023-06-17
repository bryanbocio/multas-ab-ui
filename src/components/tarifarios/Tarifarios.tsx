import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Tarifario from "../tarifario/Tarifario";
import { Multas } from "../../utils/type";
const Tarifarios = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["multas"],
    queryFn: () => {
      return axios
        .get("https://localhost:5001/api/TrafficFine")
        .then((result) => result.data.data)
        .catch((error) => console.error(error));
    },
  });

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {error
        ? "Error"
        : isLoading
        ? "Loading"
        : data.map((e: Multas) => <Tarifario multa={e} key={e.id}/>)}
    </div>
  );
};

export default Tarifarios;
