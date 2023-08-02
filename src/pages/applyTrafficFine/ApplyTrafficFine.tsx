import { useContext, useEffect, useState } from "react";
import { TrafficFine } from "../../utils/type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../Request";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";

const ApplyTrafficFine = () => {
  const queryClient = useQueryClient();
  const { token, currentUser, location } = useContext(
    AuthContext
  ) as AuthContextType;
  const navigate = useNavigate();
  const [input, setInputs] = useState<TrafficFine>({
    driverIdentity: "",
    driverName: "",
    driverPhoneNumber: "",
    carPlate: "",
    reason: "",
    comment: "",
    latitude: location.lat || "",
    longitude: location.lon || "",
    dateCreated: new Date(),
    agentIdentity: currentUser.given_name,
  });
  const [errors, setErrors] = useState<boolean>(false);
  const validateInputs = () => {
    const newErrors: Partial<TrafficFine> = {};

    if (!input.driverIdentity.trim()) {
      newErrors.driverIdentity =
        "Por favor, ingresa una identificación del conductor";
    }

    if (!input.driverName.trim()) {
      newErrors.driverName = "Por favor, ingresa un nombre del conductor";
    }

    if (!input.driverPhoneNumber.trim()) {
      newErrors.driverPhoneNumber =
        "Por favor, ingresa un número de teléfono del conductor";
    }

    if (!input.carPlate.trim()) {
      newErrors.carPlate = "Por favor, ingresa una placa de vehículo";
    }

    if (!input.reason.trim()) {
      newErrors.reason = "Por favor, ingresa una razón";
    }

    if (!input.comment.trim()) {
      newErrors.comment = "Por favor, ingresa un comentario";
    }

    if (!input.latitude.trim()) {
      newErrors.latitude = "Por favor, ingresa una latitud";
    }

    if (!input.longitude.trim()) {
      newErrors.longitude = "Por favor, ingresa una longitud";
    }
    if (!input.agentIdentity.trim()) {
      newErrors.agentIdentity = "Por favor, ingresa la cedula del agente";
    }
    //setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };
  const { data } = useQuery({
    queryKey: ["reason"],
    queryFn: () => {
      return newRequest(token)
        .get("TrafficFine/reasons")
        .then((results) => results.data)
        .catch((err) => console.log(err));
    },
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutateAsync, isSuccess } = useMutation({
    mutationFn: (newTodo: TrafficFine) => {
      return newRequest(token).post("TrafficFine", newTodo);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["multas"]);
    },
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const isValid = validateInputs();
      if (isValid) {
        await mutateAsync(input);
      } else {
        setErrors(true);
      }
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
    <div className="container relative mx-auto">
      {errors && (
        <span className="font-medium text-rose-500">
          Favor llenar todos los campos
        </span>
      )}
      <form
        action=""
        className="flex flex-col justify-center mx-auto w-[100%] gap-3 md:gap-5 p-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-full gap-2 md:gap-10 md:flex-row">  
          <div className="flex flex-col flex-1 gap-2 md:gap-3 inputs">
            <input
              onChange={handleChange}
              type="text"
              name="driverName"
              className=" p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full"
              placeholder="Nombre conductor"
            />
            <input
              onChange={handleChange}
              type="text"
              name="driverPhoneNumber"
              className=" p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full"
              placeholder="Celular del conductor"
            />
            <input
              onChange={handleChange}
              type="text"
              name="carPlate"
              className=" p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full"
              placeholder="Placa del vehiculo"
            />
            <select
              className="p-3 md:p-4 rounded-lg outline-none border-[1px] border-gray-200 w-full bg-transparent dark:bg-[#333] dark:text-[lightgray]"
              name="reason"
              id=""
              onChange={handleChange}
            >
              <option value="">Selecciona una opción</option>
              {data &&
                data.map((item: any, index: number) => (
                  <option key={index} value={item.reason}>
                    {item.reason}
                  </option>
                ))}
            </select>
            <input
              onChange={handleChange}
              type="text"
              name="driverIdentity"
              className=" p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full"
              placeholder="Cedula de conductor"
            />
            <input
              onChange={handleChange}
              type="text"
              name="latitude"
              disabled
              value={input.latitude}
              className=" p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full cursor-not-allowed"
              placeholder="Latitud"
            />
            <input
              onChange={handleChange}
              type="text"
              name="longitude"
              value={input.longitude}
              disabled
              className=" p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full cursor-not-allowed"
              placeholder="Longitud"
            />
          </div>
          <div className="flex flex-col flex-1 gap-2 md:gap-3 inputs">
            <textarea
              cols={10}
              rows={9}
              onChange={handleChange}
              name="comment"
              className=" p-2 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full h-16 md:h-1/2  lg:h-full dark:bg-[#333] dark:text-[whitesmoke] dark:placeholder-[lightgray]"
              placeholder="Comentario"
            />
            <input
              onChange={handleChange}
              type="text"
              value={input.agentIdentity}
              name="agentIdentity"
              className=" p-3 md:p-4 rounded-lg outline-none caret-emerald-500 border-[1px] border-gray-200 w-full text-[gray]"
              placeholder="Identidad del agente"
            />
            <button className="hidden w-full p-4 font-medium text-white bg-gray-200 rounded-md md:block border-[1px] border-gray-300 hover:bg-emerald-500/90 transition duration-300 group dark:bg-stone-600">
              <span className="text-base font-semibold text-transparent transition duration-300 lg:text-lg bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500 bg-clip-text dark:from-emerald-500 dark:via-yellow-500 dark:to-orange-500 group-hover:bg-transparent group-hover:text-white ">
                Agregar multa
              </span>
            </button>
          </div>
        </div>
        <button className="block w-full p-3 font-medium text-white rounded-md md:hidden border-[1px] border-gray-300 bg-gray-200  hover:bg-emerald-500/90 transition duration-300 group">
          <span className="text-base font-semibold text-transparent transition duration-300 bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500 bg-clip-text group-hover:bg-transparent group-hover:text-white ">
            Agregar multa
          </span>
        </button>
      </form>
    </div>
  );
};

export default ApplyTrafficFine;
