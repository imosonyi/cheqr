import React, {useContext} from "react";
import {StyleSheet, Text, View} from "react-native";
import {ThemeContext} from "../../infra/theme/theme.provider";

// @ts-ignore
export default function AuthTitle({title}) {
  const {text} = useContext(ThemeContext);

  return (<View style={styles.titleContainer}>
    {/* @ts-ignore */}
    <Text style={styles.title(text)}>{title}</Text>
  </View>);
};

const styles = StyleSheet.create({
  titleContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  // @ts-ignore
  title: (textStyle) => ({
    fontSize: textStyle.size.l,
    color: textStyle.color.primary
  })
});
