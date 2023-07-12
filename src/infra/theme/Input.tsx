import React from "react";
import {TextInput} from "react-native-paper";

const Input: (props: {
  label: string,
  placeholder: string,
  value: string,
  onChangeText: (value: string) => void,
  isError: boolean,
  onBlur: () => void,
  secureTextEntry?: boolean
}) => JSX.Element = ({
                       label,
                       placeholder,
                       value,
                       onChangeText,
                       isError = false,
                       onBlur = () => {},
                       secureTextEntry = false
                     }) => (
    <TextInput
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

export default Input;
