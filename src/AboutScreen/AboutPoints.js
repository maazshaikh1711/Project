import React from 'react';
import { Paragraph } from 'react-native-paper';

export const Points = (props) => {
    return (
        <Paragraph style={{ fontSize: 20, marginTop: 25 }}>
            * {props.description}
        </Paragraph>
    );
}