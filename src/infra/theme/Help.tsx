import React, {ReactNode} from "react";
import {HelperText, MD3Theme, withTheme} from "react-native-paper";

// @ts-ignore
const Help: (props: { visible: boolean, children: ReactNode, theme: MD3Theme }) => JSX.Element =
    ({visible, children, theme}) => {
      return visible && (
          <HelperText type="info" style={{color: theme.colors.secondary}} visible={visible}>
            {children}
          </HelperText>
      );
    };

export default withTheme(Help);
