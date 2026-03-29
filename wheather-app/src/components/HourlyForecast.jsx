import { formatHourLabel, getWeatherMeta } from "../utils/weatherUtils";

function MiniAreaChart({ points }) {
  if (!points.length) {
    return (
      <div className="flex h-20 items-center justify-center text-xs text-gray-400 dark:text-gray-500">
        Search a city to see the hourly trend
      </div>
    );
  }

  const max = Math.max(...points, 1);
  const min = Math.min(...points, 0);
  const range = max - min || 1;
  const width = 280;
  const height = 80;
  const step = width / Math.max(points.length - 1, 1);

  const coords = points.map((point, index) => ({
    x: index * step,
    y: height - ((point - min) / range) * height,
  }));

  const linePath = coords
    .map((coord, index) => {
      if (index === 0) return `M ${coord.x},${coord.y}`;
      const prev = coords[index - 1];
      const cpx = (prev.x + coord.x) / 2;
      return `C ${cpx},${prev.y} ${cpx},${coord.y} ${coord.x},${coord.y}`;
    })
    .join(" ");

  const areaPath =
    linePath + ` L ${coords[coords.length - 1].x},${height} L 0,${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      style={{ height: "80px" }}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fb923c" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#fb923c" stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#areaGrad)" />
      <path d={linePath} fill="none" stroke="#fb923c" strokeWidth="2.5" strokeLinecap="round" />
      {coords.map((coord, index) => (
        <circle key={index} cx={coord.x} cy={coord.y} r="4" fill="#fb923c" />
      ))}
    </svg>
  );
}

function HourlyForecast({ hourlyForecast, loading }) {
  const chartPoints = hourlyForecast.map((hour) => hour.temp);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-sm border border-gray-100 dark:border-slate-700 h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-3">
        <p className="text-gray-800 dark:text-white font-semibold text-sm">
          How is the temperature today?
        </p>
        <div className="flex gap-2 text-base">
          <span>🌡️</span>
          <span>💨</span>
          <span>🌧️</span>
        </div>
      </div>

      <div className="my-3 px-1">
        <MiniAreaChart points={chartPoints} />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {hourlyForecast.length
          ? hourlyForecast.map((hour, index) => {
              const meta = getWeatherMeta(hour.weatherCode);

              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1 bg-gray-50 dark:bg-slate-700/50 rounded-2xl py-3 px-1"
                >
                  <span className="text-xl">{meta.icon}</span>
                  <p className="text-gray-800 dark:text-white font-bold text-sm">
                    {Math.round(hour.temp)}°
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 text-[10px]">
                    {formatHourLabel(hour.time)}
                  </p>
                </div>
              );
            })
          : Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1 bg-gray-50 dark:bg-slate-700/50 rounded-2xl py-3 px-1"
              >
                <span className="text-xl">{loading ? "⏳" : "🌤️"}</span>
                <p className="text-gray-800 dark:text-white font-bold text-sm">--°</p>
                <p className="text-gray-400 dark:text-gray-500 text-[10px]">--</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
