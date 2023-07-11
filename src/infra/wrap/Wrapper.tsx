import React, {ReactNode, useContext} from "react";
import {StyleSheet, View} from "react-native";
import Loading from "../theme/Loading";
import {AuthContext} from "../../feat/auth/auth.provider";
import {MD3Theme, withTheme} from "react-native-paper";

const Wrapper: (props: { children: ReactNode, theme: MD3Theme }) => JSX.Element = ({children, theme}) => {
  const {isLoading} = useContext(AuthContext);
  // @ts-ignore
  return (<View style={styles.wrapper(theme.colors.primaryContainer)}>
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
