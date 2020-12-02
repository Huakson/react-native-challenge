import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

import SignInput from '../../components/SignInput';

import ConsoleLogo from '../../assets/game-console.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignInButtonClick = () => {

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
                    onChangeText={text=>setEmailField(text)}
                />

                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={text=>setPasswordField(text)}
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