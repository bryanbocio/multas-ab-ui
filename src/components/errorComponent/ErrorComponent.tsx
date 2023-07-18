const ErrorComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:w-[50%] gap-3 p-6 mx-auto rounded-lg bg-rose-500">
      <span className="self-center text-xl font-semibold text-white ">
        Algo salio mal :(
      </span>
      <button
        className="p-2 font-semibold text-black bg-white rounded-lg"
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
