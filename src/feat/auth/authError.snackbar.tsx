import React, {useContext} from "react";
import {StyleSheet} from "react-native";
import {Snackbar} from "react-native-paper";
import {ThemeContext} from "../../infra/theme/theme.provider";

// @ts-ignore
export default function AuthErrorSnackbar({error, onDismiss}) {
  const {ui, gaps} = useContext(ThemeContext);
  return (<Snackbar visible={!!error}
                    onDismiss={onDismiss}
                    duration={3000}
      // @ts-ignore
                    style={styles.snackbar(ui)}>
    {error}
  </Snackbar>);
};

const styles = StyleSheet.create({
  // @ts-ignore
  snackbar: (uiStyle) => ({
    backgroundColor: uiStyle.color.secondary
  })
});
