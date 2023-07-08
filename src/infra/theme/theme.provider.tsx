import React, {createContext, useState} from "react";
import {theme} from "./theme";
import {Appearance, useColorScheme} from "react-native";

export const ThemeContext = createContext(theme.light);

// @ts-ignore
export default function ThemeProvider({children}) {
  const [colorScheme, setColorScheme] = useState(useColorScheme());

  Appearance.addChangeListener((preferences) =>
      setColorScheme(preferences.colorScheme));

  // @ts-ignore
  return <ThemeContext.Provider value={theme[colorScheme]}>{children}</ThemeContext.Provider>;
};
