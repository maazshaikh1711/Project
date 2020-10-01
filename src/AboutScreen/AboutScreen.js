import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

import { Card, Title, Paragraph } from 'react-native-paper'

import { Points } from './AboutPoints';

export const AboutScreen = (navigation) => {
    return (
        // <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', marginVertical: 10, marginHorizontal: 10 }}>
        //     <Text style={{ fontSize: 30, fontWeight: 'bold' }}>About App:</Text>
        //     <Card width="100%" style={{ flex: 1, backgroundColor: '#D3D3D3' }}>
        //         <Text style={{ fontSize: 15 }}>Mapping of Telecom infrastructure in GIS</Text>
        //     </Card>
        // </View>
        <>
            <View style={{ justifyContent: "center", alignItems: 'center' }}>
                <Card style={{ width: "90%", marginTop: 15 }}>
                    <Card.Content>
                        <Title style={{ fontSize: 30, fontWeight: "bold" }}>About App</Title>
                        <Points description="- This App shows you nearby located towers." />
                        <Points description="- This App is built by Amaan Shaikh and Rohan Rokade." />
                        <Points description="- This App is built for our 7th Semester Project." />
                        <Points description="- All other information can be written below here." />
                    </Card.Content>
                </Card>
            </View >
            <View style={{ paddingTop: 15, alignItems: 'center' }}>
                <Text >Copyright © 2020 by Amaan Shaikh. All rights reserved.</Text>
            </View>
        </>
    );
}
