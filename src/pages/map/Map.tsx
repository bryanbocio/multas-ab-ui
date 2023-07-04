import { useEffect, useMemo, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { getTrafficFine } from "../../services/MapService";
const Map = () => {
  const googleMapsApiKey = "AIzaSyBoA6I2sj3QskEcW2DWdXK618vw1-aKdyo";
  const [traffic, setTraffic] = useState<any>();
  const { isLoaded } = useLoadScript({ googleMapsApiKey });
  const center = useMemo(() => ({ lat: 18.6678958, lng: -71.4495774 }), []);

  useEffect(() => {
    const fetchTraffic = async () => {
      const data = await getTrafficFine();
      setTraffic(data);
    };
    fetchTraffic();
  }, []);
  console.log(traffic)
  return (
    <>
      {isLoaded ? (
        <GoogleMap
          zoom={8}
          center={center}
          mapContainerClassName="h-[600px] md:h-full w-full rounded-lg"
          
        >
          {traffic &&
            traffic.map((e: any) => (
              <Marker
                key={e}
                position={{
                  lat: parseFloat(e.latitude),
                  lng: parseFloat(e.longitude),
                }}
                title={"hola personas"}
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
