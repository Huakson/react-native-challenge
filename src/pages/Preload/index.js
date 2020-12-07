import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles';
import { useNavigation } from '@react-navigation/native';

import { getAuthenticate, getUser } from '../../utils/loginStorage';
import ConsoleLogo from '../../assets/game-console.svg';

import { UserContext } from '../../contexts/UserContext';

export default () => {

    const navigation = useNavigation();
    const { dispatch: userDispatch } = useContext(UserContext);

    useEffect(() => {
        const checkLogin = async () => {

            getAuthenticate().then(authenticated => {

                if (authenticated) {
                    if (authenticated.authenticated === 'true') {

                        getUser(authenticated.email).then((user) => {

                            console.log(`authenticate ${JSON.stringify(user)}`);

                            userDispatch({
                                type: 'setName',
                                payload: {
                                    email: user.email,
                                    name: user.name

                                }
                            });

                            navigation.reset({
                                routes: [{ name: 'MainTab' }]
                            });

                        });
                    }
                }

                navigation.reset({
                    routes: [{ name: 'SignIn' }]
                });


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