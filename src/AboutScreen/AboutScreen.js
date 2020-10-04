import React from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper'

import { Points } from './AboutPoints';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const AboutScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ justifyContent: "center", alignItems: 'center' }}>
                <Card style={{ width: "90%", marginTop: 15 }}>
                    <Card.Content>
                        <Title style={{ fontSize: 30, color: "#5F00E3" }}>About App</Title>
                        <Points description="- This App shows you nearby located towers." />
                        <Points description="- This App is built by Amaan Shaikh and Rohan Rokade." />
                        <Points description="- This App is built for our 7th Semester Project." />
                        <Points description="- All other information can be written below here." />
                    </Card.Content>
                </Card>
                <Ionicons name="map" size={50} color="red" onPress={() => navigation.openDrawer()} />
            </View >
            <View style={{ paddingTop: 15, alignItems: 'center' }}>
                <Text >Copyright © 2020 by Amaan Shaikh. All rights reserved.</Text>
            </View>
        </ScrollView>
    );
}
