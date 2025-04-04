import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"


const Navbar = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className={`flex justify-end p-4 border-b bg-[var(--bg-color)] border-b-[var(--border-color)] 
            shadow-md fixed top-0 right-0 left-0 z-50`}>
            <label className="relative inline-flex items-center cursor-pointer  ">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                />
                <div className="w-14 h-7 bg-gray-300 rounded-full peer-checked:bg-gray-700 transition-all duration-300 relative">
                    <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center 
            ${theme === "dark" ? "translate-x-8" : "translate-x-1"}`}>
                        {theme === "dark" ? (
                            <MoonIcon className="w-4 h-4 text-gray-800" />
                        ) : (
                            <SunIcon className="w-4 h-4 text-yellow-500" />
                        )}
                    </div>
                </div>
            </label>
        </div>
        // </div>
    )
}

export default Navbar