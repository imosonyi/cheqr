import React, {useContext} from "react";
import {Divider} from "react-native-paper";
import {StyleSheet, Text, View} from "react-native";
import {ThemeContext} from "../../infra/theme/theme.provider";

export default function AuthDivider() {
  const {text} = useContext(ThemeContext);

  return (<View style={styles.dividerContainer}>
    {/* @ts-ignore */}
    <Divider style={styles.divider(text)}/>
    {/* @ts-ignore */}
    <Text style={styles.dividerText(text)}>or</Text>
    {/* @ts-ignore */}
    <Divider style={styles.divider(text)}/>
  </View>);
};

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  // @ts-ignore
  divider: (textStyle) => ({
    width: "30%",
    backgroundColor: textStyle.color.secondary
  }),
  // @ts-ignore
  dividerText: (textStyle) => ({
    color: textStyle.color.primary
  })
});
