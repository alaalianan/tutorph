import React, { Component } from "react";
import {View, StyleSheet, Image, Text,TouchableHighlight} from "react-native"

const Notification = props => {
    console.log(JSON.stringify(props));
    return (
      <View style ={styles.notification}>
          <Image style = {styles.icon} source={require('../../assets/pokeball.png')}/> 
          <Text style={styles.notif}>{props.message}</Text> 
          <Text style={styles.date}>{props.dateTime}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    notification:{
      width:"100%",
      borderWidth:1,
      borderColor: "black",
      flexDirection:'row',
      marginTop:15,
      padding:10,
    },
    notif:{
      fontSize:13,
      position:'absolute',
      top:"50%",
      left: 60
    },
    date:{
      fontSize: 12,
      textAlign:'right',
      position:'absolute',
      left:275,
      top:"50%"
    },
    icon:{
      height:40,
      width:40,
      flexWrap:'wrap'
    }
  })
  export default Notification;