import React from "react";
import { View } from "react-native";
import { Login } from "./Header/Login";
import Input from "./Body/Input";
import { Button } from "./Footer/Button";
import { styles } from "./style";

export const Layout = () => {
  return (
    <View style={styles.container}>
      <View style = {styles.header}>
        <Login />
      </View>
      <View style={styles.body}>
        <Input />
      </View>
      <View style = {styles.footer}>
        <Button />
      </View>
    </View>
  );
};
