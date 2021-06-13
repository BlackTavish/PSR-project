import React, { Component } from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class DetailScreen extends Component {

    render() {

    const clubs = this.props.route.params.clubs;
    const {players} = this.props.route.params.clubs;
        return (
            <View styles = {styles.container}> 
                <Image source={{uri: clubs.image_url}} style = {styles.imgContainer}/>
                <Text style = {styles.header}>{clubs.name}</Text>
                <Text style = {styles.textSize}>{clubs.description}</Text>
                <Text>{clubs.coach}</Text>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('players', {players})}>
                    <Text>Chuj kurwa</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',   
      },
      imgContainer:{
        width: 70,
        height: '20%'   
     },
     header: {
         fontSize: 22,
         fontWeight: 'bold'
     },
     textSize: {
         fontSize: 16
     }
    })