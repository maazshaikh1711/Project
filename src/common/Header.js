import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Appbar, Button } from 'react-native-paper';
import { Platform, View, Text, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Orientation from 'react-native-orientation';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export const Header = ({ navigation }) => {

    // const [Orientation, setOrientation] = useState([]);
    // useEffect(() => {

    //     (Orientation == ['Landscape'] && Dimensions.get('window').width < Dimensions.get('window').height) ?
    //         setOrientation['Portrait'] :
    //         // (Orientation == ['Portrait'] && Dimensions.get('window').width > Dimensions.get('window').height) {
    //         setOrientation(['Landscape']);
    //     // }
    //     // }
    //     console.log("Changed")
    // }, [Orientation]);
    const size = 40;
    return (
        // <>
        //     <View style={{ height: '7%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0052cc' }}>
        //         <Text style={{ fontSize: 40, fontFamily: "Billabong" }}>My App</Text>
        //     </View>
        // </>


        <Appbar.Header>
            <Ionicons name="md-menu" size={size} color="white"
            // onPress={() => //navigation.openDrawer()}
            />
            < Appbar.Content title="MyApp" style={{ alignItems: "center", marginLeft: -size }} />
        </Appbar.Header >

    );
}