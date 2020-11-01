import React from 'react';
import {
    View,
    Text,
    Button,
    Dimensions
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const myData = {
    "lat": 19.215,
    "lng": 77.320,
    "dBm": -70,
    "connectionType": "LTE"
}

const radius = 5;
const icon_size = 40;
const { height, width } = Dimensions.get('window');

const data = [
    {
        "lat": 19.230,
        "lng": 77.335,
        "dBm": -70,
        "connectionType": "LTE"
    },
    {
        "lat": 19.200,
        "lng": 77.332,
        "dBm": -80,
        "connectionType": "LTE"
    },
    {
        "lat": 19.231,
        "lng": 77.310,
        "dBm": -75,
        "connectionType": "LTE"
    },
    {
        "lat": 19.226,
        "lng": 77.340,
        "dBm": -73,
        "connectionType": "LTE"
    },
    {
        "lat": 19.215,
        "lng": 77.320,
        "dBm": -70,
        "connectionType": "LTE"
    },
    {
        "lat": 19.220,
        "lng": 77.310,
        "dBm": -70,
        "connectionType": "LTE"
    },
    {
        "lat": 19.210,
        "lng": 77.305,
        "dBm": -70,
        "connectionType": "LTE"
    },
    {
        "lat": 19.205,
        "lng": 77.309,
        "dBm": -70,
        "connectionType": "LTE"
    },
];

export const HomeScreen = ({ navigation }) => {
    let i = 0;

    return (
        <>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: "100%", borderWidth: 0.5, borderBottomWidth: 1 }}>
                <Ionicons name="md-menu" size={icon_size} color="red"
                    onPress={() => navigation.openDrawer()}
                />
                {/* <TextInput
                    width={width * 0.98 - icon_size}
                    // mode="outlined"
                    label="Search Here"
                /> */}

                <GooglePlacesAutocomplete
                    placeholder="Search Here"
                    // onPress={props.onPress}
                    fetchDetails={true}
                    styles={{
                        textInputContainer: {
                            height: 40,
                            width: width - icon_size - (width * 0.05),
                            backgroundColor: 'rgba(255,255,255,1)',
                            borderTopWidth: 0.5,
                            borderWidth: 0.5,
                            borderBottomWidth: 0.5,
                            borderRadius: 0.5,
                            marginLeft: width * 0.01,
                        },
                        textInput: {
                            marginLeft: 0,
                            marginRight: 0,
                            padding: 0,
                            height: 30,
                            color: '#5d5d5d',
                            fontSize: 16,
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb',
                        },
                    }}
                    query={{
                        key: 'AIzaSyAv4zcxIBCH6EBNJc6e57yVYiZ5I6UiVRQ',
                        language: 'en',
                        types: 'establishment',
                    }}
                />


            </View>
            <View style={{ flex: 9, alignItems: 'center' }}>
                <MapView style={{ height: '100%', width: width }}

                    provider={PROVIDER_GOOGLE}

                    initialRegion={{
                        latitude: 19.23,
                        longitude: 77.33,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >


                    {
                        data.map((info) => {

                            if (info.lat !== myData.lat && info.lng !== myData.lng) {

                                if (((info.lat >= myData.lat - radius) && (info.lat <= myData.lat + radius)) &&
                                    ((info.lng >= myData.lng - radius) && (info.lng <= myData.lng + radius))) {
                                    i = i + 1;
                                    return <Marker
                                        key={i}
                                        // pinColor={this.getColor(info)}
                                        pinColor="#rgb(51, 0, 128)"
                                        coordinate={{
                                            latitude: info.lat,
                                            longitude: info.lng,
                                        }}
                                        title={String(info.dBm) + info.connectionType}
                                        description={'Your signal quality at this position'}
                                        onPress={e => console.log(e.nativeEvent)}

                                    />;
                                }
                            }
                        })
                    }
                    <Marker

                        pinColor="red"
                        coordinate={{
                            latitude: myData.lat,
                            longitude: myData.lng,
                        }}
                        description={String(myData.dBm) + myData.connectionType}
                        title={'You are here'}
                        onPress={e => console.log(e.nativeEvent)}

                    />

                </MapView>
            </View >
        </>
    );
}