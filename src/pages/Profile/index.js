import React, { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';


import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    ProfileArea,
    LogoutButton,
    LogoutText,
    ProfileText,
    InputArea,
    ChangePasswordButton,
    ChangePasswordText,
    ButtonArea
} from './styles';

import SignInput from '../../components/SignInput';
import { logout, changePassword } from '../../utils/loginStorage';

import { UserContext } from '../../contexts/UserContext';
import LockIcon from '../../assets/lock.svg';

export default () => {

    const navigation = useNavigation();

    const [oldPasswordField, setOldPasswordField] = useState();
    const [newPasswordField, setNewPasswordField] = useState();
    const [confirmPasswordField, setConfirmPasswordField] = useState();

    const { state: userState, dispatch: userDispatch } = useContext(UserContext);

    const exit = async () => {
        await logout().then((response) => {
            if (response) {
                navigation.reset({
                    routes: [{ name: 'SignIn' }]
                });
            }
        });
    }

    const changePass = async () => {
        if (oldPasswordField != '' && newPasswordField != '' && confirmPasswordField != '') {
            if (oldPasswordField != newPasswordField) {
                if (newPasswordField === confirmPasswordField) {

                    await changePassword(userState.email, newPasswordField, oldPasswordField).then((response) => {
                        console.log("aquii " + response);
                        if (response) {

                            alert("Senha atualizada com sucesso!");

                            navigation.reset({
                                routes: [{ name: 'SignIn' }]
                            });
                        } else {
                            alert("Verifique as senhas e tente novamente");
                        }
                    })

                } else {
                    alert("As senhas não conhecidem")
                }
            } else {
                alert("A senha atual e a nova senha não podem ser iguais")
            }
        } else {
            alert("Preencha corretamente os campos")
        }
    }


    return (
        <Container>
            <Scroller>

                <HeaderArea>
                    <HeaderTitle>Perfil: {userState.name}</HeaderTitle>
                </HeaderArea>

                <ProfileArea >
                    <ProfileText>Você pode alterar sua senha</ProfileText>

                    <InputArea>

                        <SignInput
                            IconSvg={LockIcon}
                            placeholder="Digite sua senha atual"
                            value={oldPasswordField}
                            onChangeText={text => setOldPasswordField(text)}
                            password={true}
                        />

                        <SignInput
                            IconSvg={LockIcon}
                            placeholder="Digite sua nova senha"
                            value={newPasswordField}
                            onChangeText={text => setNewPasswordField(text)}
                            password={true}
                        />

                        <SignInput
                            IconSvg={LockIcon}
                            placeholder="Confirme sua nova senha"
                            value={confirmPasswordField}
                            onChangeText={text => setConfirmPasswordField(text)}
                            password={true}
                        />


                    </InputArea>




                </ProfileArea>

                <ButtonArea>
                    <ChangePasswordButton >
                        <ChangePasswordText onPress={() => changePass()}>Alterar senha</ChangePasswordText>
                    </ChangePasswordButton>
                </ButtonArea>

                <ButtonArea>
                    <LogoutButton onPress={() => exit()}>
                        <LogoutText>Sair da loja (Logout)</LogoutText>
                    </LogoutButton>

                </ButtonArea>


            </Scroller>
        </Container>
    )
} 