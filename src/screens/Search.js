import SearchInput from "../UI/SearchInput";
import { FlatList, Text, useWindowDimensions, View } from "react-native";
import FiltersIcon from "../UI/icons/FiltersIcon";
import { FlashList } from "@shopify/flash-list";
import { products } from "../client_data/products";
import ProductItem from "../components/ProductItem";
import { useState } from "react";

const Search = () => {
  const { width } = useWindowDimensions();

  const [filter, setfilter] = useState(products);
  const [state, setstate] = useState("");

  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingTop: 50,
        paddingHorizontal: 0,
        marginHorizontal: 0,
        flex: 1,
        dsiplay: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 17,
      }}
    >
      <View
        style={{
          width: "100%",
          dsiplay: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 13,
          width: width - 42,
        }}
      >
        <SearchInput
          placeholder="Поиск..."
          value={state}
          onChange={(value) => {
            setstate(value.nativeEvent.text);
            if (value.nativeEvent.text.length > 0)
              setfilter(
                products.filter((i) => i.name.includes(value.nativeEvent.text))
              );
            else setfilter(products);
          }}
        />
        <FiltersIcon />
      </View>
      <View style={{ flex: 1, width: width }}>
        <FlatList
          // horizontal
          data={filter}
          renderItem={({ item, index }) => (
            <ProductItem item={item} index={index} width={width} />
          )}
          contentContainerStyle={{
            paddingHorizontal: 21,
            paddingTop: 17,
            paddingBottom: 17,
          }}
          ListEmptyComponent={() => (
            <View
              style={{
                width: "100%",
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f6f6f8",
                borderRadius: 13,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Medium",
                  fontSize: 12,
                  textAlign: "center",
                  color: "#919191",
                  marginTop: 4,
                }}
              >
                Ничего не найдено
              </Text>
            </View>
          )}
          overScrollMode="never"
        />
      </View>
    </View>
  );
};

export default Search;
