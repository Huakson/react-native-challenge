import React, { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';


import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    ProductsArea,
    ProductsTitle,
    FreightText,
    SubTotalText,
    TotalText,
    SuccessButton,
    SuccessText,
    DangerButton,
    DangerText
} from './styles';

import { UserContext } from '../../contexts/UserContext';
import ProductCheckOut from '../../components/ProductCheckOut';
import { formatMoney } from '../../utils';

export default () => {

    const navigation = useNavigation();

    const { state: userState, dispatch: userDispatch } = useContext(UserContext);
    const products = [];

    products.push(...userState.cart);

    const success = () => {
        userDispatch({
            type: 'clean',
        });

        alert('O pedido foi feito com sucesso. Fim da challenge');

        navigation.reset({
            routes: [{ name: 'MainTab' }]
        });
    }

    const danger = () => {
        userDispatch({
            type: 'clean',
        });

        alert('O pedido foi cancelado com sucesso. Fim da challenge');

        navigation.reset({
            routes: [{ name: 'MainTab' }]
        });
    }

    return (
        <Container>
            <Scroller>

                <HeaderArea>
                    <HeaderTitle>Seu CheckOut</HeaderTitle>
                </HeaderArea>

                <ProductsTitle>Produtos adicionados:</ProductsTitle>

                <ProductsArea >
                    {products.map((product, key) => {
                        return (
                            <ProductCheckOut key={key} data={product} />
                        )
                    })}
                </ProductsArea>

                <FreightText >Frete: { userState.checkOut.freight !== 0 ? formatMoney(userState.checkOut.freight) : "Grátis"} </FreightText>

                <SubTotalText >Subtotal: {formatMoney(userState.checkOut.subTotal)} </SubTotalText>

                <TotalText >Total: {formatMoney(userState.checkOut.Total)} </TotalText>

                <SuccessButton onPress={() => success()}>
                    <SuccessText>Finalizar seu pedido</SuccessText>
                </SuccessButton>

                <DangerButton onPress={() => danger()}>
                    <DangerText>Cancelar seu pedido</DangerText>
                </DangerButton>

            </Scroller>
        </Container>
    )
} 