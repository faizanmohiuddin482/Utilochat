import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { Text, View } from "../Themed";

export default function InputField() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    //   send message
    console.warn("sending", message);
  };
  const onPlusClicked = () => {
    //   plus clicked
    console.log("plus clicked");
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
      style={styles.root}
    >
      <View style={styles.inputContainer}>
        <Pressable>
          <Feather name="smile" size={24} color="black" style={styles.icon} />
        </Pressable>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          placeholderTextColor="#000"
          value={message}
          onChangeText={setMessage}
        />
        <Pressable>
          <Feather name="camera" size={24} color="black" style={styles.icon} />
        </Pressable>
        <Pressable>
          <SimpleLineIcons
            name="microphone"
            size={24}
            color="black"
            style={styles.icon}
          />
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        {message ? (
          <Pressable onPress={onPress}>
            <Feather name="send" size={20} color="white" />
          </Pressable>
        ) : (
          <Pressable onPress={onPress}>
            <Feather name="plus" size={24} color="white" style={styles.icon} />
          </Pressable>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: 10,
    // marginBottom:10,
  },
  inputContainer: {
    backgroundColor: "lightgrey",
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "lightgrey",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
  },
  input: {
    flex: 1,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#3777f0",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 35,
  },
});
