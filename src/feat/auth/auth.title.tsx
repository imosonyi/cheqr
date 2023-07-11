import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {MD3Theme, withTheme} from "react-native-paper";

const AuthTitle: (props: { title: string, theme: MD3Theme }) => JSX.Element = ({title, theme}) => (
    <View style={styles.titleContainer}>
      {/* @ts-ignore */}
      <Text style={styles.title(theme)}>{title}</Text>
    </View>
);

export default withTheme(AuthTitle);

const styles = StyleSheet.create({
  titleContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  // @ts-ignore
  title: (theme: MD3Theme) => ({
    fontSize: theme.fonts.titleLarge.fontSize,
    color: theme.colors.onBackground
  })
});
