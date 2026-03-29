const cities = [
  { name: "New York", condition: "Tap to search", min: "--", max: "--", icon: "☀️" },
  { name: "London", condition: "Tap to search", min: "--", max: "--", icon: "🌤️" },
  { name: "Tokyo", condition: "Tap to search", min: "--", max: "--", icon: "🌧️" },
  { name: "Dubai", condition: "Tap to search", min: "--", max: "--", icon: "🔥" },
];

function CityList({ onSelectCity }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cities.map((city, index) => (
        <button
          key={index}
          onClick={() => onSelectCity(city.name)}
          className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-slate-700 flex items-center justify-between cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-left"
        >
          <div>
            <p className="text-gray-800 dark:text-white font-semibold text-sm">{city.name}</p>
            <p className="text-gray-400 dark:text-gray-500 text-xs">{city.condition}</p>
            <p className="text-orange-400 font-bold text-xs mt-1">
              {city.min} / {city.max}
            </p>
          </div>
          <span className="text-3xl">{city.icon}</span>
        </button>
      ))}
    </div>
  );
}

export default CityList;
