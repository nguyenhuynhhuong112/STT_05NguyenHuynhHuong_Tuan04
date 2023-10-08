  import { StyleSheet } from "react-native";

  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    input1: {
      backgroundColor: 'rgba(0.949, 0.949, 0.949, 0.1)',
      width: "90%",
      height: "60%",
      borderWidth: 1,
      alignItems: "center",
      flexDirection: "row",
      marginBottom: 10,
      borderColor:'#F2F2F2'
    },
    input2: {
      backgroundColor: 'rgba(0.949, 0.949, 0.949, 0.1)',
      borderColor:'#F2F2F2',
      width: "90%",
      height: "60%",
      borderWidth: 1,
      alignItems: "center",
      flexDirection: "row",
    },
    input: {
      flex: 1,
      borderWidth: 0,
      paddingLeft: 10,
      width: "100%",
      height: "100%",
    },
    icon:{
      paddingRight:10
    }
  });
