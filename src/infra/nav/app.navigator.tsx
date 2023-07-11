import React, {useContext} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../../feat/home/Home";
import AuthNavigator from "../../feat/auth/auth.navigator";
import {AuthContext} from "../../feat/auth/auth.provider";

const AppStack = createStackNavigator();

const AppNavigator: () => JSX.Element = () => {
  const {user} = useContext(AuthContext);

  return (<AppStack.Navigator screenOptions={{headerShown: false}}>
    {user?.email
        ? <AppStack.Screen name="Home" component={Home}/>
        : <AppStack.Screen name="AuthNavigator" component={AuthNavigator}/>
    }
  </AppStack.Navigator>);
};

export default AppNavigator;
