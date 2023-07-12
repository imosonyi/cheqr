import React, {useContext} from "react";
import {StyleSheet, View} from "react-native";
import Wrapper from "../../infra/wrap/Wrapper";
import {IconButton} from "react-native-paper";
import {AuthContext} from "../auth/auth.provider";
import {signOut} from "../auth/auth.service";

const Home: () => JSX.Element = () => {
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
          onPress={logout}/>
    </View>
  </Wrapper>);
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
