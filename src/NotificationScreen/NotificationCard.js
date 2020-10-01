import React from 'react';

import { Button, Banner, Card, Title, Paragraph } from 'react-native-paper';

export const NotificationCard = (props) => {
    return (
        <Card style={{ marginBottom: 10 }}>
            <Card.Content>
                <Title>{props.title}</Title>
                <Paragraph>{props.content}</Paragraph>
            </Card.Content>
            <Card.Actions style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
    );
}