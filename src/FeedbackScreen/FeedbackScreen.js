import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

import { Button, Divider, TextInput } from 'react-native-paper';

export const FeedbackScreen = (navigation) => {
    const [text, setText] = React.useState('');

    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', padding: 15 }}>
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
                        onPress={() => {
                            console.log(text);
                            setText('')
                        }
                        }
                    >
                        Submit
                </Button>
                </View>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: "red" }}>
                <Text style={{ fontSize: 30, fontStyle: 'italic', borderBottomWidth: 1 }}>Rate us now :)</Text>
                <Image source={require('../assets/stars.png')} ></Image>
            </View>
        </>

    );
}
