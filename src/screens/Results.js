import React, { useCallback, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Layout from "../layout/Layout";

import { test } from "../client_data/test";
import TestItem from "../components/TestItem";
import Paginator from "../components/Paginator";
import CustomButton from "../UI/CustomButton";
import { useDispatch } from "react-redux";
import { profileSlice } from "../store/profileSlice";

const Results = ({ navigation }) => {
  const { height } = useWindowDimensions();

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
          Результат теста на тип кожи
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
            #результат
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
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Montserrat-Regular",
                textAlign: "center",
                color: "#1E1E1E",
              }}
            >
              У вас{"\n"}
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Montserrat-SemiBold",
                  textAlign: "center",
                  color: "#1E1E1E",
                }}
              >
                Жирный
              </Text>
              {"\n"}тип кожи
            </Text>
            <ScrollView
              style={{
                height: height / 3,
              }}
              fadingEdgeLength={250}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Montserrat-Regular",
                  color: "#1E1E1E",
                  paddingHorizontal: 25,
                }}
              >
                Этот тип кожи характеризуется тусклым цветом, крупными, хорошо
                заметными порами, маслянистым жирным блеском. На коже, могут
                присутствовать многочисленные угри, комедоны и прыщи. Если это
                именно ваш тип кожи, то не стоит расстраиваться, так как у
                обладателей жирной кожи есть большой плюс. Поскольку сальные
                железы действуют слишком активно, на поверхности кожи
                скапливается избыточное количество жира, что в свою очередь
                препятствует появлению морщин. Поэтому жирная кожа долго
                остается упругой и эластичной, и морщины возникают позже.
              </Text>
            </ScrollView>
            {/* <FlatList
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
            /> */}

            <CustomButton
              onClick={() => {
                navigation.navigate("Tabs");
              }}
              title={"Готово"}
              moreStyle={{
                marginHorizontal: 51,
                marginBottom: -5,
                // backgroundColor: "rgba(59,138,255,.79)",
              }}
            />
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Results;
