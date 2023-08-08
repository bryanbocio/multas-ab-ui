import { useMutation, useQuery } from "@tanstack/react-query";
import newRequest from "../../Request";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import BasketItem from "../../components/basketItem/BasketItem";
import ErrorComponent from "../../components/errorComponent/ErrorComponent";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const { token, currentUser } = useContext(AuthContext) as AuthContextType;
  const [total, setTotal] = useState<number>(0);
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: ["basketItems"],
    queryFn: () => {
      return newRequest(token)
        .get(`Basket?id=${currentUser.given_name}`)
        .then((results) => results.data)
        .catch((err) => console.log(err));
    },
  });

  /*   const { data: reasonData } = useQuery({
    queryKey: ["trafficPrices"],
    queryFn: () => {
      return newRequest(token)
        .get("TrafficFine/reasons")
        .then((results) => results.data)
        .catch((err) => console.log(err));
    },
  }); */
  const { mutate, data: paymentData } = useMutation({
    mutationFn: () => {
      return newRequest(token).post(`Payments/${data.id}`);
    },
  });
  const createPaymentIntent = () => {
    mutate();
  };
  useEffect(() => {
    !isLoading &&
      setTotal(
        data.items.reduce(
          (accumulator: any, price: any) =>
            accumulator + price.trafficFinePrice,
          0
        )
      );
  }, [data]);
  useEffect(() => {
    paymentData && navigate(`/checkout/${paymentData.data.clientSecret}`);
  }, [paymentData]);
  return (
    <div className="container relative flex flex-col gap-5 mx-auto md:flex-row lg:gap-10 md:items-start">
      <div
        className={`flex-2 ${
          error ? "bg-transparent" : "bg-white dark:bg-[#444]"
        } p-3 rounded-lg dark:text-[lightgray] text-black flex flex-col gap-6 justify-center`}
      >
        {error ? (
          <ErrorComponent />
        ) : isLoading ? (
          <Loader />
        ) : data.items.length ? (
          data.items.map((e: any) => (
            <BasketItem
              key={e.id}
              trafficFines={e}
              setTotal={setTotal}
              total={total}
            />
          ))
        ) : (
          "No tienes multas agregar al carrito aun"
        )}
      </div>
      <div className=" hidden sticky top-0 flex-1 bg-white dark:bg-[#444] p-4  rounded-lg flex-col md:flex gap-5 shadow-md">
        <h2 className="text-xl  lg:text-2xl font-semibold text-black dark:text-[lightgray]">
          Multas por pagar
        </h2>
        <span className="text-xl lg:text-2xl font-semibold dark:text-[lightgray] ">
          Total {total !== 0 && `RD$${total.toLocaleString('en-US')}`}
        </span>
        <button
          className="p-1 text-lg font-semibold text-white rounded-md bg-emerald-500/90"
          onClick={createPaymentIntent}
        >
          Pagar multas
        </button>
      </div>

      <div className="block w-full md:hidden">
        {!error && (
          <button
            className="w-full p-2 text-lg font-semibold text-white rounded-lg bg-emerald-500/90"
            onClick={createPaymentIntent}
          >
            Pagar multas
          </button>
        )}
      </div>
    </div>
  );
};

export default Basket;
