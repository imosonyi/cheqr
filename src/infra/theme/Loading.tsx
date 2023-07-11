import React from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import {MD3Theme, withTheme} from "react-native-paper";

const Loading: (props: { theme: MD3Theme }) => JSX.Element = ({theme}) => (
    <View style={styles.container}>
      <ActivityIndicator color={theme.colors.primary} size="large" animating={true}/>
    </View>
);

export default withTheme(Loading);

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
