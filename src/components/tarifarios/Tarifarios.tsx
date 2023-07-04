import { useQuery } from "@tanstack/react-query";
import Tarifario from "../tarifario/Tarifario";
import { Multas } from "../../utils/type";
import newRequest from "../../Request";
const Tarifarios = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["multas"],
    queryFn: () => {
      return newRequest
        .get("TrafficFine")
        .then((result) => result.data.data)
        .catch((error) => console.error(error));
    },
  });

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {error ? (
        "Error"
      ) : isLoading ? (
        <div className="flex gap-1 mx-auto col-span-full">
          <span className="h-6 w-6 rounded-full bg-emerald-400 animate-[bounce_0.9s_infinite_100ms]"></span>
          <span className="w-6 h-6 rounded-full bg-emerald-400 animate-bounce "></span>
          <span className="h-6 w-6 rounded-full bg-emerald-400 animate-[bounce_1s_infinite_100ms]"></span>
        </div>
      ) : (
        data.map((e: Multas) => <Tarifario multa={e} key={e.id} />)
      )}
    </div>
  );
};

export default Tarifarios;
