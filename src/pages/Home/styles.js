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
export const OrderButton = styled.TouchableOpacity`
    width: 26px;
    height? 26px;
`;

export const OrderModal = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Picker = styled.Picker`
    width: 300px;
`;

export const TextArea = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TextModal = styled.Text`
    font-size: 17px;
    margin-bottom: 20px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;
export const ProductsArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;
