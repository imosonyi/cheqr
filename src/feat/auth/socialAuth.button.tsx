import React from "react";
import {IconButton, MD3Theme, withTheme} from "react-native-paper";

const SocialAuthButton: (props: { platform: string, theme: MD3Theme }) => JSX.Element = ({platform, theme}) => (
    <IconButton
        disabled={true}
        icon={platform}
        mode="contained"
        containerColor={theme.colors.primary}
        iconColor={theme.colors.onPrimary}/>
);

export default withTheme(SocialAuthButton);
