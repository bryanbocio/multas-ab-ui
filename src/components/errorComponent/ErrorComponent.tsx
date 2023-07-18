const ErrorComponent = () => {
  return (
    <div className="bg-rose-500 w-full p-5 rounded-lg  flex-col flex justify-center gap-3 items-center">
      <span className="text-white font-semibold text-xl self-center ">
        Algo salio mal :(
      </span>
      <button
        className="bg-white p-2 rounded-lg font-semibold text-black"
        onClick={async () => {
          window.location.reload();
        }}
      >
        Reintentar
      </button>
    </div>
  );
};

export default ErrorComponent;
