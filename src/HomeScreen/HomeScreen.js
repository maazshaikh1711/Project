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
import PushNotification from 'react-native-push-notification';
YellowBox.ignoreWarnings(['Animated: `useNativeDriver` was not specified.']);
YellowBox.ignoreWarnings(['componentWillReceiveProps has been renamed, and is']);
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
        "pin": "towerData",
        "lat": 19.230,
        "lng": 77.335,
        "dBm": -60,
        "connectionType": "GSM"
    },
    {
        "pin": "towerData",
        "lat": 19.200,
        "lng": 77.332,
        "dBm": -80,
        "connectionType": "LTE"
    },
    {
        "pin": "towerData",
        "lat": 19.231,
        "lng": 77.310,
        "dBm": -75,
        "connectionType": "LTE"
    },
    {
        "pin": "towerData",
        "lat": 19.226,
        "lng": 77.340,
        "dBm": -73,
        "connectionType": "GSM"
    },
    {
        "pin": "towerData",
        "lat": 19.215,
        "lng": 77.320,
        "dBm": -70,
        "connectionType": "LTE"
    },
    {
        "pin": "towerData",
        "lat": 19.220,
        "lng": 77.310,
        "dBm": -77,
        "connectionType": "GSM"
    },
    {
        "pin": "towerData",
        "lat": 19.210,
        "lng": 77.305,
        "dBm": -100,
        "connectionType": "LTE"
    },
    {
        "pin": "towerData",
        "lat": 19.205,
        "lng": 77.309,
        "dBm": -80,
        "connectionType": "GSM"
    },
];

const hospitalData = [
    {
        "pin": "hospitalData",
        "lat": 19.240,
        "lng": 77.335,
        "host": "Global Hospital",
        "contact": 1234567891,
        "open": "10:00",
        "close": "21:00"
    },
    {
        "pin": "hospitalData",
        "lat": 19.205,
        "lng": 77.332,
        "host": "Lotus Hospital",
        "contact": 1234567891,
        "open": "10:00",
        "close": "21:00"
    },
    {
        "pin": "hospitalData",
        "lat": 19.233,
        "lng": 77.310,
        "host": "Gilda Hospital",
        "contact": 1234567891,
        "open": "11:00",
        "close": "20:00"
    },
    {
        "pin": "hospitalData",
        "lat": 19.222,
        "lng": 77.340,
        "host": "Bhandari Hospital",
        "contact": 1234567891,
        "open": "09:00",
        "close": "22:00"
    },
    {
        "pin": "hospitalData",
        "lat": 19.211,
        "lng": 77.320,
        "host": "Horizon Hospital",
        "contact": 1234567891,
        "open": "10:00",
        "close": "21:00"
    },
    {
        "pin": "hospitalData",
        "lat": 19.227,
        "lng": 77.310,
        "host": "Life Care Hospital",
        "contact": 1234567891,
        "open": "11:00",
        "close": "22:30"
    },
    {
        "pin": "hospitalData",
        "lat": 19.212,
        "lng": 77.305,
        "host": "Ashwini Hospital",
        "contact": 1234567891,
        "open": "11:00",
        "close": "20:00"
    },
    {
        "pin": "hospitalData",
        "lat": 19.208,
        "lng": 77.309,
        "host": "Continental Hospital",
        "contact": 1234567891,
        "open": "10:00",
        "close": "20:00"
    },
];

const wifiData = [
    {
        "pin": "wifiData",
        "lat": 19.250,
        "lng": 77.375,
        "nsp": "Jio",
        "ncu": 6
    },
    {
        "pin": "wifiData",
        "lat": 19.220,
        "lng": 77.342,
        "nsp": "Airtel",
        "ncu": 1
    },
    {
        "pin": "wifiData",
        "lat": 19.271,
        "lng": 77.320,
        "nsp": "Airtel",
        "ncu": 4
    },
    {
        "pin": "wifiData",
        "lat": 19.216,
        "lng": 77.330,
        "nsp": "BSNL",
        "ncu": 3
    },
    {
        "pin": "wifiData",
        "lat": 19.225,
        "lng": 77.340,
        "nsp": "Airtel",
        "ncu": 4
    },
    {
        "pin": "wifiData",
        "lat": 19.230,
        "lng": 77.330,
        "nsp": "Airtel",
        "ncu": 3
    },
    {
        "pin": "wifiData",
        "lat": 19.240,
        "lng": 77.325,
        "nsp": "Vi",
        "ncu": 2
    },
    {
        "pin": "wifiData",
        "lat": 19.215,
        "lng": 77.319,
        "nsp": "Jio",
        "ncu": 5
    },
];

pinName = towerData;

export const HomeScreen = ({ navigation }) => {
    let i = 0;
    let title = ""
    let description = ""


    // const [pinName, setPinName] = React.useState(towerData);
    const [pinColors, setPinColor] = React.useState('#3498db');
    //const [title, setTitle] = React.useState("");
    //const [description, setDescription] = React.useState("");

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
                        key: 'AIzaSyBS4v8qJyqHYfMCXd4fWJgRJvfQxaE9Y1M',
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

                            if (info.pin === "towerData") {
                                title = String(info.dBm) + " dBm, " + info.connectionType
                                description = ""
                            }
                            else if (info.pin === "hospitalData") {
                                title = info.host
                                description = "Open: " + info.open + ", Close: " + info.close
                            }
                            else {
                                title = "Network Service Provider: " + info.nsp
                                description = "Connected users: " + info.ncu
                            }

                            if ((info.lat >= myData.lat - radius) && (info.lat <= myData.lat + radius) &&
                                (info.lng >= myData.lng - radius) && (info.lng <= myData.lng + radius)) {
                                i = i + 1;

                                return <Marker
                                    key={i}
                                    // pinColor={this.getColor(info)}
                                    pinColor={pinColors}
                                    coordinate={{
                                        latitude: info.lat,
                                        longitude: info.lng,
                                    }}
                                    title={title}
                                    description={description}
                                    onPress={e => console.log(e.nativeEvent)}

                                />;
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

                <ActionButton buttonColor="#b659b6" position="left">
                    {/*
                    <ActionButton.Item buttonColor='blue' title="Help" onPress={() => {
                        PushNotification.localNotification({
                            id: 0,
                            message: 'We have detected low network in your phone',
                            soundName: 'siren.mp3',
                        });
                    }}>
                        <Ionicons name="alert" style={{
                            fontSize: 20,
                            height: 22,
                            color: 'white',
                        }}
                        />
                    </ActionButton.Item>
                    */}
                    <ActionButton.Item buttonColor='#3498db' title="WiFi" onPress={() => {
                        // setPinName(wifiData);
                        setPinColor('#3498db');
                        pinName = wifiData;
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