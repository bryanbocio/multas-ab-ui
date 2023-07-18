import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";

const Weather = () => {
  const [data, setData] = useState<any>();
  const { location } = useContext(AuthContext) as AuthContextType;
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&lang=es&units=metric&appid=68e058a125057ab9646f38c8e5f07a09`
      )
      .then((results) => setData(results.data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 md:gap-9 lg:gap-12">
      {loading ? (
        <div className="flex gap-1">
          <span className="h-6 w-6 rounded-full bg-emerald-400 animate-[bounce_0.9s_infinite_100ms]"></span>
          <span className="w-6 h-6 rounded-full bg-emerald-400 animate-bounce "></span>
          <span className="h-6 w-6 rounded-full bg-emerald-400 animate-[bounce_1s_infinite_100ms]"></span>
        </div>
      ) : (
        <>
          <div className="boxes  bg-[#F3E9DC] dark:bg-[#f3e9dc56] gap-5 dark:text-[whitesmoke]">
            <h1>{Math.round(data?.main.temp)}˚C</h1>

            <h2>{data?.weather[0].description}</h2>
          </div>

          <div className="boxes  bg-[#F1FFC4] dark:bg-[#f1ffc4a6] dark:text-[whitesmoke]">
            <img
              className=" w-42 h-44 md:w-44 md:h-44 xl:w-52 xl:h-52"
              src="assets/animated/cloudy-day-1.svg"
              alt=""
            />
            <h1>{data?.name}</h1>
          </div>

          <div className="boxes  bg-[#ACD4DF] dark:bg-[#acd4df91] gap-5 dark:text-[whitesmoke]">
            <h1>Veloc. del viento</h1>
            <h1>{data?.wind.speed}m/s</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
