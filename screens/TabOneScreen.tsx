import * as React from 'react';
import { View, StyleSheet,Image, Text } from 'react-native';


export default function TabOneScreen() {
  return (
  <View style={styles.container}>
    <Image source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}} style={styles.image} />
    <View style={styles.badgeContainer}><Text style={styles.badgeText}>4</Text></View>
    <View style={styles.rightContainer}>
    <View style={styles.row}>
      <Text style={styles.name}>Faizan</Text>
      <Text style={styles.text}>11:25pm</Text>
    </View>
    <Text numberOfLines={1} style={styles.text}>Content</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
 container:{
  flexDirection:'row',
  padding:10
 },
 image:{
   width: 50,
   height: 50,
   borderRadius:50,
   marginRight:10
 },
 badgeContainer:{
  backgroundColor:'#3872E9',
  width:20,
  height:20,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:50,
  borderWidth:1,
  borderColor:'white',
  position:'absolute',
  left:45,
  top:10
 },
 badgeText:{
  color:'white',
  fontSize:10
 },
 row:{
   flexDirection:'row',
   justifyContent:'space-between',
 },
 rightContainer: {
  flex:1,
  justifyContent:'center'
 },
 name:{
   fontWeight:'bold',
   marginBottom:10
 },
 text:{
   color:'grey',
   fontSize:15
 }
});
