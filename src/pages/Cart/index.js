import React, { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';


import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    ProductsArea,
    EmptyText,
    CheckoutButton,
    CheckoutText
} from './styles';

import { UserContext } from '../../contexts/UserContext';
import ProductCart from '../../components/ProductCart';

export default () => {

    const navigation = useNavigation();

    const { state: userState } = useContext(UserContext);
    const products = [];

    let cartEmpty = userState.cart.length === 0 ? true : false;

    products.push(...userState.cart);

    return (
        <Container>
            <Scroller> 

                <HeaderArea>
                    <HeaderTitle>Seu carrinho</HeaderTitle>
                </HeaderArea>


                <ProductsArea >
                    {products.map((product, key) => (
                        <ProductCart key={key} data={product} />
                    ))}
                </ProductsArea>


                {
                    cartEmpty ? (
                        <EmptyText>Seu carrinho está vazio :( </EmptyText>
                    )
                        : <CheckoutButton onPress={() => navigation.navigate('CheckOut')}>
                            <CheckoutText>Finalizar pedido (check-out)</CheckoutText>
                        </CheckoutButton>
                }



            </Scroller>
        </Container>
    )
} 