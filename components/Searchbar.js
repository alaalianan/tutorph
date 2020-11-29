import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimentions";

const FormInput = ({ placeholderText, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <Image style ={styles.image} source={require('../assets/search.png')}/>
      <TextInput
        //value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
    height: windowHeight / 15,
    borderColor: "#ccc",
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  image:{
    padding:10,
    height:30,
    width:30,
    left:5,
  },
});
