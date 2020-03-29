import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/screens/Home';
import PetFood from './src/screens/PetFood';
import PetMedicine from './src/screens/PetMedicine';
import PetParlour from './src/screens/PetParlour';
import PetAccessories from './src/screens/PetAccessories';
// import DetailProduct from './src/screens/DetailProduct';
import SplashScreen from './src/screens/SplashScreen';
import Auth_login from './src/screens/Auth_login';
import Auth_register from './src/screens/Auth_register';
import Contact from './src/screens/Contact';
import Treatment from './src/screens/Treatment';
import SearchQuery from './src/screens/SearchQuery';
import Logout from './src/screens/Logout';
import AddSubscription from './src/screens/AddSubscription';
import Profile from './src/screens/Profile';
import DetailProduct from './src/screens/DetailProduct'
import CustomDrawerNavigator from './src/components/CustomDrawerNavigator';
import AddSubscriptionView from './src/screens/AddSubscriptionView';
import PaymentFormView from './src/screens/PaymentFormView';

const PetFoodStack = createStackNavigator({
  'Pet Care': {
    screen: PetFood,
    navigationOptions: {
      header: null,
    },
  },
  DetailProduct: {screen: DetailProduct},
  SearchQuery: {
    screen: SearchQuery,
    navigationOptions: {
      header: null,
    },
  },
  AddSubscription: {screen: AddSubscription},
});

const PetAccessoriesStack = createStackNavigator({
  'Pet Accessories': {
    screen: PetAccessories,
    navigationOptions: {
      header: null,
    },
  },
  DetailProduct: {screen: DetailProduct},
});

const PetParlourStack = createStackNavigator({
  'Pet Parlour': {
    screen: PetParlour,
    navigationOptions: {
      header: null,
    },
  },
  DetailProduct: {screen: DetailProduct},
});

const PetMedicineStack = createStackNavigator({
  'Pet Medicine': {
    screen: PetMedicine,
    navigationOptions: {
      header: null,
    },
  },
  DetailProduct: {screen: DetailProduct},
});

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="md-menu" style={{color: tintColor}} />
        ),
        drawerLabel: 'Home',
      },
      screen: Home,
    },
    PetFood: {
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="md-menu" style={{color: tintColor}} />
        ),
        drawerLabel: 'Pet Food',
      },
      screen: PetFoodStack,
    },
    PetAccessories: {
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="md-menu" style={{color: tintColor}} />
        ),
        drawerLabel: 'Pet Accessories',
      },
      screen: PetAccessoriesStack,
    },

    PetParlour: {
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="md-menu" style={{color: tintColor}} />
        ),
        drawerLabel: 'Pet Parlour',
      },
      screen: PetParlourStack,
    },

    PetMedicine: {
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="md-menu" style={{color: tintColor}} />
        ),
        drawerLabel: 'Pet Medicine',
      },
      screen: PetMedicineStack,
    },

    Contact: {
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="md-menu" style={{color: tintColor}} />
        ),
        drawerLabel: 'Contact',
      },
      screen: Contact,
    },

    Treatment: {
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="md-menu" style={{color: tintColor}} />
        ),
        drawerLabel: 'Treatment',
      },
      screen: Treatment,
    },

    'Your Profile': {
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="md-menu" style={{color: tintColor}} />
        ),
        drawerLabel: 'Profile',
      },
      screen: Profile,
    },

    Logout: {
      screen: Logout,
    },
  },
  {
    contentComponent: CustomDrawerNavigator,
  },
);

DrawerNavigator.navigationOptions = ({navigation}) => ({
  swipeEnabled: navigation.state.index == 0,
});

const RegisterStack = createStackNavigator({
  Auth_login: {
    screen: Auth_login,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
  },
  Auth_register: {
    screen: Auth_register,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
  },
  Profile: {
    screen: Profile,
  },
});

const SplashNavigator = createSwitchNavigator(
  {
    Splash: {
      screen: SplashScreen,
      screen : Treatment,

      navigationOptions: {
        header: null,
      },
    },
    Register: RegisterStack,
  },
  {
    initialRouteName: 'Splash',
  },
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    Drawer: {screen: DrawerNavigator},
    Register: {screen: SplashNavigator},
  },
  {
    initialRouteName: 'Register',
  },
);

export default createAppContainer(AppSwitchNavigator);
