const Loader = () => {
  return (
    <div className="flex gap-1 mx-auto col-span-full">
      <span className="h-6 w-6 rounded-full bg-emerald-400 animate-[bounce_0.9s_infinite_100ms]"></span>
      <span className="w-6 h-6 rounded-full bg-emerald-400 animate-bounce "></span>
      <span className="h-6 w-6 rounded-full bg-emerald-400 animate-[bounce_1s_infinite_100ms]"></span>
    </div>
  );
};

export default Loader;
