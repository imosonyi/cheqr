import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Welcome from "./Welcome";
import Login from "./Login";
import Registration from "./Registration";

const AuthStack = createStackNavigator();

const AuthNavigator: () => JSX.Element = () => (
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen name="Welcome" component={Welcome}/>
      <AuthStack.Screen name="Login" component={Login}/>
      <AuthStack.Screen name="Registration" component={Registration}/>
    </AuthStack.Navigator>
);

export default AuthNavigator;

const screenOptions = {
  headerTransparent: true,
  headerTitle: "",
  headerStatusBarHeight: 0
};
