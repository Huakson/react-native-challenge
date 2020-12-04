import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import { useNavigation } from '@react-navigation/native';

import { getAuthenticate } from '../../utils/loginStorage';
import ConsoleLogo from '../../assets/game-console.svg';

export default () => {

    const navigation = useNavigation();


    useEffect(() => {
        const checkLogin = async () => {

            getAuthenticate().then(authenticated => {

                if (authenticated === "true") {
                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    });
                } else {
                    navigation.reset({
                        routes: [{ name: 'SignIn' }]
                    });
                }

            });
        }

        checkLogin();
    }, []);

    return (
        <Container >
            <ConsoleLogo width="100%" height="160" />
            <LoadingIcon size="large" color="#FFF" />
        </Container>
    )
}