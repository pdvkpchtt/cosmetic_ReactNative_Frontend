import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "../screens/Profile";
import Schedule from "../screens/Schedule";
import Bookmarks from "../screens/Bookmarks";
import Search from "../screens/Search";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HoProfileme"
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Bookmarks"
          component={Bookmarks}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Schedule"
          component={Schedule}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
