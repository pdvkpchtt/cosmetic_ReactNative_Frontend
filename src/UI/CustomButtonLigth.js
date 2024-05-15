import { Pressable, StyleSheet, Text, View } from "react-native";
import InsetShadow from "react-native-inset-shadow";

const CustomButtonLigth = ({
  title = "title",
  backgroundColor = "#FFE0B9",
  onClick = () => {},
  moreStyle = {},
}) => {
  return (
    <Pressable
      onPress={onClick}
      style={[
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 49,
          width: "100%",
          backgroundColor: backgroundColor,
          borderRadius: 13,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 5,
        },
        moreStyle,
      ]}
    >
      <Text
        style={{
          fontFamily: "Montserrat-Regular",
          fontSize: 20,
          color: "#000",
          width: "100%",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default CustomButtonLigth;
