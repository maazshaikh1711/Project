import React from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    YellowBox
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import ActionButton from 'react-native-action-button';
YellowBox.ignoreWarnings(['Animated: `useNativeDriver` was not specified.']);
// Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`
const myData = {
    "lat": 19.215,
    "lng": 77.320,
    "dBm": -70,
    "connectionType": "LTE"
}

const radius = 5;
const icon_size = 40;
const { height, width } = Dimensions.get('window');

const towerData = [
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

const hospitalData = [
    {
        "lat": 19.240,
        "lng": 77.335,
        "dBm": -70,
        "connectionType": "LTE"
    },
    {
        "lat": 19.205,
        "lng": 77.332,
        "dBm": -80,
        "connectionType": "LTE"
    },
    {
        "lat": 19.233,
        "lng": 77.310,
        "dBm": -75,
        "connectionType": "LTE"
    },
    {
        "lat": 19.222,
        "lng": 77.340,
        "dBm": -73,
        "connectionType": "LTE"
    },
    {
        "lat": 19.211,
        "lng": 77.320,
        "dBm": -70,
        "connectionType": "LTE"
    },
    {
        "lat": 19.227,
        "lng": 77.310,
        "dBm": -70,
        "connectionType": "LTE"
    },
    {
        "lat": 19.212,
        "lng": 77.305,
        "dBm": -70,
        "connectionType": "LTE"
    },
    {
        "lat": 19.208,
        "lng": 77.309,
        "dBm": -70,
        "connectionType": "LTE"
    },
];

const atmData = [
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

pinName = towerData;

export const HomeScreen = ({ navigation }) => {
    let i = 0;

    // const [pinName, setPinName] = React.useState(towerData);
    const [pinColors, setPinColor] = React.useState('red');

    return (
        <>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: "100%", borderWidth: 0.5, borderBottomWidth: 1 }}>
                <Ionicons name="md-menu" size={icon_size} color="#rgb(98, 20, 220)"
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
                        pinName.map((info) => {

                            if (info.lat !== myData.lat && info.lng !== myData.lng) {

                                if (((info.lat >= myData.lat - radius) && (info.lat <= myData.lat + radius)) &&
                                    ((info.lng >= myData.lng - radius) && (info.lng <= myData.lng + radius))) {
                                    i = i + 1;
                                    return <Marker
                                        key={i}
                                        // pinColor={this.getColor(info)}
                                        pinColor={pinColors}
                                        coordinate={{
                                            latitude: info.lat,
                                            longitude: info.lng,
                                        }}
                                        title={String(info.dBm) + " dBm, " + info.connectionType}
                                        description={'Your signal quality at this position'}
                                        onPress={e => console.log(e.nativeEvent)}

                                    />;
                                }
                            }
                        })
                    }
                    <Marker

                        pinColor="#rgb(51, 0, 128)"
                        coordinate={{
                            latitude: myData.lat,
                            longitude: myData.lng,
                        }}
                        description={String(myData.dBm) + " dBm, " + myData.connectionType}
                        title={'You are here'}
                        onPress={e => console.log(e.nativeEvent)}

                    />

                </MapView>
                <ActionButton buttonColor="#b659b6">
                    <ActionButton.Item buttonColor='#3498db' title="ATM" onPress={() => {
                        // setPinName(atmData);
                        setPinColor('#3498db');
                        pinName = atmData;
                    }}
                    >
                        <Ionicons name="card" style={{
                            fontSize: 20,
                            height: 22,
                            color: 'white',
                        }}
                        />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Hospital" onPress={() => {
                        // setPinName(hospitalData);
                        setPinColor('#1abc9c');
                        pinName = hospitalData;
                    }}
                    >
                        <Ionicons name="medkit" style={{
                            fontSize: 20,
                            height: 22,
                            color: 'white',
                        }}
                        />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='red' title="Mobile Towers" onPress={() => {
                        // setPinName(towerData);
                        setPinColor('red');
                        pinName = towerData
                    }}
                    >
                        <Ionicons name="cellular" style={{
                            fontSize: 20,
                            height: 22,
                            color: 'white',
                        }}
                        />
                    </ActionButton.Item>
                </ActionButton >
            </View >
        </>
    );
}
// Mapping of Telecom infrastructure in GIS application.
// At present GIS based DBT mobile app has feature to search ATM, Bank Branches, Bank Mitras and places. 
// If this DBT app include the details of Telecom Infrastructure (Mobile Towers Wi-Fi Hotspots/APs, Telephone exchanges etc.) 
// then it would be more useful for Public Government authorities 
// can also use this information to facilitate Eservices and to provide coverage in Telecom uncovered areas.