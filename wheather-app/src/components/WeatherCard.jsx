// src/components/WeatherCard.jsx

function WeatherCard() {
  return (
    <div className="bg-gradient-to-br from-sky-300 via-blue-300 to-blue-400 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 rounded-3xl p-5 shadow-lg relative overflow-hidden min-h-[220px]">

      {/* Background Glow */}
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl" />

      {/* Location */}
      <div className="flex items-center gap-1.5 mb-3">
        <span className="text-white/80 text-sm">📍</span>
        <span className="text-white/90 text-sm font-medium">Dhaka, Bangladesh</span>
      </div>

      {/* Label */}
      <p className="text-white font-bold text-lg mb-1">Weather</p>
      <p className="text-white/70 text-xs mb-4">Now</p>

      {/* Temperature + Emoji */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white font-extrabold text-6xl leading-none">25°</p>
          <p className="text-white/70 text-xs mt-1">Feels like 26°C</p>
        </div>
        <div className="text-7xl drop-shadow-lg select-none">⛅</div>
      </div>

      {/* Bottom Info Pills */}
      <div className="flex gap-3 mt-5">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-3 py-2 text-center">
          <p className="text-white/70 text-[10px]">Visibility</p>
          <p className="text-white font-bold text-sm">4.3 Km</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-3 py-2 text-center">
          <p className="text-white/70 text-[10px]">Humidity</p>
          <p className="text-white font-bold text-sm">87%</p>
        </div>
      </div>

    </div>
  );
}

export default WeatherCard;