import * as React from "react";
import { Text, View } from "../Themed";
import { Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";
import styles from "./styles";

export default function ChatRoomItem({ chatRoom }) {
  // console.log(chatRoom,'chat');
  const user = chatRoom.users[1];
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("ChatRoom", {id:chatRoom.id});
  };
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{ uri: user.imageUri }} style={styles.image} />
      {chatRoom.newMessage != undefined && chatRoom.newMessage > 0 && (
        <View
          style={styles.badgeContainer}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        >
          <Text style={styles.badgeText}>{chatRoom.newMessage}</Text>
        </View>
      )}
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
}
