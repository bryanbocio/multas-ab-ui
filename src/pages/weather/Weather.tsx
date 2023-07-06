import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const Weather = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLoading(true);
          await axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=68e058a125057ab9646f38c8e5f07a09`
            )
            .then((results) => setData(results.data))
            .catch((err) => console.log(err));
          setLoading(false);
        },
        function (error) {
          console.error("Error al obtener la ubicación:", error);
        }
      );
    } else {
      console.error("Geolocalización no está disponible en este navegador");
    }
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
          <div className="boxes  bg-[#F3E9DC] gap-5">
            <h1>{Math.round(data?.main.temp)}˚C</h1>

            <h2>{data?.weather[0].description}</h2>
          </div>

          <div className="boxes  bg-[#F1FFC4]">
            <img
              className=" w-42 h-44 md:w-44 md:h-44 xl:w-52 xl:h-52"
              src="assets/animated/cloudy-day-1.svg"
              alt=""
            />
            <h1>{data?.name}</h1>
          </div>

          <div className="boxes  bg-[#ACD4DF] gap-5">
            <h1>Veloc. del viento</h1>
            <h1>{data?.wind.speed}m/s</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
