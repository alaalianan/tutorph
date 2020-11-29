import React from "react";
import { Cards } from "./../components/Cards.js";
import StarRating from "../components/StarRating";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default class ProfileScreen extends React.Component {
  render(){ 
    return (
      
<SafeAreaView>
          <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/profilepic1.jpg")}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Mike Hawk</Text>
            <StarRating ratings={4} reviews={99} />
            <View style={{
            paddingVertical: 15,
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "start"
        }}>
          <Icon name="ios-location" color={"#042B67"} size={20} />
            <Text style={styles.cardText}>Sa Pusa Mo, Philippines</Text>  
        </View>
            <Text style={{ fontSize: 22, lineHeight: 22 }}> General Rate: 500PHP</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Master English Teacher</Text>
          </View>
          <View style={styles.cardInfo}>
          <Text style={styles.cardText}>
            My name is Jose and I like Sun Shiny Days and Rainbows. A productivity nerd. Tech Junkie. People Lover. I like copy pasting people’s codes from Stack Overflow
          </Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Education</Text>
          </View>
          <View style={styles.cardInfo}>
          <Text style={styles.cardText}>
            Ateneo de Manila University
          </Text>
          <Text style={styles.cardText}>
          Bachelor of Business Administration(BBA), Data Analysis
          </Text>
          <Text style={styles.cardText}>
            (2018-2022)
          </Text>
          </View>
        </View>
</SafeAreaView>
  )};
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
