import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, MD3Theme, withTheme} from "react-native-paper";
import Wrapper from "../../infra/wrap/Wrapper";
import AuthTitle from "./auth.title";
import {NavigationProp} from "@react-navigation/core/src/types";

const Welcome: (props: { theme: MD3Theme, navigation: NavigationProp<any> }) => JSX.Element = ({theme, navigation}) => (
    <Wrapper>
      <AuthTitle title="Welcome"/>
      <View style={styles.buttonContainer}>
        <Button
            style={styles.button}
            mode="outlined"
            buttonColor={theme.colors.secondary}
            textColor={theme.colors.onSecondary}
            onPress={() => navigation.navigate("Registration")}
        >
          Register
        </Button>
        <Button
            style={styles.button}
            mode="contained"
            buttonColor={theme.colors.primary}
            textColor={theme.colors.onPrimary}
            onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
      </View>
    </Wrapper>);

export default withTheme(Welcome);

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    columnGap: 20
  },
  button: {
    width: "45%"
  }
});
