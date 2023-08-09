import { Link } from "react-router-dom";

const Index = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("Enviado con exito")
  };
  return (
    <div>
      <nav className="sticky top-0 w-full py-5 px-8 bg-white dark:bg-[#333]  flex justify-between z-50">
        <div className="text-4xl font-semibold text-transparent uppercase bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text">
          <Link to="/home">multasab</Link>
        </div>

        <ul className="flex items-center gap-5">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#about">Acerca de</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#contact">Contactos</a>
          </li>
          <li>
            <Link to="/login">Iniciar Sesion</Link>
          </li>
        </ul>
      </nav>

      <section
        id="inicio"
        className="bg-[url('https://images.pexels.com/photos/3066867/pexels-photo-3066867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover h-[700px] flex justify-center flex-col bg-no-repeat gap-3 pl-10 bg-fixed"
      >
        <h1 className="text-5xl font-semibold text-white">
          Bienvenido a MULTASAB
        </h1>
        <span className="text-3xl text-white">Un software para el pais</span>
      </section>

      <section id="about" className="h-[350px] bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col items-center justify-center gap-10 p-12 scale-105 rounded-md -mt-28 bg-emerald-500">
              <h1 className="text-4xl font-semibold text-white">
                ¿Por que MULTASAB?
              </h1>
              <p className="text-lg text-left text-white">
                Proporcionar una solución innovadora y eficiente para la gestión
                de multas de tránsito, simplificando el proceso para
                conductores, agencias gubernamentales y autoridades locales.
              </p>
            </div>

            <div className="flex flex-col w-[410px] h-[300px] p-6 bg-white gap-8 rounded-md items-center -mt-16">
              <div className="flex flex-col items-center text-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5.636 19.364a9 9 0 1 1 12.728 0" />
                  <path d="M16 9l-4 4" />
                </svg>
                <span className="text-xl font-semibold">Eficiente</span>
              </div>
              <p className="text-lg text-left text-black">
                El exceso de velocidad no es nada bueno, te pueden multar por
                imprudencias a altas velocidades.
              </p>
            </div>

            <div className="flex flex-col w-[410px] h-[300px] p-6 bg-white gap-8 rounded-md items-center -mt-16">
              <div className="flex flex-col items-center text-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                  <path d="M12 12l8 -4.5" />
                  <path d="M12 12l0 9" />
                  <path d="M12 12l-8 -4.5" />
                </svg>
                <span className="text-xl font-semibold">
                  libre de complejidad
                </span>
              </div>
              <p className="text-lg text-left text-black">
                Ir muy rápido al manejar no es bueno. Te pueden poner una multa
                por ir muy rápido y no es seguro. Mejor es manejar con cuidado y
                seguir las reglas.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="bg-[#fff9f7] pt-16 pb-32">
        <div className="flex">
          <div className="w-full h-full blur-md">
            <img
              src="https://i0.wp.com/rnn.com.do/wp-content/uploads/2022/12/Digesett-1140x694-1.webp?fit=1030%2C627&ssl=1"
              alt=""
              className=""
            />
          </div>
          <div className="flex flex-col flex-1 w-full gap-8 p-10">
            <div className="flex flex-col gap-1 ">
              <span className="text-lg text-[gray]">Acerca de</span>
              <span className="text-3xl font-semibold">Ventajas</span>
            </div>

            <div className="flex gap-5 w-[600px] items-center">
              <div className="flex items-center justify-center p-2 border-2 rounded-full border-amber-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3" />
                  <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6" />
                  <path d="M12 11v2a14 14 0 0 0 2.5 8" />
                  <path d="M8 15a18 18 0 0 0 1.8 6" />
                  <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-semibold">Integridad</span>
                <p className="font-medium">
                  Actuamos con honestidad y transparencia en todas nuestras
                  interacciones con conductores, agencias y socios. Mantenemos
                  altos estándares éticos en todo momento.
                </p>
              </div>
            </div>

            <div className="flex gap-5 w-[600px] items-center">
              <div className="flex items-center justify-center p-2 border-[2px] rounded-full border-amber-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
                  <path d="M8 10v-2h2m6 6v2h-2m-4 0h-2v-2m8 -4v-2h-2" />
                  <path d="M3 10h2" />
                  <path d="M3 14h2" />
                  <path d="M10 3v2" />
                  <path d="M14 3v2" />
                  <path d="M21 10h-2" />
                  <path d="M21 14h-2" />
                  <path d="M14 21v-2" />
                  <path d="M10 21v-2" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-semibold">Innovacion</span>
                <p className="font-medium">
                  Buscamos constantemente nuevas formas de mejorar y optimizar
                  nuestra aplicación para brindar soluciones más efectivas y
                  prácticas.
                </p>
              </div>
            </div>

            <div className="flex gap-5 w-[600px] items-center">
              <div className="flex items-center justify-center p-2  border-[2px] rounded-full border-amber-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12v.01" />
                  <path d="M19.071 4.929c-1.562 -1.562 -6 .337 -9.9 4.243c-3.905 3.905 -5.804 8.337 -4.242 9.9c1.562 1.561 6 -.338 9.9 -4.244c3.905 -3.905 5.804 -8.337 4.242 -9.9" />
                  <path d="M4.929 4.929c-1.562 1.562 .337 6 4.243 9.9c3.905 3.905 8.337 5.804 9.9 4.242c1.561 -1.562 -.338 -6 -4.244 -9.9c-3.905 -3.905 -8.337 -5.804 -9.9 -4.242" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-semibold">
                  Compromiso con la seguridad vial
                </span>
                <p className="font-medium">
                  Priorizamos la seguridad vial y nos esforzamos por crear
                  conciencia sobre las normas de tráfico, con el objetivo de
                  reducir accidentes y mejorar la conducta vial.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-5">
          <div className="flex flex-col items-center justify-center gap-5">
            <span className="text-4xl font-semibold">Servicios</span>
            <p className="text-xl">
              Dentro de MULTASAB le ofrecemos innumerables servicios, pero
              algunos de los más importantes son los siguientes:
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-20">
            <div className="flex flex-col items-center gap-5 bg-white rounded-md shadow-md">
              <div className="p-3 -mt-6 rounded-full icon bg-emerald-500">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                  </svg>
                </span>
              </div>

              <h2 className="text-2xl font-medium uppercase">
                asistencia vial
              </h2>
              <p className="px-5 pt-1 pb-4 text-center">
                La asistencia vial es un servicio crucial que proporciona ayuda
                a los conductores cuando enfrentan problemas en la carretera.
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 bg-white rounded-md shadow-md">
              <div className="p-3 -mt-6 rounded-full icon bg-emerald-500">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                    <path d="M3 10l18 0" />
                    <path d="M7 15l.01 0" />
                    <path d="M11 15l2 0" />
                  </svg>
                </span>
              </div>

              <h2 className="text-2xl font-medium uppercase">
                Pagos de multas online
              </h2>
              <p className="px-5 pt-1 pb-4 text-center">
                Pagar multas en línea es una opción conveniente y rápida para
                saldar sanciones de tráfico. Permite pagar desde casa, evitando
                desplazamientos.
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 bg-white rounded-md shadow-md">
              <div className="p-3 -mt-6 rounded-full icon bg-emerald-500">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v.5" />
                    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                    <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                    <path d="M15 19l2 2l4 -4" />
                  </svg>
                </span>
              </div>

              <h2 className="text-2xl font-medium uppercase">
                integridad de sus datos
              </h2>
              <p className="px-5 pt-1 pb-4 text-center">
                Pagar multas en línea es rápido y conveniente. Usas sitios web
                seguros para ingresar los detalles de la multa y hacer el pago
                electrónico, evitando recargos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex gap-8">
            <div className="flex-1 bg-[url('https://imagenes.listindiario.com/files/main_image/uploads/2022/04/12/6430cc109ec92.png')] bg-no-repeat h-[450px] flex justify-center items-end rounded-lg px-10 ">
              <div className="flex flex-col items-center gap-2 p-4 mb-3 text-white rounded-lg backdrop-blur-lg">
                <h2 className="text-2xl font-semibold">Misión</h2>
                <p className="text-lg">
                  En MULTASAB, nuestra misión es proporcionar una solución
                  innovadora y eficiente para la gestión de multas de tránsito,
                  simplificando el proceso para conductores, agencias
                  gubernamentales y autoridades locales. Nos esforzamos por
                  ofrecer una plataforma que promueva la seguridad vial y la
                  conciencia de las normas de tráfico, al tiempo que
                  garantizamos una experiencia sin complicaciones para todos los
                  involucrados.
                </p>
              </div>
            </div>

            <div className="flex-1 bg-[url('https://extradigital.com.do/wp-content/uploads/2019/01/DIGESETT-Inicia-Proceso-De-Seleccion-De-Nuevos-Agentes.jpg')] bg-no-repeat h-[450px] flex justify-center items-end rounded-lg px-10">
              <div className="flex flex-col items-center gap-2 p-4 mb-2 text-white rounded-lg backdrop-blur-lg">
                <h2 className="text-2xl font-semibold">Visión</h2>
                <p className="text-lg">
                  Nuestra visión es convertirnos en la principal herramienta de
                  gestión de multas de tránsito a nivel nacional, siendo
                  reconocidos por nuestra tecnología avanzada, atención al
                  cliente excepcional y contribución a la reducción de
                  infracciones viales. Aspiramos a establecer estándares en la
                  industria al brindar soluciones integrales que fomenten la
                  seguridad en las carreteras y la cooperación entre conductores
                  y autoridades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff9f7] py-16">
        <div className="container mx-auto">
          {/* Label */}
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-4xl font-semibold">Equipo</h2>
            <p className="text-xl">
              Esta herramienta tecnologica es ideada y desarrollada por este
              gran equipo.
            </p>
          </div>
          {/* Our cards */}
          <div className="grid grid-cols-3 gap-5 mt-8">
            {/* Bryan Bocio */}
            <div className="flex flex-col gap-5 overflow-hidden transform bg-white rounded-md shadow-md hover:-translate-y-5">
              <div>
                <img
                  src="https://i.ibb.co/PTFnwNw/Whats-App-Image-2023-03-27-at-7-27-42-PM.jpg"
                  alt=""
                  className="object-cover w-full h-80"
                />
              </div>

              <div className="flex flex-col items-center gap-2 py-6">
                <span className="text-2xl"> Bryan Bocio</span>
                <span className="text-[gray]">Desarrollador Backend</span>
              </div>
            </div>
            {/* Albert Joan */}
            <div className="flex flex-col gap-5 overflow-hidden bg-white rounded-md shadow-md hover:-translate-y-5">
              <div>
                <img
                  src="https://i.ibb.co/rxDNN3X/20221026-181833.jpg"
                  alt=""
                  className="object-cover object-center w-full h-80"
                />
              </div>

              <div className="flex flex-col items-center gap-2 py-6">
                <span className="text-2xl"> Albert Agramonte</span>
                <span className="text-[gray]">Desarrollador Frontend</span>
              </div>
            </div>
            {/* Joan Estiven */}
            <div className="flex flex-col gap-5 overflow-hidden bg-white rounded-md shadow-md hover:-translate-y-5">
              <div>
                <img
                  src="https://images.pexels.com/photos/3109671/pexels-photo-3109671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="object-cover w-full h-80"
                />
              </div>

              <div className="flex flex-col items-center gap-2 py-6">
                <span className="text-2xl">Joan Cuevas</span>
                <span className="text-[gray]">Desarrollador Frontend</span>
              </div>
            </div>
          </div>

          {/* preguntas frecuentes */}
          <div className="flex flex-col mt-28">
            {/* Label */}
            <div className="flex flex-col items-center gap-5">
              <h2 className="text-4xl font-semibold">F.A.Q</h2>
              <span className="text-xl">
                Nuestra área de preguntas frecuentes donde podrá encontrar
                respuestas a sus dudas más comunes.
              </span>
            </div>
            {/* Questions */}
            <div className="flex flex-col gap-5 mt-10">
              {/* Question 1*/}
              <div className="flex flex-col ">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>

                  <span className="text-lg text-emerald-500">
                    ¿Como puedo registrarme?
                  </span>
                </div>
                <span className="flex gap-1">
                  Solo necesitas poner tus datos en este link de
                  <Link to="register" className="text-blue-400 underline">
                    aqui
                  </Link>
                </span>
              </div>
              {/* Question 2*/}
              <div className="flex flex-col ">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-800 rounded-full"></span>

                  <span className="text-lg text-emerald-500">
                    ¿Podre pagar mis multas dentro del sistema?
                  </span>
                </div>
                <span className="flex gap-1">
                  Claro que podra, esta enfocada para eso.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-100">
        <div className="container flex flex-col items-center justify-center gap-10 mx-auto">
          <h1 className="text-4xl font-semibold">Comunicate con nosotros</h1>
          <div className="p-10 bg-white rounded-md">
            <form
              action=""
              className="flex flex-col gap-7"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-5">
                <input
                  type="text"
                  className="p-3  outline-none caret-emerald-500 border-[1px] border-gray-200 rounded-md"
                  placeholder="Nombre"
                />
                <input
                  type="email"
                  className="p-3 outline-none caret-emerald-500 border-[1px] border-gray-200 rounded-md"
                  placeholder="Correo"
                />
              </div>

              <input
                type="text"
                className="p-3  outline-none caret-emerald-500 border-[1px] border-gray-200 rounded-md"
                placeholder="Titulo"
              />
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                className="p-3 outline-none caret-emerald-500 border-[1px] border-gray-200 rounded-md"
                placeholder="Mensaje"
              />
              <button className="self-center p-3 font-semibold text-white rounded-md w-28 bg-emerald-500">
                {" "}
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-5">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="font-light copyright">
              &copy; Copyright{" "}
              <span className="font-bold text-transparent bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text">
                MULTASAB
              </span>
              . All Rights Reserved
            </div>
            <div className="font-semibold text-center text-transparent uppercase bg-gradient-to-r from-indigo-600 via-pink-500 to-red-500 bg-clip-text">
              Developed by group 6
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
