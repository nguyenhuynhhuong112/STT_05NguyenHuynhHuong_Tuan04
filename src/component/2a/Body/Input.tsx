import React from "react";
import { View, TextInput } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import Entypo from 'react-native-vector-icons/Entypo'
import { styles } from "./style";

const Input = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input1}>
        <FontAwesomeIcon name="user" size={30}  />
        <TextInput placeholder="user name" style={styles.input} />
      </View>
      <View style={styles.input2}>
        <FontistoIcon name="locked" size={30}  />
        <TextInput placeholder="password" style={styles.input} />
        <Entypo name="eye"  size={30} style={styles.icon}/>
      </View>
    </View>
  );
};

export default Input;
