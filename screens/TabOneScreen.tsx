import * as React from 'react';
import { StyleSheet, Image, FlatList } from 'react-native';
import { Text, View } from '../components/Themed';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatRoomData from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen() {

  return (
    <View style={styles.page}>
      <FlatList data={ChatRoomData} renderItem={({ item }) => <ChatRoomItem chatRoom={item} />} showsVerticalScrollIndicator={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  }
})
