import React ,{ Component } from "react";
import PrintNotifications  from "../components/view/Notifs"
import {View,Text,TouchableOpacity,Image,Platform,StyleSheet,TouchableHighlight} from "react-native";

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    display:"flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  feed: {
    width:"100%",
    borderWidth: 1,
    borderColor: "black",
    borderBottomWidth: 0,
    marginLeft:0,
    marginRight:0,
    marginTop:10,
    marginBottom:10
  },
  header: {
    marginTop: 40,
    alignSelf:"center",
  },
  icon: {
    height: 20,
    width: 20
  }
});



class NotificationScreen extends Component{
  render(){
    const notifs = [
      {
        message: "Luke, I am your father",
        dateTime: "Nov. 28, 2020"
      },
      {
        message: "You got a notif from yo mama",
        dateTime: "Nov. 28, 2020"
      },
      {
        message: "Your aunt got COVID",
        dateTime: "Nov. 28, 2020"
      },
      {
        message: "Jesus took the wheel!",
        dateTime: "Nov. 28, 2020"
      },
      {
        message: "4am coffee session scheduled",
        dateTime: "Nov. 28, 2020"
      },
      {
        message: "You were given a 5 star rating!",
        dateTime: "Nov. 28, 2020"
      },
    ];

    return (
    <View>
      <View style={styles.header}>
        <Text style={{alignSelf:'center',fontSize:18,fontWeight:'bold'}}>
          Notifications
        </Text>
      </View>
    <View style={styles.feed}>
      {notifs.map((notif,i)=> {
        return <TouchableHighlight onPress={() => this.props.navigation.navigate("LoginMen")}>
          <PrintNotifications key = {notif} {...notif}/>
          </TouchableHighlight>
      })}
    </View></View>)
  };
}
export default NotificationScreen;