import React from "react";
import {Snackbar, withTheme} from "react-native-paper";
import {StyleSheet, Text} from "react-native";

const AuthErrorSnackbar: (props: { error: string, onDismiss: () => void }) => JSX.Element = ({error, onDismiss}) => (
    <Snackbar visible={!!error}
              onDismiss={onDismiss}
              duration={3000}
              wrapperStyle={styles.wrapper}
              style={styles.snackbar}>
      <Text style={styles.message}>{error}</Text>
    </Snackbar>
);

export default AuthErrorSnackbar;

const styles = StyleSheet.create({
  wrapper: {
    top: 0
  },
  snackbar: {
    marginHorizontal: 100
  },
  message: {
    textAlign: "center"
  }
});
