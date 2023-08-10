import { useEffect, useState } from "react";
import { SignUp } from "../../utils/type";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { format, formatPhoneNumber } from "../../utils/formatIdentityId";
import axios from "axios";
import ButtonLoader from "../../components/buttonLoader/ButtonLoader";
const CreateDriver = () => {
  const [formattedValue, setFormattedValue] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [inputs, setInputs] = useState<SignUp>({});

  const navigate = useNavigate();
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: (newTodo: SignUp) => {
      return axios.post("https://localhost:5001/api/Account/register", newTodo);
    },
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedInputValue = format(event);
    setFormattedValue(formattedInputValue);
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value.replace(/-/g, ""),
    }));
  };

  const handleInputChangeNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const formattedValue = formatPhoneNumber(event.target.value);
    setPhoneNumber(formattedValue);
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value.replace(/\D/g, ""),
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { confirmPassword, ...info } = inputs;
      mutate(info);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/home");
    }
  }, [isSuccess]);
  return (
    <div className="container flex justify-center p-2 ">
      <form
        className="flex flex-col gap-2 md:gap-3 w-full md:w-[40%] inputs"
        onSubmit={handleSubmit}
      >
        {isError && (
          <span className="text-lg font-semibold text-rose-500">Llena todos los campos</span>
        )}
        <input
          onChange={handleInputChange}
          type="text"
          value={formattedValue}
          maxLength={13}
          name="identityUserId"
          className="p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full"
          placeholder="Cedula"
        />
        <input
          onChange={handleOnChange}
          type="email"
          name="email"
          className="p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full"
          placeholder="Correo"
        />
        <input
          onChange={handleOnChange}
          type="text"
          name="name"
          className="p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full"
          placeholder="Nombre"
        />
        <input
          onChange={handleOnChange}
          type="text"
          name="lastName"
          className="p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full"
          placeholder="Apellido"
        />
        <input
          onChange={handleInputChangeNumber}
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          maxLength={14}
          className="p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full"
          placeholder="Celular"
        />
        <input
          onChange={handleOnChange}
          type="password"
          name="password"
          className="p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full"
          placeholder="Contraseña"
        />
        <input
          onChange={handleOnChange}
          type="password"
          name="confirmPassword"
          className="p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full"
          placeholder="Confirmar contraseña"
        />
        <button className=" w-full p-4 font-medium text-white bg-gray-200 rounded-md border-[1px] border-gray-300 hover:bg-emerald-500/90 transition duration-300 group dark:bg-stone-600">
          <span className="text-base font-semibold text-transparent transition duration-300 lg:text-lg bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500 bg-clip-text dark:from-emerald-500 dark:via-yellow-500 dark:to-orange-500 group-hover:bg-transparent group-hover:text-white ">
            {isLoading ? <ButtonLoader /> : " Crear conductor"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default CreateDriver;
