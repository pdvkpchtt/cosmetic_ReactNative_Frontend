import { Pressable, StyleSheet, Text, View } from "react-native";
import InsetShadow from "react-native-inset-shadow";

const CustomButton = ({
  title = "title",
  backgroundColor = "rgba(59,138,255,.79)",
  onClick = () => {},
  moreStyle = {},
}) => {
  return (
    <Pressable onPress={onClick}>
      <InsetShadow
        top={false}
        elevation={25}
        containerStyle={[
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
      </InsetShadow>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default CustomButton;
