import * as React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet } from 'react-native';

export default function ChatRoomScreen() {
    const sender = false;

    return (
        <View>
            <View style={[styles.positionMessage, { alignItems: sender ? 'flex-end' : 'flex-start' }]}>
                <View style={styles.messageContainer}>
                    <Text style={styles.message}>
                        Hello message
                    </Text>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    positionMessage: {
        margin: 15
    },
    messageContainer: {
        backgroundColor: 'red',
        borderRadius: 50,
        alignItems: 'flex-end'
    },
    message: {
        padding: 10,
        margin: 5
    }
})