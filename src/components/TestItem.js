import { useState } from "react";
import { Pressable, Text, useWindowDimensions, View } from "react-native";
import InsetShadow from "react-native-inset-shadow";

const TestItem = ({ item = {}, index = 0 }) => {
  const { width } = useWindowDimensions();

  const [selected, setselected] = useState(null);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: width - 42,
        gap: 11,
        paddingHorizontal: 51,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Montserrat-Regular",
          color: "#1E1E1E",
        }}
      >
        {index + 1}. {item.question}
      </Text>

      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {item.answers.map((i, key) => (
          <Pressable
            key={key}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 19,
              paddingVertical: 12,
            }}
            onPress={() => setselected(key)}
          >
            <InsetShadow
              elevation={3}
              containerStyle={{
                borderRadius: 999,
                width: 14,
                height: 14,
                backgroundColor: selected === key ? "#FFE0B8" : "#F4F4F4",
              }}
              key={key.toString()}
            ></InsetShadow>

            <Text
              style={{
                fontSize: 15,
                fontFamily: "Montserrat-Regular",
                color: "#AAA",
                textDecorationLine: selected === key ? "underline" : "none",
              }}
            >
              {i.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default TestItem;
