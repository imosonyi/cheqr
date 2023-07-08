import React, {useContext} from "react";
import {StyleSheet, View} from "react-native";
import {ThemeContext} from "../theme/theme.provider";
import Loading from "../theme/Loading";
import {AuthContext} from "../../feat/auth/auth.provider";

// @ts-ignore
export default function Wrapper({children}) {
  const {background} = useContext(ThemeContext);
  const {isLoading} = useContext(AuthContext);
  // @ts-ignore
  return (<View style={styles.wrapper(background)}>
    <View style={styles.content}>
      {children}
    </View>
    {isLoading && <Loading/>}
  </View>);
};

const styles = StyleSheet.create({
  // @ts-ignore
  wrapper: (wrapperStyle) => ({
    backgroundColor: wrapperStyle.backgroundColor,
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
