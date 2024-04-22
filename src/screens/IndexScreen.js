import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const IndexScreen = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.roboimg}
        source={require("../../assets/robo.png")}
      >
        <Text style={styles.header}>
          vo<Text style={styles.x}>x</Text>convo
        </Text>
        <Text style={styles.subtitle}>{`Is there something
can do for you?`}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Prompt")}
        >
          <Text style={styles.getstart}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: 20,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    color: "white",
    fontSize: 35,
    textAlign: "center",
    color: "yellow",
  },
  x: {
    color: "lightblue",
  },
  roboimg: {
    flex: 1,
    resizeMode: "cover",
  },
  subtitle: {
    color: "white",
    fontSize: 30,
    marginTop: "130%",
    fontWeight: "bold",
    textAlign: "center",
  },
  getstart: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    marginTop: 50,
    padding: 10,
    fontWeight: "bold",
    alignItems: "center",
    backgroundColor: "#C09FF8",
    opacity: 0.5,
  },
});
export default IndexScreen;
