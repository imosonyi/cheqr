import React, {useContext} from "react";
import Wrapper from "../../infra/wrap/Wrapper";
import {StyleSheet, Text, View} from "react-native";
import {Button, MD3Theme, withTheme} from "react-native-paper";
import {ScanContext} from "./scan.provider";

const ScanResult: (props: { theme: MD3Theme }) => JSX.Element = ({theme}) => {
  const {value, setValue} = useContext(ScanContext);

  return (<Wrapper>
    <View style={styles.resultContainer}>
      <Text style={{color: theme.colors.onBackground}}>{value}</Text>
      <Button mode="contained" onPress={() => setValue(undefined)}>Scan again</Button>
    </View>
  </Wrapper>);
};

export default withTheme(ScanResult);

const styles = StyleSheet.create({
  resultContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }
});
