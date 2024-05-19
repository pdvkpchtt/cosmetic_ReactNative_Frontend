import { useState } from "react";
import { Pressable, Text, useWindowDimensions, View } from "react-native";
import InsetShadow from "react-native-inset-shadow";

const AdviceItem = ({ item = {}, onClick = () => {} }) => {
  const { width } = useWindowDimensions();

  return (
    <Pressable
      onPress={onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        width: width,
        gap: 21,
        // paddingBottom: 5,
      }}
    >
      {item.items.map((i, key) => (
        <View
          key={key}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: width / 2 - 34,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 134,
              backgroundColor: "#F0FDFF",
              borderRadius: 13,
              paddingHorizontal: 15,
              paddingVertical: 12,

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
            }}
          >
            {i.icon}
          </View>
          <Text
            style={{
              flexWrap: "wrap",
              textAlign: "center",
              fontFamily: "Montserrat-Light",
              fontSize: 12,
              marginTop: 9,
              width: "100%",
              color: "#1E1E1E",
            }}
          >
            {i.text}
          </Text>
        </View>
      ))}
    </Pressable>
  );
};

export default AdviceItem;
