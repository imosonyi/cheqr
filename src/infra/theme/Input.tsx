import React, {useContext} from "react";
import {TextInput} from "react-native-paper";
import {ThemeContext} from "./theme.provider";
import {StyleSheet} from "react-native";

// @ts-ignore
export default function Input({label, placeholder, value, onChangeText, isError = false, onBlur = () => {}, secureTextEntry = false}) {
  const {text, ui, background} = useContext(ThemeContext);

  return (<TextInput
      // @ts-ignore
      style={styles.input(background)}
      outlineColor={ui.color.primary}
      activeOutlineColor={ui.color.secondary}
      textColor={text.color.primary}
      placeholderTextColor={text.color.secondary}
      theme={{colors: {onSurfaceVariant: text.color.secondary}}}
      label={label}
      placeholder={placeholder}
      mode='outlined'
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      secureTextEntry={secureTextEntry}
      error={isError}
  />);
};

const styles = StyleSheet.create({
  // @ts-ignore
  input: (inputStyle) => ({
    backgroundColor: inputStyle.backgroundColor
  })
});
