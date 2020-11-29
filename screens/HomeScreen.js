import React, { Component } from "react";
import { Cards } from "./../components/Cards.js";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Modal,
  Platform,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import StarRating from "../components/StarRating";
import Searchbar from "../components/Searchbar";
import FormInput from "../components/FormInput";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <SafeAreaView>
      <View style={ {
    marginTop: 40,
    alignSelf:"center",
  }}>
        <Text style={{alignSelf:'center',fontSize:18,fontWeight:'bold'}}>
          Home
        </Text>
          <Searchbar placeholderText ="Search..."/>
      </View>
      <View>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.view}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Cover Letter</Text>
              <FormInput
                //labelValue={Password}
                placeholderText="Enter message here"
                secureTextEntry={false}
              />
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require("../assets/profilepic1.jpg")}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Mike James</Text>
              <StarRating ratings={4} reviews={99} />
              <Text style={styles.cardDetails}>Master English Teacher</Text>
              <Text style={{ fontSize: 22, lineHeight: 22 }}>500PHP</Text>
            </View>
          </View>
        </TouchableHighlight>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.view}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Cover Letter</Text>
              <FormInput
                //labelValue={Password}
                placeholderText="Enter message here"
                secureTextEntry={false}
              />
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require("../assets/profilepic2.jpg")}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>EJ Sampaloc</Text>
              <StarRating ratings={5} reviews={32} />
              <Text style={styles.cardDetails}>Master Math Teacher</Text>
              <Text style={{ fontSize: 22, lineHeight: 22 }}>300PHP</Text>
            </View>
          </View>
        </TouchableHighlight>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.view}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Cover Letter</Text>
              <FormInput
                //labelValue={Password}
                placeholderText="Enter message here"
                secureTextEntry={false}
              />
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require("../assets/kidwritting.png")}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Mojo Wilson</Text>
              <StarRating ratings={2} reviews={14} />
              <Text style={styles.cardDetails}>Master Science Teacher</Text>
              <Text style={{ fontSize: 22, lineHeight: 22 }}>600PHP</Text>
            </View>
          </View>
        </TouchableHighlight>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.view}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Cover Letter</Text>
              <FormInput
                //labelValue={Password}
                placeholderText="Enter message here"
                secureTextEntry={false}
              />
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require("../assets/profilepic1.jpg")}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>James Mike</Text>
              <StarRating ratings={3} reviews={19} />
              <Text style={styles.cardDetails}>Master Chemistry Teacher</Text>
              <Text style={{ fontSize: 22, lineHeight: 22 }}>400PHP</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
  header: {
    marginTop: 40,
    alignSelf:"center",
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
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 15,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
  },
});