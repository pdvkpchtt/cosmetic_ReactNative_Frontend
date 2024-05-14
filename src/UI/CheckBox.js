import InsetShadow from "react-native-inset-shadow";
import { Pressable, StyleSheet, View } from "react-native";
import CheckIcon from "./icons/CheckIcon";

const CheckBox = ({ checked = false, onClick = () => {} }) => {
  return (
    <Pressable onPress={onClick}>
      <InsetShadow
        containerStyle={{
          borderRadius: 5,
          width: 21,
          height: 21,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {checked && <CheckIcon />}
      </InsetShadow>
    </Pressable>
  );
};

export default CheckBox;
