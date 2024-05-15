import { Pressable, StyleSheet, Text, View } from "react-native";

const CustomButton = ({
  title = "title",
  backgroundColor = "rgba(59,138,255,.79)",
  onClick = () => {},
  moreStyle = {},
}) => {
  return (
    <Pressable
      style={[
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 42,
          backgroundColor: backgroundColor,
          borderRadius: 10,
        },
        moreStyle,
      ]}
      onPress={onClick}
    >
      <Text
        style={{
          fontFamily: "Montserrat-SemiBold",
          fontSize: 15,
          color: "#FFF",
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

export default CustomButton;
