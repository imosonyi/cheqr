import React, {ReactNode} from "react";
import {HelperText} from "react-native-paper";

// @ts-ignore
const Help: (props: { visible: boolean, children: ReactNode }) => JSX.Element =
    ({visible, children}) => {
      return visible && (
          <HelperText type="info" visible={visible}>
            {children}
          </HelperText>
      );
    };

export default Help;
