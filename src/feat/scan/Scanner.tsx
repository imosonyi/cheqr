import React, {useContext} from "react";
import {ScanContext} from "./scan.provider";
import {BarCodeScanner} from "expo-barcode-scanner";
import {StyleSheet} from "react-native";
import Wrapper from "../../infra/wrap/Wrapper";

const Scanner: () => JSX.Element = () => {
  const {value, setValue} = useContext(ScanContext);
  return (<Wrapper>
    <BarCodeScanner onBarCodeScanned={value ? undefined : ({data}) => setValue(data)}
                    style={StyleSheet.absoluteFillObject}/>
  </Wrapper>);
};

export default Scanner;
