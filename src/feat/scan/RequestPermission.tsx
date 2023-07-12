import React, {useContext, useEffect} from "react";
import Wrapper from "../../infra/wrap/Wrapper";
import {StyleSheet, Text, View} from "react-native";
import {Button, MD3Theme, withTheme} from "react-native-paper";
import {ScanContext} from "./scan.provider";
import {BarCodeScanner} from "expo-barcode-scanner";

const RequestPermission: (props: { theme: MD3Theme }) => JSX.Element = ({theme}) => {
  const {isRequesting, setIsRequesting, hasPermission, setHasPermission} = useContext(ScanContext);

  const requestPermission: () => void = () => {
    setIsRequesting(true);
    BarCodeScanner.requestPermissionsAsync()
        .then(({status}) => setHasPermission(status === "granted"))
        .then(() => setIsRequesting(false));
  };
  useEffect(requestPermission, []);

  return (<Wrapper isLoading={isRequesting}>
    <View style={styles.messageContainer}>
      <Text style={{color: theme.colors.onBackground}}>{isRequesting ? "Requesting" : "No access"}</Text>
      <Button mode="contained" onPress={requestPermission} disabled={isRequesting}>Request camera access</Button>
    </View>
  </Wrapper>);
};

export default withTheme(RequestPermission);

const styles = StyleSheet.create({
  messageContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }
});
