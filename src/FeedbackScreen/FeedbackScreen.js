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
import { Rating } from 'react-native-ratings';

export const FeedbackScreen = ({ navigation }) => {
    const [text, setText] = React.useState('');
    const [myrating, setmyrating] = React.useState(2.5);

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
                    <Rating
                        type="heart"
                        minValue={0}
                        ratingCount={5}
                        imageSize={50}
                        startingValue={myrating}
                        ratingTextColor={'#6b41a4'}
                        ratingColor={'#6b41a4'}
                        defaultRating={2}
                        fractions={1}
                        // showRating
                        style={{ alignSelf: 'center', paddingTop: 20 }}
                    />
                    <View style={{ paddingTop: 30 }}>
                        <Button mode="contained" onPress={() => { setmyrating(2.5); Alert.alert("Thank You for Rating us !"); }}>Submit</Button>
                        {/* <Image source={require('../assets/stars.png')} ></Image> */}
                    </View>
                </View>
            </View>
        </>
    );
}
