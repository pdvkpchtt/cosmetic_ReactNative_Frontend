import SearchInput from "../UI/SearchInput";
import {
  FlatList,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import FiltersIcon from "../UI/icons/FiltersIcon";
import { FlashList } from "@shopify/flash-list";
import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "react";
import Modal from "react-native-modal";
import { UniversalModal } from "../UI/UniversalModal";
import CrossIcon from "../UI/icons/CrossIcon";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const Bookmarks = ({ navigation }) => {
  const [products] = useSelector(
    (state) => [state.favorite.products],
    shallowEqual
  );

  useEffect(() => {
    setfilter(products);
  }, [products]);

  const { width } = useWindowDimensions();

  const [filter, setfilter] = useState(products);
  const [state, setstate] = useState("");
  const [modalState, setModalState] = useState(false);
  const [selected, setselected] = useState("");

  return (
    <>
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
                  products.filter(
                    (i) =>
                      i.name.includes(value.nativeEvent.text) &&
                      i.type.includes(selected)
                  )
                );
              else setfilter(products);
            }}
          />
          <Pressable onPress={() => setModalState(true)}>
            <FiltersIcon />
          </Pressable>
        </View>
        <View style={{ flex: 1, width: width }}>
          {selected !== "" && (
            <Pressable
              onPress={() => {
                setselected("");
                setfilter(
                  products.filter(
                    (i) => i.name.includes(state) && i.type.includes("")
                  )
                );
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                alignItems: "center",
                marginTop: -5,
                marginBottom: 10,
                marginHorizontal: 21,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",
                  fontSize: 15,
                  color: "#919191",
                }}
              >
                {selected}
              </Text>
              <CrossIcon />
            </Pressable>
          )}
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

      <Modal
        isVisible={modalState}
        backdropOpacity={0.5}
        style={{ margin: 0 }}
        backdropTransitionOutTiming={10}
      >
        <UniversalModal
          setFilter={(val) => {
            setselected(val);
            setfilter(
              products.filter(
                (i) => i.type.includes(val) && i.name.includes(state)
              )
            );
          }}
          selected={selected}
          setModalState={() => setModalState(false)}
        ></UniversalModal>
      </Modal>
    </>
  );
};

export default Bookmarks;
