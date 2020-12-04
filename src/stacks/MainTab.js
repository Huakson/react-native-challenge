import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../components/TabBar';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><TabBar {...props}/>}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
);

