// src/components/HourlyForecast.jsx

const hours = [
  { label: "Morning", temp: "20°", icon: "🌥️", val: 20 },
  { label: "Afternoon", temp: "24°", icon: "☀️", val: 24 },
  { label: "Evening", temp: "28°", icon: "🌤️", val: 28 },
  { label: "Night", temp: "22°", icon: "🌙", val: 22 },
];

// SVG Area Chart — no library needed!
function MiniAreaChart() {
  const points = [20, 24, 28, 22];
  const max = 30;
  const width = 280;
  const height = 80;
  const step = width / (points.length - 1);

  const coords = points.map((p, i) => ({
    x: i * step,
    y: height - (p / max) * height,
  }));

  const linePath = coords
    .map((c, i) => {
      if (i === 0) return `M ${c.x},${c.y}`;
      const prev = coords[i - 1];
      const cpx = (prev.x + c.x) / 2;
      return `C ${cpx},${prev.y} ${cpx},${c.y} ${c.x},${c.y}`;
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
      {coords.map((c, i) => (
        <circle key={i} cx={c.x} cy={c.y} r="4" fill="#fb923c" />
      ))}
    </svg>
  );
}

function HourlyForecast() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-sm border border-gray-100 dark:border-slate-700 h-full flex flex-col justify-between">

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-gray-800 dark:text-white font-semibold text-sm">
          How is the temperature today?
        </p>
        <div className="flex gap-2 text-base">
          <span>🌡️</span><span>💨</span><span>🌧️</span>
        </div>
      </div>

      {/* Chart */}
      <div className="my-3 px-1">
        <MiniAreaChart />
      </div>

      {/* Hourly Cards */}
      <div className="grid grid-cols-4 gap-2">
        {hours.map((h, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1 bg-gray-50 dark:bg-slate-700/50 rounded-2xl py-3 px-1"
          >
            <span className="text-xl">{h.icon}</span>
            <p className="text-gray-800 dark:text-white font-bold text-sm">{h.temp}</p>
            <p className="text-gray-400 dark:text-gray-500 text-[10px]">{h.label}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default HourlyForecast;