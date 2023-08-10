import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SignUp } from "../../utils/type";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import axios from "axios";
import ButtonLoader from "../../components/buttonLoader/ButtonLoader";
import { format } from "../../utils/formatIdentityId";

const Register = () => {
  const navigate = useNavigate();
  const [formattedValue, setFormattedValue] = useState<string>("");
  const [inputs, setInputs] = useState<SignUp>({});
  const { token } = useContext(AuthContext) as AuthContextType;
  const [registrando, setRegistrando] = useState<boolean>(false);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedInputValue = format(event);
    setFormattedValue(formattedInputValue);
    setInputs((prev) => ({
      ...prev,
      identityUserId: formattedInputValue.replace(/-/g, ''),
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { confirmPassword, ...info } = inputs;
    try {
      setRegistrando(true);
      await axios
        .post("https://localhost:5001/api/Account/register", info)
        .then(() => {
          setRegistrando(false);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err.response.data.errors);
          setRegistrando(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:flex-row bg-gray-50 dark:bg-[#222]">
      <div className="block my-10 text-3xl font-semibold text-transparent uppercase md:hidden bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text">
        multasab
      </div>
      <div className="rounded-tl-[60px] rounded-tr-[60px] md:rounded-none  flex flex-row-reverse h-screen md:h-full  w-full  md:w-[50%] md:items-center justify-center bg-emerald-500/90 md:bg-transparent pt-12">
        <div className="flex flex-col items-center justify-center flex-1 p-9 lg:p-14 scale-100 bg-transparent rounded-lg md:scale-110 h-[550px] gap-7 md:bg-emerald-500/90 dark:md:bg-emerald-600">
          <h2 className="text-3xl font-semibold text-white md:text-2xl">
            Registro
          </h2>
          <form
            className="flex w-[90%] md:w-[260px] lg:w-[300px] flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <input
              onChange={handleInputChange}
              type="text"
              value={formattedValue}
              maxLength={13}
              name="identityUserId"
              className="rounded-lg border-[1px] border-gray-100 bg-transparent p-2 text-white placeholder-gray-100 caret-white outline-none"
              placeholder="Cedula"
            />
            <input
              onChange={handleOnChange}
              type="email"
              name="email"
              className="rounded-lg border-[1px] border-gray-100 bg-transparent p-2 text-white placeholder-gray-100 caret-white outline-none"
              placeholder="Correo"
            />
            <input
              onChange={handleOnChange}
              type="text"
              name="name"
              className="rounded-lg border-[1px] border-gray-100 bg-transparent p-2 text-white placeholder-gray-100 caret-white outline-none"
              placeholder="Nombre"
            />
            <input
              onChange={handleOnChange}
              type="text"
              name="lastName"
              className="rounded-lg border-[1px] border-gray-100 bg-transparent p-2 text-white placeholder-gray-100 caret-white outline-none"
              placeholder="Apellido"
            />
            <input
              onChange={handleOnChange}
              type="text"
              name="phoneNumber"
              className="rounded-lg border-[1px] border-gray-100 bg-transparent p-2 text-white placeholder-gray-100 caret-white outline-none"
              placeholder="Celular"
            />
            <input
              onChange={handleOnChange}
              type="password"
              name="password"
              className="rounded-lg border-[1px] border-gray-100 bg-transparent p-2 text-white placeholder-gray-100 caret-white outline-none"
              placeholder="Contraseña"
            />
            <input
              onChange={handleOnChange}
              type="password"
              name="confirmPassword"
              className="rounded-lg border-[1px] border-gray-100 bg-transparent p-2 text-white placeholder-gray-100 caret-white outline-none"
              placeholder="Confirmar contraseña"
            />

            <button className="flex items-center justify-center h-10 p-2 mt-2 text-black transition duration-300 bg-gray-100 rounded-lg hover:bg-white">
              {registrando ? <ButtonLoader /> : "Registrarme"}
            </button>
            <span className="block mt-auto text-sm text-center text-gray-100 md:hidden">
              ¿Ya tienes cuenta?
              <Link to="/login" className="underline text-rose-500">
                Inicia sesion
              </Link>
            </span>
          </form>
        </div>
        <div className="md:flex hidden  flex-col items-center justify-center flex-1 gap-8 md:p-9 lg:p-14 ml-3 bg-white rounded-lg item2 h-[500px] border-[1px] border-gray-100 dark:bg-[#444] dark:border-gray-400">
          <div className="mt-auto text-5xl font-semibold text-transparent uppercase bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text">
            multasab
          </div>
          <div className="text-[gray] dark:text-[lightgray]">
            <p className="text-xl w-72">
              ¡Que vaina! Registrate pronto, para que puedas iniciar sesion en
              la plataforma, para ver tus multas.
            </p>
          </div>

          <span className="text-lg text-center text-[gray] mt-auto dark:text-[lightgray]">
            ¿Ya tienes cuenta?
            <Link to="/login" className="underline text-rose-500">
              Inicia sesion
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
