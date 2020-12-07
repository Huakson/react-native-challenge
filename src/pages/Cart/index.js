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

    const { state: userState, dispatch: userDispatch } = useContext(UserContext);
    const products = [];

    let cartEmpty = userState.cart.length === 0 ? true : false;

    products.push(...userState.cart);

    const calcCheckOut = () => {
        let freight = 0;
        let subTotal = 0;
        let total = 0;

        products.map((item, index) => {
            freight += 10 * item.qtd;
            subTotal += item.price * item.qtd;
        });

        if(subTotal > 250) freight = 0;

        total = subTotal + freight;



        let checkout = {
            freight: freight,
            subTotal: subTotal,
            total: total
        }

        userDispatch({
            type: 'setCheckOut',
            payload: {
                checkout: checkout
            }
        });


        navigation.navigate('CheckOut');

    }

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
                        <EmptyText>Seu carrinho está vazio, adicione produtos :)</EmptyText>

                    )
                        : <CheckoutButton onPress={() => calcCheckOut()}>
                            <CheckoutText>Finalizar pedido (check-out)</CheckoutText>
                        </CheckoutButton>
                }



            </Scroller>
        </Container>
    )
} 