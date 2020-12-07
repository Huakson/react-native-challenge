import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #008C9E;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const HeaderTitle = styled.Text`
    text-align: center;
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;

export const ProductsArea = styled.View`
    margin-top: 30px;
`;

export const ProductsTitle = styled.Text`
    margin-top: 20px;
    margin-left: 15px;
    width: 250px;
    font-size: 17px;
    color: #FFF;
`;

export const FreightText = styled.Text`
    margin-top: 20px;
    margin-left: 15px;
    width: 250px;
    font-size: 17px;
    color: #FFF;
`;

export const SubTotalText = styled.Text`
    margin-top: 20px;
    margin-left: 15px;
    width: 250px;
    font-size: 17px;
    color: #FFF;
`;

export const TotalText = styled.Text`
    margin-top: 20px;
    margin-left: 15px;
    width: 250px;
    font-size: 17px;
    color: #FFF;
`;

export const SuccessButton = styled.TouchableOpacity`
    margin-top: 30px;
    margin-bottom: 30px;
    width: 100%;
    height: 50px;
    background-color: #5cb85c;
    border-radius: 10px;
    align-items: center; 
    justify-content: center;
`;

export const SuccessText = styled.Text`
    text-align: center;
    width: 250px;
    font-size: 15px;
    font-weight: bold;
    color: #FFF;
`;


export const DangerButton = styled.TouchableOpacity`
    margin-bottom: 30px;
    width: 100%;
    height: 50px;
    background-color: #d9534f;
    border-radius: 10px;
    align-items: center; 
    justify-content: center;
`;

export const DangerText = styled.Text`
    text-align: center;
    width: 250px;
    font-size: 15px;
    font-weight: bold;
    color: #FFF;
`;

