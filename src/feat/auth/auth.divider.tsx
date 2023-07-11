import React from "react";
import {Divider, MD3Theme, withTheme} from "react-native-paper";
import {StyleSheet, Text, View} from "react-native";

const AuthDivider: (props: { theme: MD3Theme }) => JSX.Element = ({theme}) => (
    <View style={styles.dividerContainer}>
      {/* @ts-ignore */}
      <Divider style={styles.divider(theme.colors.primary)}/>
      {/* @ts-ignore */}
      <Text style={styles.dividerText(theme.colors.onBackground)}>or</Text>
      {/* @ts-ignore */}
      <Divider style={styles.divider(theme.colors.primary)}/>
    </View>
);

export default withTheme(AuthDivider);

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  // @ts-ignore
  divider: (backgroundColor: string) => ({
    width: "30%",
    backgroundColor: backgroundColor
  }),
  // @ts-ignore
  dividerText: (color: string) => ({
    color: color
  })
});
