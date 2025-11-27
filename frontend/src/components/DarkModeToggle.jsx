import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => localStorage.theme === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.theme = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <button
      onClick={() => setDark(d => !d)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 shadow hover:scale-110"
      aria-label="Toggle dark mode"
    >
      {dark ? (
        <FaSun className="text-yellow-400 transition-transform duration-300 scale-125" />
      ) : (
        <FaMoon className="text-gray-800 dark:text-gray-200 transition-transform duration-300 scale-125" />
      )}
    </button>
  );
} 