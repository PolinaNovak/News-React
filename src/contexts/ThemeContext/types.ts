import { ReactNode } from "react";
import { darkStates } from "./constants";

export interface IthemeProvider {
  children: ReactNode;
}

export interface IThemeContext {
  isDark: darkStates;
  toggleTheme: () => void;
}
