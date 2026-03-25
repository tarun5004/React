// src/components/InfoCards.jsx

function InfoCards() {
  return (
    <div className="flex flex-col gap-4 h-full">

      {/* Tomorrow Card */}
      <div className="bg-lime-300 dark:bg-lime-700 rounded-3xl p-5 relative overflow-hidden flex-1 min-h-[140px]">
        <p className="text-lime-800 dark:text-lime-100 text-xs font-medium mb-1">Tomorrow</p>
        <p className="text-lime-900 dark:text-white font-bold text-sm mb-3">Dhaka, Bangladesh</p>
        <p className="text-lime-900 dark:text-white font-extrabold text-3xl">25°C</p>
        <p className="text-lime-700 dark:text-lime-200 text-xs mt-1">🌧️ Rainy</p>

        {/* Decorative person emoji */}
        <div className="absolute bottom-2 right-4 text-5xl select-none opacity-80">🧍</div>
      </div>

      {/* Humidity Card */}
      <div className="bg-slate-800 dark:bg-slate-700 rounded-3xl p-5 relative overflow-hidden">
        <p className="text-white font-semibold text-sm mb-1">Humidity</p>
        <p className="text-gray-400 text-xs mb-3">Good Air Quality</p>

        {/* Progress bar */}
        <div className="w-full bg-slate-600 rounded-full h-2 mb-2">
          <div
            className="bg-orange-400 h-2 rounded-full transition-all duration-700"
            style={{ width: "45%" }}
          />
        </div>
        <p className="text-orange-400 font-bold text-sm">45%</p>

        <div className="absolute bottom-2 right-4 text-4xl select-none opacity-60">🌤️</div>
      </div>

    </div>
  );
}

export default InfoCards;