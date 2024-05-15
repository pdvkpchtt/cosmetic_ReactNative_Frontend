import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Layout = ({ children }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#94F9FF", "#ECB989"]}
      end={{ x: 1.2, y: 0.7 }}
      start={{ x: 0, y: 0 }}
      locations={[0.5, 0.99]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingTop: 40,
  },
});

export default Layout;
