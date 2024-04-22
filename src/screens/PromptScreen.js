import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import Voice from "@react-native-voice/voice";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const PromptScreen = () => {
  const [result, setResult] = useState("You can speak Now. I am listening !");
  const [error, setError] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  Voice.onSpeechStart  = () => setIsRecording(true);
  Voice.onSpeechEnd = () => setIsRecording(false);
  Voice.onSpeechError = (err) => setError(err.error);
  Voice.onSpeechResults = (result) => setResult(result.value[0]);

  console.log(isRecording);
  const startRecording = async () => {
    try {
      await Voice.start("en-US");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  const stopRecording = async () => {
    try {
      await Voice.stop();
    } catch (error) {
      setError(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        vo<Text style={styles.x}>x</Text>convo
      </Text>
      <ImageBackground
        style={styles.elementimg}
        source={require("../../assets/page2back.png")}
      >
        <Text style={styles.subtitle}>{result}</Text>

        <TouchableOpacity
          onPress={() => (isRecording ? stopRecording() : startRecording())}
        >
          <View style={styles.mic}>
            {isRecording ? (
              <AntDesign name="close" size={24} color="white" />
            ) : (
              <Feather name="mic" size={24} color="white" />
            )}
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
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
  elementimg: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  subtitle: {
    color: "white",
    fontSize: 25,
    marginTop: "140%",
    fontWeight: "bold",
  },
  mic: {
    height: 75,
    width: 75,
    marginTop: 50,
    backgroundColor: "#C09FF8",
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default PromptScreen;
