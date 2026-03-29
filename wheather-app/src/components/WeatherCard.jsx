import { formatLocation, getWeatherMeta } from "../utils/weatherUtils";

function WeatherCard({ currentWeather, coordinates, loading, error }) {
  const weatherMeta = getWeatherMeta(currentWeather?.weather_code);
  const location = formatLocation(coordinates);

  return (
    <div className="bg-gradient-to-br from-sky-300 via-blue-300 to-blue-400 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 rounded-3xl p-5 shadow-lg relative overflow-hidden min-h-[220px]">
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl" />

      <div className="flex items-center gap-1.5 mb-3">
        <span className="text-white/80 text-sm">📍</span>
        <span className="text-white/90 text-sm font-medium">{location}</span>
      </div>

      <p className="text-white font-bold text-lg mb-1">Weather</p>
      <p className="text-white/70 text-xs mb-4">
        {loading ? "Loading..." : weatherMeta.label}
      </p>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-white font-extrabold text-6xl leading-none">
            {currentWeather ? `${Math.round(currentWeather.temperature_2m)}°` : "--°"}
          </p>
          <p className="text-white/70 text-xs mt-1">
            {currentWeather
              ? `Feels like ${Math.round(currentWeather.apparent_temperature)}°C`
              : error
                ? "Search again to load weather"
                : "Search for a city to begin"}
          </p>
        </div>
        <div className="text-7xl drop-shadow-lg select-none">{weatherMeta.icon}</div>
      </div>

      <div className="flex gap-3 mt-5">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-3 py-2 text-center">
          <p className="text-white/70 text-[10px]">Wind</p>
          <p className="text-white font-bold text-sm">
            {currentWeather ? `${Math.round(currentWeather.wind_speed_10m)} km/h` : "--"}
          </p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-3 py-2 text-center">
          <p className="text-white/70 text-[10px]">Humidity</p>
          <p className="text-white font-bold text-sm">
            {currentWeather ? `${Math.round(currentWeather.relative_humidity_2m)}%` : "--"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
