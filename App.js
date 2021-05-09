import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {Text} from 'react-native';
import Home from './components/Home'
import Menu from './components/Menu';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import LeagueScreen from './components/LeagueScreen';

const Drawer = createDrawerNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="home"
           drawerContent = {props => <Menu {...props}/>}>
            <Drawer.Screen name="home" component={Home}/>
            <Drawer.Screen name="premierleague" component={LeagueScreen}/>
            <Drawer.Screen name="laliga" component={LeagueScreen}/>
            <Drawer.Screen name="bundesliga" component={LeagueScreen}/>
            <Drawer.Screen name="seriea" component={LeagueScreen}/>
            <Drawer.Screen name="ligue1" component={LeagueScreen}/>
            <Drawer.Screen name="eredivise" component={LeagueScreen}/>
            <Drawer.Screen name="premjer" component={LeagueScreen}/>
            <Drawer.Screen name="ekstraklasa" component={LeagueScreen}/>
          </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;