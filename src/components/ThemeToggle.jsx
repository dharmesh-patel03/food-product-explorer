import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs"; // Sun & Moon icons

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md transition-colors duration-300 bg-gray-200 dark:bg-gray-800"
    >
      {theme === "light" ? <BsMoon className="text-xl" /> : <BsSun className="text-xl text-yellow-400" />}
    </button>
  );
};

export default ThemeToggle;
