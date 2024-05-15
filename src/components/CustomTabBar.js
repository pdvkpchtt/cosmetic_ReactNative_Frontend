import { Pressable, useWindowDimensions, View } from "react-native";
import InsetShadow from "react-native-inset-shadow";
import ScheduleIcon from "../UI/icons/ScheduleIcon";
import BookmarkIcon from "../UI/icons/BookmarkIcon";
import SearchIcon from "../UI/icons/SearchIcon";
import ProfileIcon from "../UI/icons/ProfileIcon";
import { LinearGradient } from "expo-linear-gradient";

const CustomTabBar = ({
  state: { index: activeIndex, routes },
  navigation,
}) => {
  const { width } = useWindowDimensions();

  const icons = [
    <SearchIcon />,
    <BookmarkIcon />,
    <ScheduleIcon />,
    <ProfileIcon />,
  ];

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: 49,
        backgroundColor: "#fff",
        elevation: 0,
      }}
    >
      {routes.map((route, key) => (
        <InsetShadow
          containerStyle={{}}
          top={false}
          elevation={activeIndex === key ? 15 : 0}
        >
          <Pressable key={key} onPress={() => navigation.navigate(route.name)}>
            <LinearGradient
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                width: width / 4,
                paddingBottom: 11,
                paddingTop: 10,
              }}
              colors={
                activeIndex === key ? ["#fff", "#FFE0B8"] : ["#fff", "#fff"]
              }
              locations={[0.2, 1]}
            >
              {icons[key]}
            </LinearGradient>
          </Pressable>
        </InsetShadow>
      ))}
    </View>
  );
};

export default CustomTabBar;
