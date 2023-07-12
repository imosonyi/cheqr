import React, {useContext} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import AuthNavigator from "../../feat/auth/auth.navigator";
import {AuthContext} from "../../feat/auth/auth.provider";
import ContentNavigator from "./content.navigator";

const AppStack = createStackNavigator();

const AppNavigator: () => JSX.Element = () => {
  const {user} = useContext(AuthContext);

  return (<AppStack.Navigator screenOptions={{headerShown: false}}>
    {user?.email
        ? <AppStack.Screen name="ContentNavigator" component={ContentNavigator}/>
        : <AppStack.Screen name="AuthNavigator" component={AuthNavigator}/>
    }
  </AppStack.Navigator>);
};

export default AppNavigator;
