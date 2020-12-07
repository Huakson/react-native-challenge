import React, { useState, useContext } from 'react';
import { Image } from 'react-native';
import {
    Area,
    ProductImage,
    InfoArea,
    ProductName,
    ProductPrice,
    ProductScore,
    ProductQTD
} from './styles';
import { getImage } from './imageImport';
import { formatMoney } from '../../utils';

export default ({ data }) => {

    return (
        <Area>
            <ProductImage source={getImage(data.image)} />
            <InfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>Preço: {formatMoney(data.price * data.qtd)}</ProductPrice>
                <ProductScore>Popularidade: {data.score}</ProductScore>
                <ProductQTD>Quantidade: {data.qtd}</ProductQTD>
            </InfoArea>
        </Area>
    );
}