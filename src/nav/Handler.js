import { View } from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";

const Handler = () => {
  const [authorized] = useSelector(
    (state) => [state.profile.authorized],
    shallowEqual
  );

  return <>{!authorized ? <AuthNavigator /> : <TabNavigator />}</>;
};

export default Handler;
