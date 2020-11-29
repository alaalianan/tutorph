import React from "react";
import { Cards } from "./../components/Cards.js";
import StarRating from "../components/StarRating";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import { windowHeight, windowWidth } from "../utils/Dimentions";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default class ProfileScreen extends React.Component {
  render(){ 
    return (
        <SafeAreaView>
          <ScrollView>
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
            <Text style={styles.cardText}>Sa Pusa Mo, Philippines</Text>  
            <Text style={{ fontSize: 12, lineHeight: 22 }}> General Rate: 500PHP</Text>
          </View>
        </View>
        <View style={styles.card2}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Master English Teacher</Text>
            <Text style={styles.cardText}>My name is Jose and I like Sun Shiny Days and Rainbows.</Text>
               
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Education</Text>
          <Text style={styles.cardHeader}>
            Ateneo de Manila University
          </Text>
          <Text style={styles.cardHeader2}>
          Bachelor of Business Administration(BBA), Data Analysis
          </Text>
          <Text style={styles.cardText}>
            (2018-2022)
          </Text>
          </View>
        </View>
        <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Certification</Text>
          <Text style={styles.cardHeader}>
            Ateneo de Manila University
          </Text>
          <Text style={styles.cardHeader2}>
          Attended Some Workshops Sometimes
          </Text>
          <Text style={styles.cardText}>
            (2011)
          </Text>
          <Text style={styles.cardHeader}>
            Lasalle University
          </Text>
          <Text style={styles.cardHeader2}>
          Maybe did workshops
          </Text>
          <Text style={styles.cardText}>
            (2011)
          </Text>
        </View>
        <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Availability</Text>
          <Text style={styles.cardHeader}>
            As needed
          </Text>
        </View>
        </ScrollView>
</SafeAreaView>
  )};
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardsWrapper: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  card2: {
    flex: 1,
    height: "100%",
    width: windowWidth,
    marginVertical: 10,
    flexDirection: "column",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    width: windowWidth,
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    alignSelf:"flex-start",
    flexWrap: "wrap",
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
    color: "#042B67",
  },
  cardHeader: {
    fontWeight: "800",
    color: "#042B67",
  },
  cardHeader2: {
    flexWrap: 'wrap',
    fontWeight: "500",
    color: "#042B67",
  },
  cardText: {
    fontWeight: "normal",
    color: "#042B67",
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },  
});