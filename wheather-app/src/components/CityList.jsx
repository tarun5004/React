// src/components/CityList.jsx

const cities = [
  { name: "New York", condition: "Sunny", min: "22°C", max: "19°C", icon: "☀️" },
  { name: "London", condition: "Bright", min: "26°C", max: "24°C", icon: "🌤️" },
  { name: "Tokyo", condition: "Cloudy", min: "18°C", max: "21°C", icon: "🌥️" },
  { name: "Dubai", condition: "Hot", min: "35°C", max: "38°C", icon: "🔥" },
];

function CityList() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cities.map((city, i) => (
        <div
          key={i}
          className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-slate-700 flex items-center justify-between cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
          <div>
            <p className="text-gray-800 dark:text-white font-semibold text-sm">{city.name}</p>
            <p className="text-gray-400 dark:text-gray-500 text-xs">{city.condition}</p>
            <p className="text-orange-400 font-bold text-xs mt-1">
              {city.min} / {city.max}
            </p>
          </div>
          <span className="text-3xl">{city.icon}</span>
        </div>
      ))}
    </div>
  );
}

export default CityList;