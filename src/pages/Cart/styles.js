import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #008C9E;

`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;

export const EmptyText = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
    margin-top: 100px;
`;

export const ProductsArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const CheckoutButton = styled.TouchableOpacity`
    margin-top: 10px;
    width: 100%;
    height: 50px;
    background-color: #4EADBE;
    border: 1px solid #4EADBE;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const CheckoutText = styled.Text`
    text-align: center;
    width: 250px;
    font-size: 15px;
    font-weight: bold;
    color: #FFF;
`;
