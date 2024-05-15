import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../screens/Auth";
import Test from "../screens/Test";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
