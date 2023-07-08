import React, {useContext} from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import {ThemeContext} from "./theme.provider";

export default function Loading() {
  const {ui} = useContext(ThemeContext);
  return (<View style={styles.container}>
    <ActivityIndicator color={ui.color.primary} size="large" animating={true}/>
  </View>);
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, .5)"
  }
});
