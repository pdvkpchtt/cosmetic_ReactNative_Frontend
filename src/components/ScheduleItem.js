import { StyleSheet, Text, View } from "react-native";
import ElementSvg from "../UI/icons/ElementSvg";

const ScheduleItem = ({ item = "" }) => {
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

        {item === "7:00" ? (
          <ElementSvg />
        ) : item === "6:00" ? (
          <>
            <ElementSvg />
            <ElementSvg />
          </>
        ) : null}
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
