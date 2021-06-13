import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {Text} from 'react-native';
import Home from './components/Home'
import Menu from './components/Menu';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import LeagueScreen from './components/LeagueScreen';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from './components/DetailScreen';
import PlayersScreen from './components/PlayersScreen';

const Drawer = createDrawerNavigator();

class App extends Component {

  navigationDrawer = () => {
    return (
          <Drawer.Navigator initialRouteName="home" 
           drawerContent = {props => <Menu {...props}/>} screenOptions = {{headerShown: false}}>
            <Drawer.Screen name="home" component={Home}/>
            <Drawer.Screen name="premierleague" component={LeagueScreen}/>
            <Drawer.Screen name="laliga" component={LeagueScreen}/>
            <Drawer.Screen name="bundesliga" component={LeagueScreen}/>
            <Drawer.Screen name="seriea" component={LeagueScreen}/>
            <Drawer.Screen name="ligue1" component={LeagueScreen}/>
            <Drawer.Screen name="eredivise" component={LeagueScreen}/>
            <Drawer.Screen name="premjer" component={LeagueScreen}/>
            <Drawer.Screen name="ekstraklasa" component={LeagueScreen}/>
            <Drawer.Screen name="details" component = {DetailScreen}/>
            <Drawer.Screen name="players" component = {PlayersScreen}/>
          </Drawer.Navigator>
    );
  }
  render() {
    return (
      <NavigationContainer>
       {this.navigationDrawer()}
      </NavigationContainer>
    );
  }
}

export default App;