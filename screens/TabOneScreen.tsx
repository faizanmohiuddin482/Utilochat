import * as React from 'react';
import { StyleSheet, Image, } from 'react-native';
import { Text, View } from '../components/Themed';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatRoomData from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen() {

  const data = ChatRoomData;

  return (
    <View>
      {data.map(item => <ChatRoomItem chatRoom={item} />)}

    </View>
  );
}

const styles = StyleSheet.create({

})
