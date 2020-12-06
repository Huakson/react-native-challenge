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

import { signUp } from '../../utils/loginStorage';

import SignInput from '../../components/SignInput';

import ConsoleLogo from '../../assets/game-console.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';


import { UserContext } from '../../contexts/UserContext';

export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const { dispatch: userDispatch } = useContext(UserContext);


    const handleSignInButtonClick = async () => {

        if (emailField != '' && passwordField != '' && nameField != '') {
            await signUp(nameField, emailField, passwordField).then((response) => {
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
                    alert("Email indisponivel");
                }
            });
        } else {
            alert("Preencha corretamente os campos!")
        }
    }

    const handleSignUpButtonClick = () => {
        navigateTo('SignIn');
    }

    const navigateTo = (page) => {
        navigation.reset({
            routes: [{ name: `${page}` }]
        });
    }

    return (
        <Container >
            <ConsoleLogo width="100%" height="160" />

            <InputArea>

                <SignInput
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChangeText={text => setNameField(text)}
                />

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
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleSignUpButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça o Login</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    )
}