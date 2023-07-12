import React from "react";
import {createMaterialBottomTabNavigator} from "react-native-paper/react-navigation";
import Cheques from "../../feat/cheq/Cheques";
import Upload from "../../feat/upload/Upload";
import {Platform} from "react-native";
import ScanNavigator from "../../feat/scan/scan.navigator";

const Tab = createMaterialBottomTabNavigator();

const ContentNavigator: () => JSX.Element = () => (
    <Tab.Navigator>
      <Tab.Screen name="Cheques" component={Cheques} options={{tabBarIcon: "checkbook"}}/>
      {Platform.OS !== "web" &&
          <Tab.Screen name="ScanNavigator" component={ScanNavigator} options={{tabBarIcon: "qrcode-scan"}}/>}
      <Tab.Screen name="Upload" component={Upload} options={{tabBarIcon: "file-upload"}}/>
    </Tab.Navigator>
);

export default ContentNavigator;
