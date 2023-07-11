import React from "react";
import {MD3Theme, Snackbar, withTheme} from "react-native-paper";
import {StyleSheet} from "react-native";
import {Text} from "react-native";

const AuthErrorSnackbar: (props: { error: string, onDismiss: () => void, theme: MD3Theme }) => JSX.Element =
    ({error, onDismiss, theme}) => (
        <Snackbar visible={!!error}
                  onDismiss={onDismiss}
                  duration={3000}
                  wrapperStyle={styles.wrapper}
                  // @ts-ignore
                  style={styles.snackbar(theme.colors.secondary)}>
          <Text style={styles.message}>{error}</Text>
        </Snackbar>
    );

export default withTheme(AuthErrorSnackbar);

const styles = StyleSheet.create({
  wrapper: {
    top: 0
  },
  // @ts-ignore
  snackbar: (backgroundColor) => ({
    backgroundColor: backgroundColor,
    marginHorizontal: 100
  }),
  message: {
    textAlign: "center"
  }
});
