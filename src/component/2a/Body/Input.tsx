import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from "./style";

const Input = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.input1}>
        <FontAwesomeIcon name="user" size={30} />
        <TextInput
          placeholder="user name"
          style={styles.input}
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
      </View>
      <View style={styles.input2}>
        <FontistoIcon name="locked" size={30} />
        <TextInput
          placeholder="password"
          style={styles.input}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Entypo
          name={showPassword ? "eye" : "eye-with-line"}
          size={30}
          style={styles.icon}
          onPress={toggleShowPassword}
        />
      </View>
      <TouchableOpacity onPress={() => alert(`UserName: ${userName}, Password: ${password}`)}>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
