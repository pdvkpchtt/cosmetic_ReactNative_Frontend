import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import ScheduleItem from "../components/ScheduleItem";
import Layout from "../layout/Layout";

const month = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const times = [
  "6:00",
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

const Schedule = () => {
  const [monthstate, setmonthstate] = useState("Январь");

  return (
    <Layout>
      <View
        style={{
          flex: 1,
          gap: 34,
        }}
      >
        <View
          style={{
            alignItems: "center",

            display: "flex",
            flexDirection: "column",
            gap: 28,
            paddingHorizontal: 17,
          }}
        >
          <View
            style={{
              marginTop: "20%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
              position: "relative",
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-SemiBold",
                fontSize: 24,
                textAlign: "center",
                width: "100%",
              }}
            >
              Календарь
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            borderTopLeftRadius: 27,
            borderTopRightRadius: 27,
            paddingVertical: 27,
            marginHorizontal: 21,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 35,

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
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 7,
            }}
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                paddingHorizontal: 14,
              }}
            >
              {month.map((item, key) => (
                <Pressable onPress={() => setmonthstate(item)} key={key}>
                  <LinearGradient
                    style={{
                      marginRight: 8,
                      paddingTop: 5,
                      paddingBottom: 9,
                      paddingHorizontal: 16,
                    }}
                    colors={
                      item === monthstate
                        ? ["#fff", "rgba(170,170,170,0.25)"]
                        : ["#fff", "#fff"]
                    }
                    locations={[0.4, 1]}
                  >
                    <Text
                      style={{
                        fontFamily: "Montserrat-Light",
                        fontSize: 12,
                        textAlign: "center",
                        color: "#1e1e1e",
                      }}
                    >
                      {item}
                    </Text>
                  </LinearGradient>
                </Pressable>
              ))}
            </ScrollView>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                paddingHorizontal: 14,
              }}
            >
              {days.map((item, key) => (
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 5,
                    backgroundColor: "#F4F4F4",
                    width: 25,
                    height: 25,
                    marginRight: key === days.length - 1 ? 30 : 8,
                  }}
                >
                  <Text
                    key={key}
                    style={{
                      fontFamily: "Montserrat-Light",
                      fontSize: 12,
                      textAlign: "center",
                      color: "#1e1e1e",
                    }}
                  >
                    {item}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>

          <View>
            <Text
              style={{
                fontFamily: "Montserrat-Regular",
                fontSize: 20,
                paddingHorizontal: 14,
                textAlign: "start",
                color: "#1e1e1e",
                marginBottom: 3,
              }}
            >
              Расписание
            </Text>

            <View>
              <FlatList
                data={times}
                renderItem={({ item, index }) => (
                  <ScheduleItem item={item} />
                  // <TestItem item={item} index={index} />
                )}
                showsVerticalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                overScrollMode="never"
              />
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Schedule;
