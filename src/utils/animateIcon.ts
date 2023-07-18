export const AnimateIcon = (weatherState: string): string => {
  let icon = "assets/animated/day.svg";
  switch (weatherState) {
    case "Clear":
      icon = "assets/animated/day.svg";
      break;

    case "Clouds":
      icon = "assets/animated/cloudy-day-1.svg";
      break;

    case "Drizzle":
      icon = "assets/animated/rainy-2.svg";
      break;

    case "Rain":
      icon = "assets/animated/rainy-7.svg";
      break;

    case "Snow":
      icon = "assets/animated/snowy-6.svg";
      break;

    case "Atmosphere":
      icon = "assets/animated/weather.svg";
      break;
  }
  return icon;
};
