import InsetShadow from "react-native-inset-shadow";
import { Pressable, TextInput, View } from "react-native";
import { useRef, useState } from "react";
import SearchMiniIcon from "./icons/SearchMiniIcon";

const SearchInput = ({
  paddingHorizontal = 20,
  value = "",
  onChange = () => {},
  placeholder = "placeholder",
}) => {
  const ref = useRef();

  return (
    <InsetShadow
      containerStyle={{
        borderRadius: 13,
        flex: 1,
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
          borderRadius: 13,
        }}
      >
        <View
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 9,
          }}
        >
          <SearchMiniIcon />
        </View>

        <TextInput
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
      </View>
    </InsetShadow>
  );
};

export default SearchInput;
