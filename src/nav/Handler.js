import { View } from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";

const Handler = () => {
  return <AuthNavigator />;
};

export default Handler;
