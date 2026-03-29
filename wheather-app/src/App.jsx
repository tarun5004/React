import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import InfoCards from "./components/InfoCards";
import CityList from "./components/CityList";
import HourlyForecast from "./components/HourlyForecast";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [city, setCity] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCoordinates = async (cityName) => {
    if (!cityName.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError(null);
    setWeatherData(null);
    setCoordinates(null);

    try {
      const res = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}`
      );

      const firstResult = res.data.results?.[0];

      if (!firstResult) {
        setError("City not found. Please try another city.");
        setLoading(false);
        return;
      }

      setCoordinates(firstResult);
    } catch (apiError) {
      setError("An error occurred while fetching city data. Please try again.");
      setLoading(false);
    }
  };

  const fetchWeatherData = async () => {
    if (!coordinates) return;

    try {
      const res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=2`
      );

      setWeatherData(res.data);
    } catch (apiError) {
      setError("Weather data fetch failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (coordinates) {
      fetchWeatherData();
    }
  }, [coordinates]);

  const handleSearch = () => {
    getCoordinates(city);
  };

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
    getCoordinates(selectedCity);
  };

  const currentWeather = weatherData?.current ?? null;
  const hourly = weatherData?.hourly ?? null;
  const daily = weatherData?.daily ?? null;

  const currentIndex = hourly?.time?.findIndex(
    (time) => time >= (currentWeather?.time ?? "")
  );

  const safeStartIndex = currentIndex && currentIndex > -1 ? currentIndex : 0;

  const hourlyForecast =
    hourly?.time?.slice(safeStartIndex, safeStartIndex + 4).map((time, index) => ({
      time,
      temp: hourly.temperature_2m[safeStartIndex + index],
      weatherCode: hourly.weather_code[safeStartIndex + index],
    })) ?? [];

  const tomorrowWeather =
    daily?.time?.length > 1
      ? {
          time: daily.time[1],
          min: daily.temperature_2m_min[1],
          max: daily.temperature_2m_max[1],
          weatherCode: daily.weather_code[1],
        }
      : null;

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-[#f0f4ff] dark:bg-[#0f172a] transition-all duration-500 font-sans">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Navbar
            city={city}
            setCity={setCity}
            onSearch={handleSearch}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            loading={loading}
          />

          {error && (
            <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200">
              {error}
            </div>
          )}

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-1">
              <WeatherCard
                currentWeather={currentWeather}
                coordinates={coordinates}
                loading={loading}
                error={error}
              />
            </div>

            <div className="lg:col-span-1">
              <HourlyForecast hourlyForecast={hourlyForecast} loading={loading} />
            </div>

            <div className="lg:col-span-1">
              <InfoCards
                tomorrowWeather={tomorrowWeather}
                currentWeather={currentWeather}
                coordinates={coordinates}
                loading={loading}
              />
            </div>
          </div>

          <div className="mt-5">
            <CityList onSelectCity={handleCitySelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
