import { useContext, useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { TrafficFine } from "../../utils/type";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../Request";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
const Map = () => {
  const { token } = useContext(AuthContext) as AuthContextType;
  const googleMapsApiKey =import.meta.env.VITE_PUBLIC_API_KEY
  const { isLoaded } = useLoadScript({ googleMapsApiKey });
  const center = useMemo(() => ({ lat: 18.6678958, lng: -71.4495774 }), []);
  const { data, error, isLoading } = useQuery({
    queryKey: ["mapa"],
    queryFn: () => {
      return newRequest(token)
        .get("TrafficFine")
        .then((result) => result.data.data)
        .catch((error) => console.error(error));
    },
  });
  return (
    <>
      {error ? (
        "error"
      ) : isLoaded ? (
        <GoogleMap
          zoom={8}
          center={center}
          mapContainerClassName="h-[600px] md:h-full w-full rounded-lg"
        >
          {!isLoading &&
            data.map((e: TrafficFine) => (
              <Marker
                key={e.id}
                position={{
                  lat: parseFloat(e.latitude),
                  lng: parseFloat(e.longitude),
                }}
                title={e.reason}
              />
            ))}
        </GoogleMap>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default Map;
