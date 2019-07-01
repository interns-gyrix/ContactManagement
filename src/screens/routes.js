import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import Signup from "./signup/signup";
import Addcontact from "./addc/AddContact";
import Utilities from "./utilities/utilities";
import Profile from "./profile/profile";
import FlatListBasics from "./contactpage/contactpage";
import Login from "./login/login";
<<<<<<< HEAD
import Sidebar from "./../components/sidebar/sidebar";
=======
import Sidebar from "./../components/sidebar/sidebar"
import { initialiseFirebase } from "../../util/firebaseManager";

initialiseFirebase();
>>>>>>> bd0d8321b96ffe4d0c6bfb58d34f01d930846595

const AppNavigator = createStackNavigator({
  Signup: {
    screen: Signup
  },
  Utilities: {
    screen: Utilities
  },
  Addcontact: {
    screen: Addcontact
  },
  Profile: {
    screen: Profile
  },
  FlatListBasics: {
    screen: FlatListBasics
  },
  Login: {
    screen: Login
},},
  {
    initialRouteName: "AddContact"
  }
);


const RootStack = createDrawerNavigator(
  {
    Login: {
      screen: AppNavigator,
      navigationOptions: {
        drawerLockMode: "locked-closed",
      }
    }
  },
  {
    contentComponent: Sidebar,
    drawerWidth: 200,
    drawerPosition: 'right',
  }
);

export default createAppContainer(RootStack);