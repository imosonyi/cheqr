import React from "react";
import {StyleSheet} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import ThemeProvider from "./src/infra/theme/theme.provider";
import {NavigationContainer} from "@react-navigation/native";
import AuthProvider from "./src/feat/auth/auth.provider";
import AppNavigator from "./src/infra/nav/app.navigator";

export default function App() {
  return (<SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <ThemeProvider>
        <AuthProvider>
          <NavigationContainer>
            <AppNavigator/>
          </NavigationContainer>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaView>
  </SafeAreaProvider>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
