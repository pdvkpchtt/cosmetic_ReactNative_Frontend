import { StyleSheet, Text, View } from "react-native";
import ElementSvg from "../UI/icons/ElementSvg";

const ScheduleItem = ({ item = "", random = 0 }) => {
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
          gap: 0,
          width: "100%",
          height: 44,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Montserrat-SemiBold",
            fontSize: 14,
            marginRight: 7,
          }}
        >
          {item}
        </Text>

        {[...Array(random)].map((i) => {
          if (Math.random() < 0.8) return <ElementSvg />;
          else
            return (
              <>
                <ElementSvg />
                <ElementSvg />
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
