import React, { useCallback, useRef, useState } from "react";
import { Animated, FlatList, Text, View } from "react-native";
import Layout from "../layout/Layout";

import { test } from "../client_data/test";
import TestItem from "../components/TestItem";
import Paginator from "../components/Paginator";
import CustomButton from "../UI/CustomButton";
import { useDispatch } from "react-redux";
import { profileSlice } from "../store/profileSlice";

const Test = () => {
  const dispatch = useDispatch();

  const flatListRef = useRef(FlatList);
  const [iteminview, setiteminview] = useState(0);

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 40,
    waitForInteraction: true,
  };

  return (
    <Layout>
      <View
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          paddingHorizontal: 21,
          gap: 70,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Montserrat-SemiBold",
            textAlign: "center",
          }}
        >
          Тест на тип кожи
        </Text>

        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Montserrat-Regular",
              textAlign: "center",
              fontStyle: "italic",
              color: "#1E1E1E",
            }}
          >
            #особенности_кожи
          </Text>

          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 27,
              paddingVertical: 39,
              display: "flex",
              flexDirection: "column",
              gap: 20,

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
            }}
          >
            <FlatList
              ref={flatListRef}
              data={test}
              renderItem={({ item, index }) => (
                <TestItem item={item} index={index} />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              pagingEnabled
              bounces={false}
              keyExtractor={(item) => item.id}
              onViewableItemsChanged={(item) => {
                setiteminview(item.viewableItems[0].item.id);
              }}
              viewabilityConfig={viewabilityConfig}
            />

            <CustomButton
              onClick={() => {
                if (iteminview !== test.length - 1) {
                  flatListRef?.current?.scrollToIndex({
                    animated: true,
                    index: iteminview + 1,
                  });
                  setiteminview(iteminview + 1);
                } else {
                  dispatch(profileSlice.actions.logIn());
                }
              }}
              title={iteminview !== test.length - 1 ? "Далее" : "Завершить"}
              moreStyle={{
                marginHorizontal: 51,
                marginBottom: -5,
                marginTop: 3,
                // backgroundColor: "rgba(59,138,255,.79)",
              }}
            />

            <Paginator data={test} iteminview={iteminview} />
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Test;
