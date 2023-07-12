import React from "react";
import {MD3Theme, Snackbar, withTheme} from "react-native-paper";
import {StyleSheet, Text} from "react-native";

const AuthErrorSnackbar: (props: { error: string, onDismiss: () => void, theme: MD3Theme }) => JSX.Element =
    ({error, onDismiss, theme}) => (
        <Snackbar visible={!!error}
                  onDismiss={onDismiss}
                  duration={3000}
                  wrapperStyle={styles.wrapper}
                  style={styles.snackbar}>
          {/* @ts-ignore */}
          <Text style={styles.message(theme.colors.surface)}>{error}</Text>
        </Snackbar>
    );

export default withTheme(AuthErrorSnackbar);

const styles = StyleSheet.create({
  wrapper: {
    top: 0
  },
  snackbar: {
    marginHorizontal: 100
  },
  // @ts-ignore
  message: (color) => ({
    color: color,
    textAlign: "center"
  })
});
