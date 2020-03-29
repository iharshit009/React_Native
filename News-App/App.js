import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/screens/Home';
import DetailScreen from './src/screens/DetailScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  DetailScreen: {screen: DetailScreen},

},
{
  headerMode:'none'
}
);

const App = createAppContainer(MainNavigator);

export default App;
