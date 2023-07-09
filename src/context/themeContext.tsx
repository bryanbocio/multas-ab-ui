import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});
interface Props {
  children: React.ReactNode;
}
const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(
    JSON.parse(localStorage.getItem("darkMode")!) || false
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    localStorage.setItem("darkMode", darkMode.toString());
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <ThemeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
