import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';


import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export const HomeScreen = (navigation) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', alignItems: 'flex-end' }}>
            <MapView style={{ height: '100%', width: '95%' }}

                provider={PROVIDER_GOOGLE}

                region={{
                    latitude: 19.23,
                    longitude: 77.33,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            ></MapView>
            <View style={{ height: '100%', width: '10%', backgroundColor: "blue" }}></View>
        </View >
    );
}