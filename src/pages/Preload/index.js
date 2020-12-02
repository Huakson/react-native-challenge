import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import ConsoleLogo from '../../assets/game-console.svg';

export default () => {

    const navigation = useNavigation();


    useEffect(() => {
        const checkLogin = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token){
                // validar o token
                
            }else{
                navigation.navigate('SignIn');
            }
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