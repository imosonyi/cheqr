import React, {useContext} from "react";
import {ScanContext} from "./scan.provider";
import {BarCodeScanner} from "expo-barcode-scanner";
import {StyleSheet} from "react-native";

const Scanner: () => JSX.Element = () => {
  const {value, setValue} = useContext(ScanContext);
  return <BarCodeScanner onBarCodeScanned={value ? undefined : ({data}) => setValue(data)}
                         style={StyleSheet.absoluteFillObject}/>
};

export default Scanner;
