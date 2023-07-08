import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Welcome from "./Welcome";
import Login from "./Login";
import Registration from "./Registration";

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
      <AuthStack.Navigator screenOptions={{headerTransparent: true, headerTitle: ""}}>
        <AuthStack.Screen name="Welcome" component={Welcome}/>
        <AuthStack.Screen name="Login" component={Login}/>
        <AuthStack.Screen name="Registration" component={Registration}/>
      </AuthStack.Navigator>
  );
};
