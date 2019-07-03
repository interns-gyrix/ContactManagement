import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import Signup from "./signup/signup";
import AddContact from "./addc/AddContact";
import Utilities from "./utilities/utilities";
import Profile from "./profile/profile";
import FlatListBasics from "./contactpage/contactpage";
import Login from "./login/login";
import Sidebar from "./../components/sidebar/sidebar"
import { initialiseFirebase } from "../../util/firebaseManager";
import AboutUs from "./aboutUs/aboutUs";

initialiseFirebase();

const AppNavigator = createStackNavigator({
  Signup: {
    screen: Signup
  },
  Utilities: {
    screen: Utilities
  },
  AddContact: {
    screen: AddContact
  },
  Profile: {
    screen: Profile
  },
  FlatListBasics: {
    screen: FlatListBasics
  },
  Login: {
    screen: Login
  },
  AboutUs: {
    screen: AboutUs
  },
},
  {
    initialRouteName: "AboutUs"
  }
);


const RootStack = createDrawerNavigator(
  {
    Login: {
      screen: AppNavigator,
      navigationOptions: {
        // drawerLockMode: "locked-closed",
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