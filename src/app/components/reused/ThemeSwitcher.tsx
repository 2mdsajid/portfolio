'use client'

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className=" h-[2rem] w-[2rem] border border-color1 dark:border-dark-color1 rounded-full">
      {theme === 'dark' ?
        <div className="w-full h-full p-1 flex justify-center items-center" onClick={() => setTheme("light")}>
          <button className=" text-color1 dark:text-dark-color1 text-2xl" >
            <HiSun />
          </button>
        </div>
        :
        <div className="w-full h-full p-1 flex justify-center items-center" onClick={() => setTheme("dark")}>
          <button className=" text-color1 dark:text-dark-color1 text-2xl" >
            <HiMoon />
          </button>
        </div>
        }
    </div>
  );
};

export default ThemeSwitcher;
