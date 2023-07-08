import {StyleSheet} from "react-native";

export const authFormStyle = StyleSheet.create({
  // @ts-ignore
  formContainer: (gapStyle) => ({
    margin: gapStyle.m,
    rowGap: gapStyle.m
  }),
  // @ts-ignore
  inputContainer: (gapStyle) => ({
    rowGap: gapStyle.m
  }),
  // @ts-ignore
  buttonContainer: (gapStyle) => ({
    rowGap: gapStyle.m
  }),
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
