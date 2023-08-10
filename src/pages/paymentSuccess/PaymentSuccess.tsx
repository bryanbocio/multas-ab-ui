import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import newRequest from "../../Request";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import Invoice from "../../components/invoice/Invoice";
import { useNavigate } from "react-router-dom";

interface Order {
  basketId: string;
  driverIdentity: string;
}
const PaymentSuccess = () => {
  const { token, currentUser } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  const [openInvoice, setOpenInvoice] = useState<boolean>(true);
  const queryClient = useQueryClient();

  const { data: basketData, isLoading: loadingBasket } = useQuery({
    queryKey: ["basketItems"],
    queryFn: () => {
      return newRequest(token)
        .get(`Basket?id=${currentUser.given_name}`)
        .then((results) => results.data)
        .catch((err) => console.log(err));
    },
  });
  const { mutateAsync, data } = useMutation({
    mutationFn: async (newTodo: Order) => {
      return await newRequest(token)
        .post("Order", newTodo)
        .then((result) => result.data)
        .catch((err) => console.log(err));
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["basketItem"]),
        queryClient.invalidateQueries(["basketItemMobile"]);
    },
  });

  useEffect(() => {
    if (!loadingBasket) {
      if (basketData.items.length !== 0) {
        mutateAsync({
          basketId: currentUser.given_name,
          driverIdentity: currentUser.given_name,
        });
      } else {
        return;
      }
    }
  }, [loadingBasket]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center w-full gap-2 p-10 font-bold bg-white rounded-lg dark:bg-[#444] dark:border-[#333] border-[1px] border-gray-200">
        <span className="text-emerald-500/90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-11 h-11"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <span className="text-2xl text-gray-700 dark:text-[lightgray]">
          Pago realizado con exito
        </span>

        <button
          className="p-2 bg-gray-200 rounded-lg"
          onClick={() => navigate("/home")}
        >
          Volver
        </button>
      </div>

      {data && openInvoice && (
        <Invoice multa={data} setOpenInvoice={setOpenInvoice} />
      )}
    </div>
  );
};

export default PaymentSuccess;
