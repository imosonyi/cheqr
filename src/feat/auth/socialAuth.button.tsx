import React from "react";
import {IconButton} from "react-native-paper";

const SocialAuthButton: (props: { platform: string }) => JSX.Element = ({platform}) => (
    <IconButton
        disabled={true}
        icon={platform}
        mode="contained"/>
);

export default SocialAuthButton;
