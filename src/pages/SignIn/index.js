import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

import { signIn } from '../../utils/loginStorage';

import SignInput from '../../components/SignInput';

import ConsoleLogo from '../../assets/game-console.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

import { UserContext } from '../../contexts/UserContext';

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);


    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignInButtonClick = async () => {

        if (emailField != '' && passwordField != '') {
            await signIn(emailField, passwordField).then((response) => {
                if (response) {

                    userDispatch({
                        type: 'setName',
                        payload: {
                            name: response.name
                        }
                    });

                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    });

                } else {
                    alert("E-mail e/ou senha estão incorretos");
                }
            });

        } else {
            alert("Preencha corretamente os campos!")
        }
    }

    const handleSignUpButtonClick = () => {
        navigation.navigate('SignUp');
    }


    return (
        <Container >
            <ConsoleLogo width="100%" height="160" />

            <InputArea>
                <SignInput
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={text => setEmailField(text)}
                />

                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={text => setPasswordField(text)}
                    password={true}
                />

                <CustomButton onPress={handleSignInButtonClick} >
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleSignUpButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    )
}