import InsetShadow from "react-native-inset-shadow";
import { TextInput, View } from "react-native";
import { useRef } from "react";

const Input = ({ paddingHorizontal = 20, value = "", onChange = () => {} }) => {
  const ref = useRef();

  return (
    <InsetShadow
      left={false}
      bottom={false}
      right={false}
      containerStyle={{
        borderRadius: 10,
        width: "100%",
        height: 42,
      }}
      onClick={() => ref.current.click()}
    >
      <View
        style={{
          paddingHorizontal: paddingHorizontal,
          width: "100%",
          height: 42,
          backgroundColor: "#F9F9F9",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          ref={ref}
          style={{
            height: 42,
            width: "100%",
            fontSize: 15,
            color: "#919191",
            fontFamily: "Montserrat",
          }}
          value={"sss"}
          onChange={onChange}
        />
      </View>
    </InsetShadow>
  );
};

export default Input;
