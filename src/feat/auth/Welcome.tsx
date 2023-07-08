import React, {useContext} from "react";
import {StyleSheet, Text, View} from "react-native";
import {ThemeContext} from "../../infra/theme/theme.provider";
import {Button} from "react-native-paper";
import Wrapper from "../../infra/wrap/Wrapper";
import AuthTitle from "./auth.title";

// @ts-ignore
export default function Welcome({navigation}) {
  const {text, ui, gaps} = useContext(ThemeContext);
  return (<Wrapper>
    <AuthTitle title="Welcome"/>
    {/* @ts-ignore */}
    <View style={styles.buttonContainer(gaps)}>
      <Button
          style={styles.button}
          mode="outlined"
          textColor={text.color.primary}
          onPress={() => navigation.navigate("Registration")}
      >
        Register
      </Button>
      <Button
          style={styles.button}
          mode="contained"
          buttonColor={ui.color.primary}
          textColor={text.color.primary}
          onPress={() => navigation.navigate("Login")}
      >
        Login
      </Button>
    </View>
  </Wrapper>);
};

const styles = StyleSheet.create({
  titleContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  // @ts-ignore
  title: (textStyle) => ({
    fontSize: textStyle.size.l,
    color: textStyle.color.primary
  }),
  // @ts-ignore
  buttonContainer: (gapStyle) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    margin: gapStyle.m,
    columnGap: gapStyle.m
  }),
  button: {
    width: "45%"
  }
});
