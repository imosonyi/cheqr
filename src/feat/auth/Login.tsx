import React, {useContext, useState} from "react";
import {Platform, View} from "react-native";
import {Button} from "react-native-paper";
import Wrapper from "../../infra/wrap/Wrapper";
import {authFormStyle} from "./authForm.style";
import Input from "../../infra/theme/Input";
import SocialAuthButton from "./socialAuth.button";
import AuthDivider from "./auth.divider";
import AuthTitle from "./auth.title";
import Help from "../../infra/theme/Help";
import {AuthContext} from "./auth.provider";
import {signIn} from "./auth.service";
import handleAuthError from "./auth.errorHandler";
import AuthErrorSnackbar from "./authError.snackbar";

const Login: () => JSX.Element = () => {
  const {isLoading, setIsLoading} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [emailBlurred, setEmailBlurred] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordBlurred, setPasswordBlurred] = useState(false);
  const [error, setError] = useState("");

  const isEmailValid = () => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
  const isPasswordPresent = () => password.length > 0;
  const isFormValid = () => (emailBlurred || passwordBlurred) && isEmailValid() && isPasswordPresent();
  const login = () => {
    setIsLoading(true);
    signIn(email, password)
        .catch((error: { code: string }) => setError(handleAuthError(error)))
        .finally(() => setIsLoading(false));
  };

  return (<Wrapper isLoading={isLoading}>
    <AuthTitle title="Login"/>
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <View>
          <Input label="E-mail"
                 placeholder="your@email.com"
                 value={email}
                 isError={emailBlurred && !isEmailValid()}
                 onChangeText={setEmail}
                 onBlur={() => setEmailBlurred(true)}/>
          <Help visible={emailBlurred && !isEmailValid()}>
            Invalid e-mail address
          </Help>
        </View>
        <View>
          <Input label="Password"
                 placeholder="******"
                 value={password}
                 isError={passwordBlurred && !isPasswordPresent()}
                 onChangeText={setPassword}
                 onBlur={() => setPasswordBlurred(true)}
                 secureTextEntry={true}/>
          <Help visible={passwordBlurred && !isPasswordPresent()}>
            Password is missing
          </Help>
        </View>
      </View>
      {/* @ts-ignore */}
      <View style={styles.buttonContainer}>
        <Button mode="contained"
                disabled={!isFormValid()}
                onPress={login}>
          Login
        </Button>
        <AuthDivider/>
        <View style={styles.socialContainer}>
          <SocialAuthButton platform="google"/>
          <SocialAuthButton platform="facebook"/>
          {Platform.OS === "ios" && <SocialAuthButton platform="apple"/>}
        </View>
      </View>
    </View>
    <AuthErrorSnackbar error={error} onDismiss={() => setError("")}/>
  </Wrapper>);
}

export default Login;

const styles = authFormStyle;
