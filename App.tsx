import React, {useState} from "react";
import {Appearance, StyleSheet, useColorScheme} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import AuthProvider from "./src/feat/auth/auth.provider";
import AppNavigator from "./src/infra/nav/app.navigator";
import {PaperProvider} from "react-native-paper";
import {darkTheme, lightTheme} from "./src/infra/theme/theme";
import ScanContextProvider from "./src/feat/scan/scan.provider";

const App: () => JSX.Element = () => {
  const [dark, setDark] = useState(useColorScheme() === "dark");
  Appearance.addChangeListener((preferences) => setDark(preferences.colorScheme === "dark"));

  return (<SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <PaperProvider theme={dark ? darkTheme : lightTheme}>
        <AuthProvider>
          <ScanContextProvider>
            <NavigationContainer>
              <AppNavigator/>
            </NavigationContainer>
          </ScanContextProvider>
        </AuthProvider>
      </PaperProvider>
    </SafeAreaView>
  </SafeAreaProvider>);
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
