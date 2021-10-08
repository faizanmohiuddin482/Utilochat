import * as React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Message from '../components/Message';
import ChatData from '../assets/dummy-data/Chats';
import InputField from '../components/InputField';

export default function ChatRoomScreen() {
    const data = ChatData.messages;
    return (
        <SafeAreaView style={styles.page}>
            <FlatList data={data} showsVerticalScrollIndicator={false} renderItem={(item) => <Message message={item.item.content} isMe={item.item.user.id == 'u1' ? true : false} key={item.item.id} />} />
            {/* {data.map((item) => <Message message={item.item.content} isMe={item.item.user.id == 'u1' ? true : false} key={item.item.id} />)} */}
            <InputField />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    }
})