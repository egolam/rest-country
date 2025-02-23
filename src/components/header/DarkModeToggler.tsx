"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaRegMoon, FaSun } from "react-icons/fa";

const DarkModeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      className="flex items-center gap-2 text-xs sm:text-base font-semibold cursor-pointer hover:text-black dark:hover:text-white/50"
    >
      {theme === "dark" ? <FaSun /> : <FaRegMoon />}
      <p>{theme === "dark" ? "Light Mode" : "Dark Mode"}</p>
    </button>
  );
};

export default DarkModeToggler;
