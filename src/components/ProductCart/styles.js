import styled from 'styled-components/native';

export const Area = styled.View`
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

export const ProductImage = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`;

export const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;

export const ProductName = styled.Text`
    width: 160px;
    font-size: 15px;
    font-weight: bold;
`;

export const RemoveProductButton = styled.TouchableOpacity`
    justify-content: center;
    margin-top: 10px;
    width: 150px;
    height: 26px;
    border: 1px solid #d9534f;
    border-radius: 10px;
    
`;

export const CartText = styled.Text`
    justify-content: center;
    font-size: 10px;
    color: #000;
`;


export const CartArea = styled.View`
    justify-content: space-between;
`;

export const ProductPrice = styled.Text`
    margin-top: 5px;
    font-size: 12px;
`;


export const ProductScore = styled.Text`
    font-size: 12px;
`;


