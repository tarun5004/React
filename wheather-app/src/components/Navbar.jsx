// src/components/Navbar.jsx
import { useState } from "react";
import { Search, Sun, Moon, Bell, Calendar, MessageSquare } from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex items-center justify-between gap-4 flex-wrap">

      {/* LEFT: Logo + User */}
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="w-10 h-10 bg-orange-400 rounded-xl flex items-center justify-center shadow-md">
          <span className="text-white text-xl">🌤️</span>
        </div>
        {/* User Info */}
        <div>
          <p className="text-xs text-gray-400 dark:text-gray-500">Hello,</p>
          <p className="text-sm font-bold text-gray-800 dark:text-white">Weather App</p>
        </div>
      </div>

      {/* CENTER: Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 rounded-2xl px-4 py-2.5 shadow-sm border border-gray-100 dark:border-slate-700">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search city..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="flex-1 text-sm bg-transparent outline-none text-gray-700 dark:text-white placeholder-gray-400"
          />
        </div>
      </div>

      {/* RIGHT: Icons */}
      <div className="flex items-center gap-2">
        {/* Icon Buttons */}
        {[Calendar, MessageSquare, Bell].map((Icon, i) => (
          <button
            key={i}
            className="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-orange-400 transition-colors"
          >
            <Icon size={16} />
          </button>
        ))}

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-9 h-9 rounded-xl bg-orange-400 shadow-md flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

    </div>
  );
}

export default Navbar;