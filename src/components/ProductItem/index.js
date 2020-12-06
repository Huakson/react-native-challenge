import React, { useState, useContext } from 'react';
import {
    Area,
    ProductImage,
    InfoArea,
    ProductName,
    AddToCartButton,
    CartText,
    ProductPrice,
    ProductScore,
    CartArea
} from './styles';
import { getImage } from './imageImport';
import { formatMoney } from '../../utils';

import CartIcon from '../../assets/cartIcon.svg';
import AddedIcon from '../../assets/accept.svg';

import { UserContext } from '../../contexts/UserContext';

export default ({ data }) => {

    
    const { state: userState, dispatch: userDispatch} = useContext(UserContext);

    const addedToCart = () => {
        return userState.cart.some(item => item.id === data.id);
    }

    const handleProduct = () => {
        data.qtd = 1;
        if (!addedToCart()) {
            userDispatch({
                type: 'addProduct',
                payload: {
                    produto: data
                }
            });

        }

    }

    return (
        <Area>
            <ProductImage source={getImage(data.image)} />
            <InfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>Preço: {formatMoney(data.price)}</ProductPrice>
                <ProductScore>Popularidade: {data.score}</ProductScore>

                <AddToCartButton onPress={() => handleProduct()}>

                    {addedToCart() ?
                        <CartArea>
                            <CartText>
                                <AddedIcon
                                    width="15"
                                    height="15"
                                    fill="#5cb85c"
                                />
                            Adicionado
                            </CartText>

                        </CartArea>
                        :
                        <CartArea>
                            <CartText>
                                <CartIcon
                                    width="24"
                                    height="24"
                                    fill="#5cb85c"
                                />
                            Adicionar
                          </CartText>

                        </CartArea>

                    }


                </AddToCartButton>
            </InfoArea>
        </Area>
    );
}