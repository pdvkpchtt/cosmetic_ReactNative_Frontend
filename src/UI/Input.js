import InsetShadow from "react-native-inset-shadow";
import { Pressable, TextInput, View } from "react-native";
import { useRef, useState } from "react";
import EyeIcon from "../UI/icons/EyeIcon";

const Input = ({
  paddingHorizontal = 20,
  value = "",
  onChange = () => {},
  placeholder = "placeholder",
  passwordtype = false,
}) => {
  const ref = useRef();
  const [showpass, setshowpass] = useState(false);

  return (
    <InsetShadow
      containerStyle={{
        borderRadius: 10,
        width: "100%",
        height: 42,
      }}
      onClick={() => ref.current.click()}
      elevation={5}
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
          secureTextEntry={!showpass && passwordtype}
          placeholder={placeholder}
          placeholderTextColor={"#919191"}
          ref={ref}
          style={{
            height: 42,
            flex: 1,
            fontSize: 15,
            fontFamily: "Montserrat-Regular",
          }}
          value={value}
          onChange={onChange}
        />

        {passwordtype && (
          <Pressable
            onPress={() => setshowpass(!showpass)}
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <EyeIcon crossed={showpass} />
          </Pressable>
        )}
      </View>
    </InsetShadow>
  );
};

export default Input;
