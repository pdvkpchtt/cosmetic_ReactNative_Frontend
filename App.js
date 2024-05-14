import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Input from "./src/UI/Input";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import Auth from "./src/screens/Auth";
import { Provider } from "react-redux";
import { store } from "./src/store";

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
    <Provider store={store}>
      <LinearGradient
        style={styles.container}
        colors={["#94F9FF", "#ECB989"]}
        end={{ x: 1.2, y: 0.7 }}
        start={{ x: 0, y: 0 }}
        locations={[0.5, 0.99]}
      >
        <Auth />

        <StatusBar style="dark" />
      </LinearGradient>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingTop: 40,
  },
});
