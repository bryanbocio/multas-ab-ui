import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import newRequest from "../../Request";
import { Basket } from "../../utils/type";
import Loader from "../../components/loader/Loader";
import ErrorComponent from "../../components/errorComponent/ErrorComponent";
const TrafficFineDetails = () => {
  const [total, setTotal] = useState<number>(0);
  const { pathname } = useLocation();
  const { token, currentUser } = useContext(AuthContext) as AuthContextType;
  const trafficFineId = pathname.split("/")[2];

  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["oneTrafficFine"],
    queryFn: () => {
      return newRequest(token)
        .get(`TrafficFine/${trafficFineId}`)
        .then((response) => response.data)
        .catch((err) => console.log(err));
    },
  });
  const { data: reasonData, isLoading: loadingReason } = useQuery({
    queryKey: ["reasonsPricesDetails"],
    queryFn: () => {
      return newRequest(token)
        .get("TrafficFine/reasons")
        .then((results) => results.data)
        .catch((err) => console.log(err));
    },
  });
  const { mutate } = useMutation({
    mutationFn: (newTodo: Basket) => {
      return newRequest(token).post("Basket", newTodo);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["basketItem"]);
      queryClient.invalidateQueries(["basketItemMobile"]);
    },
    onError: () => {
      console.log("error");
    },
  });
  const AddToCart = () => {
    mutate({
      id: currentUser.given_name,
      items: [
        {
          id: Math.floor(Math.random() * 1000000),
          trafficFineId: data.id,
          trafficFinePrice: total,
        },
      ],
    });
  };
  useEffect(() => {
    !loadingReason &&
      setTotal(
        reasonData
          .filter((reason: any) => reason.reason == data.reason)
          .map((obj: any) => obj.price)[0]
      );
  }, [data]);
  return (
    <div className="container flex flex-col items-center justify-center gap-5 max-h-fit">
      {error ? (
        <ErrorComponent />
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-col w-full gap-5 top md:flex-row md:gap-10 ">
            <div className="left flex-1 bg-white dark:bg-[#444] rounded-lg shadow-md p-6 flex flex-col gap-2 dark:text-[whitesmoke]">
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/vv57vdt/perfil-del-usuario.png"
                  className="w-10 md:w-12"
                  alt=""
                />
                <h2 className="mb-2 text-xl font-semibold md:text-2xl ">
                  Conductor
                </h2>
              </div>
              <div className="text-lg font-medium capitalize">
                <span className="font-semibold">Nombre: </span>
                {data.driver.name}
              </div>
              <div className="text-lg font-medium capitalize">
                <span className="font-semibold">Apellido: </span>
                {data.driver.lastName}
              </div>
              <div className="text-lg font-medium ">
                <span className="font-semibold">Cedula: </span>
                {data.driver.driverId.replace(
                  /(\d{3})(\d{7})(\d{1})/,
                  "$1-$2-$3"
                )}
              </div>
              <div className="text-lg font-medium capitalize">
                <span className="font-semibold">Numero: </span>
                {data.driver.number}
              </div>
            </div>
            <div className="right flex-1 bg-white dark:bg-[#444] rounded-lg shadow-md p-6 flex flex-col gap-2 dark:text-[whitesmoke]">
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/bJ0R4RD/policia.png"
                  className="w-10 md:w-12"
                  alt=""
                />
                <h2 className="mb-2 text-xl font-semibold md:text-2xl ">
                  Agente
                </h2>
              </div>
              <div className="text-lg font-medium capitalize">
                <span className="font-semibold">Nombre: </span>
                {data.agent.name}
              </div>
              <div className="text-lg font-medium capitalize">
                <span className="font-semibold">Apellido: </span>
                {data.agent.lastName}
              </div>
              <div className="text-lg font-medium ">
                <span className="font-semibold">Cedula: </span>
                {data.agent.agentId.replace(
                  /(\d{3})(\d{7})(\d{1})/,
                  "$1-$2-$3"
                )}
              </div>
              <div className="text-lg font-medium ">
                <span className="font-semibold">Numero: </span>
                {data.agent.number}
              </div>
            </div>
          </div>
          <div className="bottom bg-white dark:bg-[#444] p-6 rounded-lg w-full shadow-md flex flex-col gap-2 dark:text-[whitesmoke] items-start">
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/5GH4cJM/cono-de-trafico.png"
                className="w-10 md:w-12"
                alt=""
              />
              <h2 className="mb-2 text-xl font-semibold md:text-2xl ">Multa</h2>
            </div>
            <span className="text-lg font-medium capitalize ">
              <span className="font-semibold">Placa: </span>
              {data.carPlate}
            </span>
            <span className="text-lg font-medium capitalize">
              <span className="font-semibold">Razon: </span>
              {data.reason.split(" ").slice(1).join(" ")}
            </span>
            <div className="text-lg font-medium capitalize ">
              <span className="font-semibold ">Comentario: </span>
              {data.comment}
            </div>
            <div className="text-lg font-medium capitalize ">
              <span className="font-semibold">RD$</span>
              {reasonData &&
                reasonData
                  .filter((reason: any) => reason.reason == data.reason)
                  .map((obj: any) => obj.price)
                  .toLocaleString("en-US")}
            </div>

            {data.status === "PENDIENTE" && (
              <button
                onClick={AddToCart}
                className="bg-emerald-500 dark:bg-emerald-600  p-2 font-semibold text-white dark:text-[whitesmoke] rounded-lg"
              >
                Pagar luego
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TrafficFineDetails;
