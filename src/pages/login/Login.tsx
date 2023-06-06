
const Login = () => {
    const handleSubmit= (e: React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();
    }
  return (
    <div className="flex min-h-screen items-center justify-center">
    <div className="absolute inset-0 bg-[url('https://i.ibb.co/1ZsbsjL/Imagen-de-Whats-App-2023-06-04-a-las-14-12-49.jpg')] bg-cover bg-center blur-sm"></div>
    <div className="relative flex flex-col gap-5 rounded-lg bg-white p-3">
      <img className="mx-auto w-80" src="https://www.digesett.gob.do/images/ImagenesPortalPrincipal/lg2.jpg" alt="" />
      <form action="" onSubmit={handleSubmit} className="mx-auto flex w-[100%] flex-col justify-center gap-3 p-4 md:w-[400px]">
        <input type="email" className="rounded-lg border-[1px] border-gray-300 p-3 caret-teal-500 outline-none transition duration-300 focus:border-green-600" />
        <input type="password" className="rounded-lg border-[1px] border-gray-300 p-3 caret-teal-500 outline-none transition duration-300 focus:border-green-600" />
        <button className="mt-2 rounded-md bg-green-500 p-3 hover:bg-green-700 transition duration-300 font-semibold text-white">Iniciar Sesion</button>
      </form>
    </div>
  </div>
  
  );
};

export default Login;
