import React, { useState, useContext } from 'react';
import { Image } from 'react-native';
import {
    Area,
    ProductImage,
    InfoArea,
    ProductName,
    RemoveProductButton,
    CartText,
    ProductPrice,
    ProductScore,
    CartArea
} from './styles';
import { getImage } from './imageImport';
import { formatMoney } from '../../utils';

import CartIcon from '../../assets/remove.svg';
import Counter from "react-native-counters";

import { UserContext } from '../../contexts/UserContext';


export default ({ data }) => {

    const { dispatch: userDispatch } = useContext(UserContext);
    const [qtd, setQtd] = useState(1);

    const removeProduct = () => {
        userDispatch({
            type: 'removeProduct',
            payload: {
                produto: data
            }
        });
    }

    const updateQtd = async (number) => {
        setQtd(number);

        if(number === 0) removeProduct();

        userDispatch({
            type: 'updateQtd',
            payload: {
                produto: data,
                qtd: number
            }
        });

    };

    return (
        <Area>
            <ProductImage source={getImage(data.image)} />
            <InfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>Preço: {formatMoney(data.price)}</ProductPrice>
                <ProductScore>Popularidade: {data.score}</ProductScore>

                <Counter start={qtd} onChange={(number, type) => updateQtd(number)} />

                <RemoveProductButton onPress={() => removeProduct()}>

                    <CartText >
                        <CartIcon
                            width="24"
                            height="24"
                            fill="#d9534f"
                        />
                        Remover produto
                    </CartText>

                </RemoveProductButton>
            </InfoArea>
        </Area>
    );
}