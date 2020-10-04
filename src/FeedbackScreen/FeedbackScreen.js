import React from 'react';
import {
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    Keyboard,
    Alert,
    ScrollView,
} from 'react-native';

import { Button, Divider, TextInput } from 'react-native-paper';

export const FeedbackScreen = ({ navigation }) => {
    const [text, setText] = React.useState('');

    return (
        <>
            <View>
                <View style={{ height: '60%', alignItems: 'center', padding: 15 }}>
                    <Text style={{ fontSize: 30, fontStyle: 'italic', borderBottomWidth: 1 }}>Please give your valuable Feedback !</Text>
                    <View style={{ width: '100%', justifyContent: "center", paddingTop: 20 }}>
                        <TextInput
                            mode="outlined"
                            label="Your Feedback"
                            value={text} onChangeText={text => setText(text)}
                            selectionColor="#D3D3D3"
                        />
                    </View>
                    <View style={{ paddingTop: 20 }}>

                        <Button
                            mode="contained"
                            // color="#1a75ff"
                            onPress={() => {

                                setText('');
                                Keyboard.dismiss();
                                {
                                    text !== "" && Alert.alert("Thank You for your feedback !");
                                }

                            }


                            }
                        >
                            Submit
                        </Button>

                    </View>
                </View>


                <View style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 30, fontStyle: 'italic', borderBottomWidth: 1 }}>Rate us now :)</Text>
                    <Image source={require('../assets/stars.png')} ></Image>
                </View>
            </View>
        </>
    );
}
