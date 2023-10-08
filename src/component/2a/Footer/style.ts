import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  view1: {
    textTransform: "uppercase",
    backgroundColor: "#060000",
    width: "90%",
    height: 45,
    borderRadius:2,
    justifyContent:"center"
  },
  view2: {
    paddingTop:30
  },
  text: {
    color: "#FFFFFF",
    textAlign:'center',
    fontWeight: "700",
  },
  text2: {
    color: "#000000",
    textAlign:'center',
    fontWeight: "700",
    textTransform: "uppercase",

  }
});

export default styles;
