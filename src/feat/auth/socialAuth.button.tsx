import React, {useContext} from "react";
import {IconButton} from "react-native-paper";
import {ThemeContext} from "../../infra/theme/theme.provider";

// @ts-ignore
export default function SocialAuthButton({platform}) {
  const {ui, text} = useContext(ThemeContext);

  return (<IconButton
      disabled={true}
      icon={platform}
      mode="contained"
      containerColor={ui.color.primary}
      iconColor={text.color.primary}/>);
};
