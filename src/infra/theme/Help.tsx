import React, {useContext} from "react";
import {HelperText} from "react-native-paper";
import {ThemeContext} from "./theme.provider";

// @ts-ignore
export default function Help({visible, children}) {
  const {ui} = useContext(ThemeContext);
  return visible && (
      <HelperText type="info" style={{color: ui.color.secondary}} visible={visible}>
        {children}
      </HelperText>
  );
};
