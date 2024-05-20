import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Heart2Icon from "../UI/icons/Heart2Icon";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../store/favoriteSlice";

const ProductItemSmall = ({ item = {}, index = 0, width }) => {
  const [products] = useSelector(
    (state) => [state.favorite.products],
    shallowEqual
  );
  const dispatch = useDispatch();

  return (
    <LinearGradient
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: 107,
        paddingHorizontal: 3,
        paddingTop: 3,
        paddingBottom: 1,
        borderRadius: 6,
      }}
      colors={["rgba(148, 249, 255, .5)", "rgba(236, 185, 137, .5)"]}
      locations={[-0.2, 1]}
    >
      <Image
        width={27}
        height={27}
        style={{ width: 27, height: 27 }}
        source={item.img}
      />

      <View
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          numberOfLines={2}
          style={{
            marginTop: -2,
            fontFamily: "Montserrat-SemiBold",
            fontSize: 8,
            width: 107 - 3 - 6 - 27 - 3,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontFamily: "Montserrat-Light",
            fontSize: 6,
            color: "#919191",
            marginTop: -1,
          }}
        >
          {item.type}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default ProductItemSmall;
