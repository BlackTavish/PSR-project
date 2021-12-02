import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
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
            <Drawer.Screen name="premier_league" component={LeagueScreen}/>
            <Drawer.Screen name="la_liga" component={LeagueScreen}/>
            <Drawer.Screen name="bundesliga" component={LeagueScreen}/>
            <Drawer.Screen name="serie_a" component={LeagueScreen}/>
            <Drawer.Screen name="ligue_1" component={LeagueScreen}/>
            <Drawer.Screen name="eredivisie" component={LeagueScreen}/>
            <Drawer.Screen name="premjer_liga" component={LeagueScreen}/>
            <Drawer.Screen name="ekstraklasa" component={LeagueScreen}/>
            <Drawer.Screen name="championship" component={LeagueScreen}/>
            <Drawer.Screen name="nos" component={LeagueScreen}/>
            <Drawer.Screen name="mls" component={LeagueScreen}/>
            <Drawer.Screen name="details" component = {DetailScreen}/>
            <Drawer.Screen name="players" component = {PlayersScreen}/>
          </Drawer.Navigator>
    );
  }
  render() {
    return (
      
       
      <NavigationContainer>
       {this.navigationDrawer()}
       <StatusBar backgroundColor = "#4C4C4C"
                 barStyle="light-content"/>
      </NavigationContainer>
    );
  }
}

export default App;