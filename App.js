import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Input from "./src/UI/Input";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Montserrat-Black": require("./assets/Montserrat-Black.ttf"),
    "Montserrat-Bold": require("./assets/Montserrat-Bold.ttf"),
    "Montserrat-ExtraBold": require("./assets/Montserrat-ExtraBold.ttf"),
    "Montserrat-ExtraLight": require("./assets/Montserrat-ExtraLight.ttf"),
    "Montserrat-Light": require("./assets/Montserrat-Light.ttf"),
    "Montserrat-Medium": require("./assets/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("./assets/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/Montserrat-SemiBold.ttf"),
    "Montserrat-Thin": require("./assets/Montserrat-Thin.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Input />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 50,
  },
});
