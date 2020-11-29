import React from "react";
import StarRating from "../components/StarRating";
import { Cards } from "./../components/Cards.js";
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


export default class StatsScreen extends React.Component {
  render (){return (
    <SafeAreaView>
    <View style={styles.card}>
    <View style={styles.cardInfo}>
      <Text style={styles.cardTitle}>Available</Text>
      <Text style={styles.cardDetails}>500PHP</Text>
    </View>
  </View>
  <View style={styles.card}>
    <View style={styles.cardInfo}>
      <Text style={styles.cardTitle}>Work In Progress</Text>
      <Text style={styles.cardDetails}>200PHP</Text>
    </View>
  </View>
</SafeAreaView>
  )
};
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
    color: "#042B67",
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
});
