import { useContext, useEffect, useState } from "react";
import { RegisterAgent } from "../../utils/type";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import newRequest from "../../Request";
import { useNavigate } from "react-router-dom";

const CreateAgent = () => {
  const { token } = useContext(AuthContext) as AuthContextType;
  const [input, setInput] = useState<RegisterAgent>({
    identityUserId: "",
    email: "",
    password: "",
    name: "",
    lastName: "",
    phoneNumber: "",
    role: "AGENT",
  });
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: (newTodo: RegisterAgent) => {
      return newRequest(token).post("Account/registerbyadmin", newTodo);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(input);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/home");
    }
  }, [isSuccess]);
  return (
    <div className="container flex justify-center p-2 ">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 md:gap-3 w-full md:w-[40%] inputs"
      >
        {isError && (
          <span className="text-rose-500 font-semibold text-lg">Error</span>
        )}
        <input
          onChange={handleChange}
          type="text"
          name="name"
          className="    p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full "
          placeholder="Nombre"
        />
        <input
          onChange={handleChange}
          type="text"
          name="lastName"
          className="    p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full"
          placeholder="Apellido"
        />
        <input
          onChange={handleChange}
          type="text"
          name="email"
          className="  p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full "
          placeholder="Correo"
        />
        <input
          onChange={handleChange}
          type="text"
          name="identityUserId"
          className="    p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full "
          placeholder="Cedula del agente"
        />
        <input
          onChange={handleChange}
          type="text"
          name="phoneNumber"
          className="    p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full "
          placeholder="Telefono"
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          className="    p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full "
          placeholder="Contraseña"
        />
        <button className=" w-full p-4 font-medium text-white bg-gray-200 rounded-md border-[1px] border-gray-300 hover:bg-emerald-500/90 transition duration-300 group dark:bg-stone-600">
          <span className="text-base font-semibold text-transparent transition duration-300 lg:text-lg bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500 bg-clip-text dark:from-emerald-500 dark:via-yellow-500 dark:to-orange-500 group-hover:bg-transparent group-hover:text-white ">
            Crear agente
          </span>
        </button>
      </form>
    </div>
  );
};

export default CreateAgent;
