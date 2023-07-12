import React from "react";
import {StyleSheet, View} from "react-native";
import {Button} from "react-native-paper";
import Wrapper from "../../infra/wrap/Wrapper";
import AuthTitle from "./auth.title";
import {NavigationProp} from "@react-navigation/core/src/types";

const Welcome: (props: { navigation: NavigationProp<any> }) => JSX.Element = ({navigation}) => (
    <Wrapper>
      <AuthTitle title="Welcome"/>
      <View style={styles.buttonContainer}>
        <Button
            style={styles.button}
            mode="outlined"
            onPress={() => navigation.navigate("Registration")}
        >
          Register
        </Button>
        <Button
            style={styles.button}
            mode="contained"
            onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
      </View>
    </Wrapper>);

export default Welcome;

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
