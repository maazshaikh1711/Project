import React from 'react';
import {
    View, ScrollView,
    Text, Image,
} from 'react-native';
import { Button, Banner, Card, Title, Paragraph } from 'react-native-paper';
import { NotificationCard } from './NotificationCard';

export const NotificationScreen = (navigation) => {

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 15 }}>
                <View style={{ height: '20%', width: '90%' }}>

                    <NotificationCard title="Title" content="Description" />
                    <NotificationCard title="Title" content="Description" />
                    <NotificationCard title="Title" content="Description" />
                    <NotificationCard title="Title" content="Description" />
                    <NotificationCard title="Title" content="Description" />
                    <NotificationCard title="Title" content="Description" />
                    <NotificationCard title="Title" content="Description" />

                </View>


                {/* <Button mode="contained" >Press Me</Button> */}
            </View >
        </ScrollView>
    );
}