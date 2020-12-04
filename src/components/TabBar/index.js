import React from 'react';
import { 
    TabArea, 
    TabItem,
    TabItemCenter
} from './styles';

import HomeIcon from '../../assets/home.svg';
import CartIcon from '../../assets/cart.svg';
import ProfileIcon from '../../assets/person.svg';

export default ({ state, navigation }) => {

    const goTo = (pageName) => {
        navigation.navigate(pageName);
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <HomeIcon
                    style={{ opacity: state.index === 0 ? 1 : 0.5 }}
                    width="24"
                    height="24"
                    fill="#FFFFFF"
                />
            </TabItem>
            <TabItemCenter onPress={() => goTo('Cart')}>
                <CartIcon
                    width="32"
                    height="32"
                    fill="#4EADBE"
                />
            </TabItemCenter>
            <TabItem onPress={() => goTo('Profile')}>
                <ProfileIcon
                    style={{ opacity: state.index === 2 ? 1 : 0.5 }}
                    width="24"
                    height="24"
                    fill="#FFFFFF"
                />
            </TabItem>
        </TabArea>
    );
}