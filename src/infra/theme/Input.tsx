import React from "react";
import {MD3Theme, TextInput, withTheme} from "react-native-paper";
import {StyleSheet} from "react-native";

const Input: (props: {
  theme: MD3Theme,
  label: string,
  placeholder: string,
  value: string,
  onChangeText: (value: string) => void,
  isError: boolean,
  onBlur: () => void,
  secureTextEntry: boolean
}) => JSX.Element = ({
                       theme,
                       label,
                       placeholder,
                       value,
                       onChangeText,
                       isError = false,
                       onBlur = () => {},
                       secureTextEntry = false
                     }) => (
    <TextInput
        // @ts-ignore
        style={styles.input(theme.colors.primaryContainer)}
        outlineColor={theme.colors.primary}
        activeOutlineColor={theme.colors.secondary}
        textColor={theme.colors.primary}
        placeholderTextColor={theme.colors.secondary}
        theme={{colors: {onSurfaceVariant: theme.colors.secondary}}}
        label={label}
        placeholder={placeholder}
        mode='outlined'
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        error={isError}
    />
);

export default withTheme(Input);

const styles = StyleSheet.create({
  // @ts-ignore
  input: (backgroundColor) => ({
    backgroundColor: backgroundColor
  })
});
