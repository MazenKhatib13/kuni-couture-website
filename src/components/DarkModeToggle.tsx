import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative inline-flex h-8 w-14 items-center justify-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        isDarkMode
          ? "bg-accent-500 focus:ring-accent-500"
          : "bg-gray-200 focus:ring-primary-600"
      }`}
      aria-label="Toggle dark mode"
    >
      <span
        className={`absolute left-1 inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-200 ${
          isDarkMode ? "translate-x-6" : "translate-x-0"
        }`}
      />
      <span className="sr-only">Toggle dark mode</span>

      {/* Sun icon */}
      <Sun
        className={`absolute left-2 h-4 w-4 transition-opacity duration-200 ${
          isDarkMode ? "opacity-0" : "opacity-100 text-amber-500"
        }`}
      />

      {/* Moon icon */}
      <Moon
        className={`absolute right-2 h-4 w-4 transition-opacity duration-200 ${
          isDarkMode ? "opacity-100 text-gray-900" : "opacity-0"
        }`}
      />
    </button>
  );
};

export default DarkModeToggle;
