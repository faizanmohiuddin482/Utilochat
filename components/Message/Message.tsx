import React from 'react';
import { Text, View } from '../Themed';
import styles from './styles';

const blue = '#3777f0';
const grey = 'lightgrey'
const white = 'white';
const black = 'black';

export default function Message({ isMe, message }) {
    return (
        <View>
            <View style={[styles.positionMessage, { alignItems: isMe ? 'flex-end' : 'flex-start' }]}>
                <View style={[styles.messageContainer, { backgroundColor: isMe ? blue : grey }]}>
                    <Text style={[styles.message, { color: isMe ? white : black }]}>
                        {message}
                    </Text>
                </View>
            </View>
        </View>
    );
}