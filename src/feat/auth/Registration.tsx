import React, {useContext, useState} from "react";
import {Platform, View} from "react-native";
import {ThemeContext} from "../../infra/theme/theme.provider";
import {Button} from "react-native-paper";
import Wrapper from "../../infra/wrap/Wrapper";
import {authFormStyle} from "./authForm.style";
import Input from "../../infra/theme/Input";
import SocialAuthButton from "./socialAuth.button";
import AuthDivider from "./auth.divider";
import AuthTitle from "./auth.title";
import Help from "../../infra/theme/Help";
import {AuthContext} from "./auth.provider";
import {signUp} from "./auth.service";
import AuthErrorSnackbar from "./authError.snackbar";
import handleAuthError from "./auth.errorHandler";

// @ts-ignore
export default function Registration({navigation}) {
  const {text, ui, gaps} = useContext(ThemeContext);
  const {setIsLoading} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [emailBlurred, setEmailBlurred] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordBlurred, setPasswordBlurred] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmBlurred, setPasswordConfirmBlurred] = useState(false);
  const [error, setError] = useState("");

  const isEmailValid = () => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
  const isPasswordValid = () => passwordContains([
    atLeast8Characters, aLowerCaseLetter, anUpperCaseLetter, aNumber, aSpecialCharacter
  ]);
  const confirmMatches = () => passwordConfirm === password;
  const isFormValid = () => (emailBlurred || passwordBlurred || passwordConfirmBlurred) && isEmailValid() && isPasswordValid() && confirmMatches();
  const passwordContains = (criteria: ((value: string) => boolean)[]) => criteria.every(c => c(password));
  const atLeast8Characters = (value: string) => value.length >= 8;
  const aLowerCaseLetter = (value: string) => /[a-z]+/.test(value);
  const anUpperCaseLetter = (value: string) => /[A-Z]+/.test(value);
  const aNumber = (value: string) => /\d+/.test(value);
  const aSpecialCharacter = (value: string) => /[@$!%*?&]+/.test(value);

  const register = () => {
    setIsLoading(true);
    signUp(email, password)
        .catch((error: { code: string }) => setError(handleAuthError(error)))
        .finally(() => setIsLoading(false));
  };

  return (<Wrapper>
    <AuthTitle title="Registration"/>
    {/* @ts-ignore */}
    <View style={styles.formContainer(gaps)}>
      {/* @ts-ignore */}
      <View style={styles.inputContainer(gaps)}>
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
                 isError={passwordBlurred && !isPasswordValid()}
                 onChangeText={setPassword}
                 onBlur={() => setPasswordBlurred(true)}
                 secureTextEntry={true}/>
          <Help visible={passwordBlurred && !isPasswordValid()}>
            Password is not strong enough, it must contain:
          </Help>
          <Help visible={passwordBlurred && !passwordContains([atLeast8Characters])}>
            {"\u2022"} at least 8 characters
          </Help>
          <Help visible={passwordBlurred && !passwordContains([aLowerCaseLetter])}>
            {"\u2022"} at least 1 lower case letter ([a-z])
          </Help>
          <Help visible={passwordBlurred && !passwordContains([anUpperCaseLetter])}>
            {"\u2022"} at least 1 upper case letter ([A-Z])
          </Help>
          <Help visible={passwordBlurred && !passwordContains([aNumber])}>
            {"\u2022"} at least 1 number ([0-9])
          </Help>
          <Help visible={passwordBlurred && !passwordContains([aSpecialCharacter])}>
            {"\u2022"} at least 1 special character ([@$!%*?&])
          </Help>
        </View>
        <View>
          <Input label="Confirm password"
                 placeholder="******"
                 value={passwordConfirm}
                 isError={passwordConfirmBlurred && !confirmMatches()}
                 onChangeText={setPasswordConfirm}
                 onBlur={() => setPasswordConfirmBlurred(true)}
                 secureTextEntry={true}/>
          <Help visible={passwordConfirmBlurred && !confirmMatches()}>
            Passwords are not matching
          </Help>
        </View>
      </View>
      {/* @ts-ignore */}
      <View style={styles.buttonContainer(gaps)}>
        <Button mode="contained"
                buttonColor={ui.color.primary}
                textColor={text.color.secondary}
                disabled={!isFormValid()}
                onPress={register}>
          Register
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
};

const styles = authFormStyle;
