import {ThemeProp} from "react-native-paper/lib/typescript/src/types";
import {DefaultTheme, MD3DarkTheme} from "react-native-paper";

export const lightTheme: ThemeProp = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#006874",
    onPrimary: "#ffffff",
    primaryContainer: "#97f0ff",
    onPrimaryContainer: "#001f24",
    secondary: "#4a6267",
    onSecondary: "#ffffff",
    secondaryContainer: "#cde7ec",
    onSecondaryContainer: "#051f23",
    tertiary: "#00668a",
    onTertiary: "#ffffff",
    tertiaryContainer: "#c4e7ff",
    onTertiaryContainer: "#001e2c",
    error: "#ba1a1a",
    onError: "#ffffff",
    errorContainer: "#ffdad6",
    onErrorContainer: "#410002",
    background: "#fafdfd",
    onBackground: "#191c1d",
    surface: "#fafdfd",
    onSurface: "#191c1d",
    outline: "#6f797a",
    outlineVariant: "#3f484a",
    surfaceVariant: "#dbe4e6",
    onSurfaceVariant: "#3f484a"
  }
};

export const darkTheme: ThemeProp = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#4fd8eb",
    onPrimary: "#00363d",
    primaryContainer: "#004f58",
    onPrimaryContainer: "#97f0ff",
    secondary: "#b1cbd0",
    onSecondary: "#1c3438",
    secondaryContainer: "#334b4f",
    onSecondaryContainer: "#cde7ec",
    tertiary: "#7bd0ff",
    onTertiary: "#003549",
    tertiaryContainer: "#004c69",
    onTertiaryContainer: "#c4e7ff",
    error: "#ffb4ab",
    onError: "#690005",
    errorContainer: "#93000a",
    onErrorContainer: "#ffdad6",
    background: "#191c1d",
    onBackground: "#e1e3e3",
    surface: "#191c1d",
    onSurface: "#e1e3e3",
    outline: "#899294",
    outlineVariant: "#bfc8ca",
    surfaceVariant: "#3f484a",
    onSurfaceVariant: "#bfc8ca"
  }
};
