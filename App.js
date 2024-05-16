import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/store";
import Handler from "./src/nav/Handler";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Asyncstorage: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

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
      <Handler />

      <StatusBar style="dark" />
    </Provider>
  );
}
