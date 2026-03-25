import { useState } from "react";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import InfoCards from "./components/InfoCards";
import CityList from "./components/CityList";
import HourlyForecast from "./components/HourlyForecast";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-[#f0f4ff] dark:bg-[#0f172a] transition-all duration-500 font-sans">
        <div className="max-w-6xl mx-auto px-4 py-6">
 
          {/* NAVBAR */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
 
          {/* MAIN GRID */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
 
            {/* LEFT: Weather Card */}
            <div className="lg:col-span-1">
              <WeatherCard />
            </div>
 
            {/* MIDDLE: Hourly Forecast */}
            <div className="lg:col-span-1">
              <HourlyForecast />
            </div>
 
            {/* RIGHT: Info Cards */}
            <div className="lg:col-span-1">
              <InfoCards />
            </div>
 
          </div>
 
          {/* BOTTOM: City List */}
          <div className="mt-5">
            <CityList />
          </div>
 
        </div>
      </div>
    </div>
  );
}
 
export default App;