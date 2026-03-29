export const getWeatherMeta = (weatherCode) => {
  if ([0].includes(weatherCode)) {
    return { label: "Clear", icon: "☀️" };
  }

  if ([1, 2, 3].includes(weatherCode)) {
    return { label: "Cloudy", icon: "🌤️" };
  }

  if ([45, 48].includes(weatherCode)) {
    return { label: "Foggy", icon: "🌫️" };
  }

  if ([51, 53, 55, 56, 57].includes(weatherCode)) {
    return { label: "Drizzle", icon: "🌦️" };
  }

  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) {
    return { label: "Rainy", icon: "🌧️" };
  }

  if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) {
    return { label: "Snow", icon: "❄️" };
  }

  if ([95, 96, 99].includes(weatherCode)) {
    return { label: "Stormy", icon: "⛈️" };
  }

  return { label: "Weather", icon: "🌤️" };
};

export const formatLocation = (coordinates) => {
  if (!coordinates) return "Search a city";

  return [coordinates.name, coordinates.country].filter(Boolean).join(", ");
};

export const formatHourLabel = (timeValue) => {
  const date = new Date(timeValue);
  return date.toLocaleTimeString([], {
    hour: "numeric",
    hour12: true,
  });
};
