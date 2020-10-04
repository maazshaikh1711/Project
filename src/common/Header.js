import 'react-native-gesture-handler';
import * as React from 'react';
import { Appbar, Button } from 'react-native-paper';
import { Platform, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export const Header = ({ navigation }) => {
    return (
        // <View style={{ height: '7%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0052cc' }}>
        //     <Text style={{ fontSize: 25, fontWeight: "bold" }}>My App</Text>
        // </View>
        <Appbar.Header>
            {/* <Ionicons name="map" size={50} color="red" onPress={() => navigation.openDrawer()} /> */}

            <Appbar.Content title="MyApp" style={{ alignItems: "center" }} />


        </Appbar.Header >

    );
}