import React, {useContext} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {ScanContext} from "./scan.provider";
import RequestPermission from "./RequestPermission";
import ScanResult from "./ScanResult";
import Scanner from "./Scanner";

const ScanStack = createStackNavigator();

const ScanNavigator: () => JSX.Element = () => {
  const {hasPermission, value} = useContext(ScanContext);
  return (<ScanStack.Navigator screenOptions={{headerShown: false}}>
    {!hasPermission
        ? <ScanStack.Screen name="RequestPermission" component={RequestPermission}/>
        : !value
            ? <ScanStack.Screen name="Scanner" component={Scanner}/>
            : <ScanStack.Screen name="ScanResult" component={ScanResult}/>
    }
  </ScanStack.Navigator>);
};

export default ScanNavigator;
