import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import newRequest from "../../Request";

const PaymentSuccess = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { token, currentUser } = useContext(AuthContext) as AuthContextType;
  const { mutate } = useMutation({
    mutationFn: () => {
      return newRequest(token).delete(`Basket?id=${currentUser.given_name}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["basketItem"]),
        queryClient.invalidateQueries(["basketItemMobile"]);
    },
  });

  useEffect(() => {
    mutate();
  }, []);
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
    </div>
  );
};

export default PaymentSuccess;
