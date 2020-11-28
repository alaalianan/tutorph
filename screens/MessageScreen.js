import React ,{ Component } from "react";
import PrintMessages  from "../components/view/Message"
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
  inbox: {
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



class MessageScreen extends Component{
  render(){
    const messages = [
      {
        toUser: "MattDu",
        fromUser: "Kappachino",
        message: "can u pull the lane plz",
        dateTime: "Nov. 28, 2020",
        dp: "https://yt3.ggpht.com/ytc/AAUvwng2_yj4qwaRuydTk7m6Bhdl7_moj_LZZRI9ekPvLA=s900-c-k-c0x00ffffff-no-rj"
      },
      {
        toUser: "David",
        fromUser: "Tsaopi",
        message: "gg ez mid noob invo",
        dateTime: "Nov. 28, 2020",
        dp: "https://yt3.ggpht.com/ytc/AAUvwng2_yj4qwaRuydTk7m6Bhdl7_moj_LZZRI9ekPvLA=s900-c-k-c0x00ffffff-no-rj"
      },
      {
        toUser: "literally anything",
        fromUser: "Jigo Vilar",
        message: "*insert swear words*",
        dateTime: "Nov. 28, 2020",
        dp: "https://yt3.ggpht.com/ytc/AAUvwng2_yj4qwaRuydTk7m6Bhdl7_moj_LZZRI9ekPvLA=s900-c-k-c0x00ffffff-no-rj"
      },
      {
        toUser: "MattDu",
        fromUser: "Kappachino",
        message: "u gotta farm bro",
        dateTime: "Nov. 28, 2020",
        dp: "https://yt3.ggpht.com/ytc/AAUvwng2_yj4qwaRuydTk7m6Bhdl7_moj_LZZRI9ekPvLA=s900-c-k-c0x00ffffff-no-rj"
      },
      {
        toUser: "MattDu",
        fromUser: "Kappachino",
        message: "can u pull the lane plz",
        dateTime: "Nov. 28, 2020",
        dp: "https://yt3.ggpht.com/ytc/AAUvwng2_yj4qwaRuydTk7m6Bhdl7_moj_LZZRI9ekPvLA=s900-c-k-c0x00ffffff-no-rj"
      },
      {
        toUser: "MattDu",
        fromUser: "Kappachino",
        message: "can u pull the lane plz",
        dateTime: "Nov. 28, 2020",
        dp: "https://yt3.ggpht.com/ytc/AAUvwng2_yj4qwaRuydTk7m6Bhdl7_moj_LZZRI9ekPvLA=s900-c-k-c0x00ffffff-no-rj"
      },
      {
        toUser: "MattDu",
        fromUser: "Kappachino",
        message: "can u pull the lane plz",
        dateTime: "Nov. 28, 2020",
        dp: "https://yt3.ggpht.com/ytc/AAUvwng2_yj4qwaRuydTk7m6Bhdl7_moj_LZZRI9ekPvLA=s900-c-k-c0x00ffffff-no-rj"
      }
    ];

    return (
      <View>
      <View style={styles.header}>
        <Text style={{alignSelf:'center',fontSize:18,fontWeight:'bold'}}>
          Messages
        </Text>
      </View>
     <View style={styles.inbox}>
      {messages.map((message,i)=> {
        return <TouchableHighlight onPress={() => this.props.navigation.navigate("LoginMen")}>
          <PrintMessages {...message}/>
          </TouchableHighlight>
      })}
    </View></View>)
  };
}
export default MessageScreen;