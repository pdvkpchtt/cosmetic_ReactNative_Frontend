import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ProductItem = ({ item = {}, index = 0, width }) => {
  return (
    <LinearGradient
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 7,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        paddingHorizontal: 8,
        paddingTop: 12,
        paddingBottom: 6,
        borderRadius: 27,
        marginTop: index !== 0 ? 17 : 0,
      }}
      colors={["rgba(148, 249, 255, .5)", "rgba(236, 185, 137, .5)"]}
      locations={[-0.2, 1]}
    >
      <Image
        width={107}
        height={107}
        style={{ width: 107, height: 107 }}
        source={item.img}
      />

      <View
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text style={{ fontFamily: "Montserrat-SemiBold", fontSize: 17 }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontFamily: "Montserrat-Light",
            fontSize: 11,
            color: "#919191",
            marginTop: 4,
          }}
        >
          {item.type}
        </Text>
        <Text
          style={{
            fontFamily: "Montserrat-Medium",
            fontSize: 8,
            color: "#919191",
            marginTop: 9,
            flexWrap: "wrap",
            width: width - 42 - 16 - 107 - 8,
          }}
        >
          {item.description}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default ProductItem;
