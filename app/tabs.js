import 'react';
import 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import CustomBottomBar from './lib/CustomBottomBar';
import HomeScreen from './tab/home';
import OtherScreen from './tab/other';
import ListScreen from './tab/list';

const noHeader = {
  navigationOptions: {
    header: null,
  },
};

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  List: {
    screen: ListScreen,
  },
});

const OtherStack = createStackNavigator({
  Other: {
    screen: OtherScreen,
    ...noHeader,
  },
});

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Other: OtherStack,
  },
  { tabBarComponent: CustomBottomBar },
);
