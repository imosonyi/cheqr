import React, {useContext, useEffect} from "react";
import Wrapper from "../../infra/wrap/Wrapper";
import {Linking, Platform, StyleSheet, Text, View} from "react-native";
import {Button, MD3Theme, withTheme} from "react-native-paper";
import {ScanContext} from "./scan.provider";
import {BarCodeScanner} from "expo-barcode-scanner";
import * as IntentLauncher from 'expo-intent-launcher';
import {ActivityAction} from 'expo-intent-launcher';
import Constants from "expo-constants";

const RequestPermission: (props: { theme: MD3Theme }) => JSX.Element = ({theme}) => {
  const {isRequesting, setIsRequesting, hasPermission, setHasPermission} = useContext(ScanContext);

  const openSettings: () => void = () => {
    setIsRequesting(true);
    if (Platform.OS === "ios") {
      Linking.openURL("app-settings:")
          .then(requestPermission);
    } else {
      const pkg = Constants.manifest?.releaseChannel
          ? Constants.manifest?.android?.package
          : "host.exp.exponent";
      IntentLauncher.startActivityAsync(ActivityAction.APPLICATION_DETAILS_SETTINGS, {data: "package:" + pkg})
          .then(requestPermission);
    }
  };

  const requestPermission: () => void = () => {
    setIsRequesting(true);
    BarCodeScanner.requestPermissionsAsync()
        .then(({status}) => setHasPermission(status === "granted"))
        .then(() => setIsRequesting(false));
  };
  useEffect(requestPermission, []);

  return (<Wrapper isLoading={isRequesting}>
    <View style={styles.messageContainer}>
      <Text style={{color: theme.colors.onBackground}}>{
        isRequesting
            ? "Requesting access to camera."
            : "CheQR requires access to camera to scan QR codes."
      }</Text>
      <Button mode="contained" onPress={openSettings} disabled={isRequesting}>Open settings</Button>
    </View>
  </Wrapper>);
};

export default withTheme(RequestPermission);

const styles = StyleSheet.create({
  messageContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    rowGap: 20
  }
});
