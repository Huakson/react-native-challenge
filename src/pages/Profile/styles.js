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

export const ProfileArea = styled.View`
    margin-top: 30px;
`;

export const LogoutButton = styled.TouchableOpacity`
    width: 85%;
    height: 50px;
    background-color: #d9534f;
    justify-content: center;
    flex-direction: row;
    border-radius: 30px;
    align-items: center;
`;

export const LogoutText = styled.Text`
    text-align: center;
    width: 250px;
    font-size: 15px;
    font-weight: bold;
    color: #FFF;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const ProfileText = styled.Text`
    text-align: center;
    width: 250px;
    font-size: 18px;
    color: #FFF;
`;


export const ChangePasswordButton = styled.TouchableOpacity`
    width: 85%;
    height: 50px;
    background-color: #5cb85c;
    justify-content: center;
    flex-direction: row;
    border-radius: 30px;
    align-items: center;
`;

export const ChangePasswordText = styled.Text`
    text-align: center;
    width: 250px;
    font-size: 15px;
    font-weight: bold;
    color: #FFF;
`;

export const ButtonArea = styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
    justify-content: center;
`;