import { StyleSheet, Text, View } from "react-native";
import ElementSvg from "../UI/icons/ElementSvg";
import { products } from "../client_data/products";
import ProductItemSmall from "./ProductItemSmall";

const ScheduleItem = ({ item = "", random = 0 }) => {
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let firstRand = randomIntFromInterval(0, 6);
  let secRand = randomIntFromInterval(0, 5);
  let thirdRand = secRand + 1;

  return (
    <View
      style={{
        marginHorizontal: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 44,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          width: "100%",
          height: 44,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Montserrat-SemiBold",
            fontSize: 14,
            marginRight: 3,
          }}
        >
          {item}
        </Text>

        {[...Array(random)].map((i) => {
          if (Math.random() < 0.8)
            return <ProductItemSmall item={products[firstRand]} />;
          else
            return (
              <>
                <ProductItemSmall item={products[secRand]} />
                <ProductItemSmall item={products[thirdRand]} />
              </>
            );
        })}
      </View>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#F4F4F4",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ScheduleItem;
