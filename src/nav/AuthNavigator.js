import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../screens/Auth";
import Results from "../screens/Results";
import Test from "../screens/Test";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Auth"}>
        <Stack.Screen
          name="Auth"
          options={{
            headerShown: false,
          }}
          component={Auth}
        />
        <Stack.Screen
          name="Test"
          options={{
            headerShown: false,
          }}
          component={Test}
        />
        <Stack.Screen
          name="Results"
          options={{
            headerShown: false,
          }}
          component={Results}
        />
        <Stack.Screen
          name="Tabs"
          options={{
            headerShown: false,
          }}
          component={TabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
