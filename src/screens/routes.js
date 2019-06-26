import { createStackNavigator, createAppContainer } from "react-navigation";
import login from "./login/login";
import Signup from "./signup/signup";

const AppNavigator = createStackNavigator({
  login: {
    screen: login
  },
  Signup: {
    screen: Signup
  },
    initialRouteName: "login"
  }
);

export default createAppContainer(AppNavigator);