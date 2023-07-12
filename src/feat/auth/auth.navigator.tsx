import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Welcome from "./Welcome";
import Login from "./Login";
import Registration from "./Registration";
import {Appbar} from "react-native-paper";
import {NavigationProp} from "@react-navigation/native";

const AuthStack = createStackNavigator();
const AuthNavigatorHeader: (props: { navigation: NavigationProp<any>, back: boolean }) => JSX.Element =
    ({navigation, back}) => (
        <Appbar.Header statusBarHeight={0}>
          {back && <Appbar.BackAction onPress={navigation.goBack}/>}
        </Appbar.Header>
    );

const AuthNavigator: () => JSX.Element = () => (
    // @ts-ignore
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen name="Welcome" component={Welcome}/>
      <AuthStack.Screen name="Login" component={Login}/>
      <AuthStack.Screen name="Registration" component={Registration}/>
    </AuthStack.Navigator>
);

export default AuthNavigator;

const screenOptions = {
  header: AuthNavigatorHeader
};
