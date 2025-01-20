import { createContext, useContext, useState } from "react";
import "./types.ts";
import { IThemeContext, IthemeProvider } from "./types.ts";
import { darkStates } from "./constants.ts";

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("no context found");
  return context;
};

export const ThemeProvider = ({ children }: IthemeProvider) => {
  const [isDark, setIsDark] = useState<darkStates>(darkStates.Dark);

  const toggleTheme = () => {
    setIsDark((prev) => {
      if (prev === darkStates.Dark) return darkStates.Light;
      else return darkStates.Dark;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
