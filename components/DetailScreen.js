import React, { Component } from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class DetailScreen extends Component {

    render() {
    const clubs = this.props.route.params.clubs;
    const {players} = this.props.route.params.clubs;

        return (
            <View styles = {styles.container}> 
               <View styles = {styles.imageStyle}>   
                    <Image source={{uri: clubs.image_url}} style = {styles.imgContainer}/>
               </View>
                    <Text style = {styles.header}>{clubs.name}</Text>
                    <Text style = {styles.content}>{clubs.description}</Text>
                    <Text style = {styles.coachText}>Trener zespołu:</Text>
                    <Text style = {styles.coachName}>{clubs.coach}</Text>
                    <View style = {styles.centerButton}>
                        <TouchableOpacity style = {styles.buttonProperties} onPress = {() => this.props.navigation.navigate('players', {players})}>
                            <Text style = {styles.textProperties}>Wyświetl zawodników</Text>
                        </TouchableOpacity>
                    </View>
                
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%' 
      },
    centerButton:{
        alignItems:'center',
        justifyContent: 'center',
    },
    imgContainer:{
        width:400,
        height:  200,
        resizeMode: 'contain',
        marginBottom: 20,
        marginTop: 15
    },
    imageStyle:{
        alignItems:'center',
        justifyContent: 'center',
    },
     header: {
         fontSize: 32,
         fontWeight: 'bold',
         textAlign: 'center',
         marginBottom: 20
     },
     content:{
        fontSize: 20,
        marginLeft: 10
     },
     textProperties: {
         fontSize: 16,
         color: 'white',
         textAlign: 'center'
     },
     coachText:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 20
     },
     coachName:{
        marginLeft: 10,
        marginTop: 5,
        fontSize: 18
     },
     buttonProperties:{
        width:200,
        height:45,
        backgroundColor: '#4C4C4C',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
     }
    })