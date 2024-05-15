import SearchInput from "../UI/SearchInput";
import { FlatList, Text, useWindowDimensions, View } from "react-native";
import FiltersIcon from "../UI/icons/FiltersIcon";
import { FlashList } from "@shopify/flash-list";
import { products } from "../client_data/products";
import ProductItem from "../components/ProductItem";

const Search = () => {
  const { width } = useWindowDimensions();

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
        <SearchInput placeholder="Поиск..." />
        <FiltersIcon />
      </View>
      <View style={{ flex: 1, width: width }}>
        <FlatList
          // horizontal
          data={products}
          renderItem={({ item, index }) => (
            <ProductItem item={item} index={index} width={width} />
          )}
          contentContainerStyle={{
            paddingHorizontal: 21,
            paddingTop: 17,
            paddingBottom: 17,
          }}
          // ListEmptyComponent={() => <EmptyComponent />}
          overScrollMode="never"
        />
      </View>
    </View>
  );
};

export default Search;
