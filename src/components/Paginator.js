import { Pressable, useWindowDimensions, View } from "react-native";
import InsetShadow from "react-native-inset-shadow";

const Paginator = ({ data = {}, iteminview }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        height: 11,
        paddingHorizontal: 51,
        justifyContent: "center",
        gap: 7,
      }}
    >
      {data.map((i, key) => (
        <InsetShadow
          elevation={3}
          containerStyle={{
            borderRadius: 999,
            width: 11,
            height: 11,
            backgroundColor: iteminview === i.id ? "#FFE0B8" : "#F4F4F4",
          }}
          key={key.toString()}
        ></InsetShadow>
      ))}
    </View>
  );
};

export default Paginator;
