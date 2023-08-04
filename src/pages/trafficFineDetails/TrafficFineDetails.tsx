import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import newRequest from "../../Request";
import { Basket } from "../../utils/type";
import Loader from "../../components/loader/Loader";
import ErrorComponent from "../../components/errorComponent/ErrorComponent";
const TrafficFineDetails = () => {
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
          trafficFinePrice: 1,
        },
      ],
    });
  };
  return (
    <div className="flex flex-col gap-5  container justify-center items-center max-h-fit">
      {error ? (
        <ErrorComponent />
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="top flex flex-col md:flex-row gap-5 md:gap-10 w-full ">
            <div className="left flex-1 bg-white dark:bg-[#444] rounded-lg shadow-md p-6 flex flex-col gap-2 dark:text-[whitesmoke]">
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/vv57vdt/perfil-del-usuario.png"
                  className="w-10 md:w-12"
                  alt=""
                />
                <h2 className="text-xl mb-2 md:text-2xl font-semibold ">
                  Conductor
                </h2>
              </div>
              <div className="font-medium text-lg capitalize">
                <span className="font-semibold">Nombre: </span>
                {data.driver.name}
              </div>
              <div className="font-medium text-lg capitalize">
                <span className="font-semibold">Apellido: </span>
                {data.driver.lastName}
              </div>
              <div className="font-medium text-lg ">
                <span className="font-semibold">Cedula: </span>
                {data.driver.driverId}
              </div>
              <div className="font-medium text-lg capitalize">
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
                <h2 className="text-xl mb-2 md:text-2xl font-semibold ">
                  Agente
                </h2>
              </div>
              <div className="font-medium text-lg capitalize">
                <span className="font-semibold">Nombre: </span>
                {data.agent.name}
              </div>
              <div className="font-medium text-lg capitalize">
                <span className="font-semibold">Apellido: </span>
                {data.agent.lastName}
              </div>
              <div className="font-medium text-lg ">
                <span className="font-semibold">Cedula: </span>
                {data.agent.agentId}
              </div>
              <div className="font-medium text-lg ">
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
              <h2 className="text-xl mb-2 md:text-2xl font-semibold ">Multa</h2>
            </div>
            <span className="font-medium text-lg capitalize ">
              <span className="font-semibold">Placa: </span>
              {data.carPlate}
            </span>
            <span className="font-medium text-lg capitalize">
              <span className="font-semibold">Razon: </span>
              {data.reason.split(" ").slice(1).join(" ")}
            </span>
            <span className="font-medium text-lg capitalize ">
              <span className="font-semibold ">Comentario: </span>
              {data.comment}
            </span>

            {
              data.status === "PENDIENTE"  &&
              <button
              onClick={AddToCart}
              className="bg-emerald-500 dark:bg-emerald-600  p-2 font-semibold text-white dark:text-[whitesmoke] rounded-lg"
              >
              Pagar luego
            </button>
            }
          </div>
        </>
      )}
    </div>
  );
};

export default TrafficFineDetails;
