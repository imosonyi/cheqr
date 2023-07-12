import React, {ReactNode} from "react";
import {StyleSheet, View} from "react-native";
import Loading from "../theme/Loading";
import {MD3Theme, withTheme} from "react-native-paper";

const Wrapper: (props: { children: ReactNode, theme: MD3Theme, isLoading?: boolean }) => JSX.Element =
    ({children, theme, isLoading}) => {
      // @ts-ignore
      return (<View style={styles.wrapper(theme.colors.background)}>
        <View style={styles.content}>
          {children}
        </View>
        {isLoading && <Loading/>}
      </View>);
    }

export default withTheme(Wrapper);

const styles = StyleSheet.create({
  // @ts-ignore
  wrapper: (backgroundColor) => ({
    backgroundColor: backgroundColor,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  }),
  content: {
    flex: 1,
    height: "100%",
    maxWidth: 800
  }
});
