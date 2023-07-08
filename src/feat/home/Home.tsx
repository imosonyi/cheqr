import React, {useContext} from "react";
import {StyleSheet, View} from "react-native";
import {ThemeContext} from "../../infra/theme/theme.provider";
import Wrapper from "../../infra/wrap/Wrapper";
import {IconButton} from "react-native-paper";
import {AuthContext} from "../auth/auth.provider";
import {signOut} from "../auth/auth.service";

// @ts-ignore
export default function Home({navigation}) {
  const {ui, text} = useContext(ThemeContext);
  const {setIsLoading} = useContext(AuthContext);

  const logout = () => {
    setIsLoading(true);
    signOut()
        .then(() => setIsLoading(false));
  };

  return (<Wrapper>
    <View style={styles.container}>
      <IconButton
          icon="logout"
          mode="contained"
          containerColor={ui.color.primary}
          iconColor={text.color.primary}
          onPress={logout}/>
    </View>
  </Wrapper>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  // @ts-ignore
  text: (textStyle) => ({
    color: textStyle.color.primary
  })
});
