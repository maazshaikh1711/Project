import 'react-native-gesture-handler';
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export const Header = () => {
    return (
        <Appbar.Header>
            {/* <Ionicons name="menu-outline" size={50} color="red" onPress={() => { }} /> */}
            <Appbar.Content title="MyApp" />
        </Appbar.Header>
    );
}