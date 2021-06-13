import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


export default class PlayersScreen extends Component {

    getPlayers = () => {
       
        return(
            this.props.route.params.players.map((player, index) =>{
                console.log(player);
                return(
                <View key = {index}>
                    <Text>{player.name}</Text>
                    <Text>{player.pos}</Text>
                </View>
                )
            })
        )
    }

    render() {
        return (
            <View styles = {styles.container}>
                {this.getPlayers()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        
      },
      playerView: {
        width: '90%',
        height: 110,
        marginLeft: 20,
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 5,
        flex: 1,
        paddingLeft: 20,
        alignItems:'center',
        flexDirection:'row',
      },
      textStyle:{
        fontWeight: 'bold',
        fontSize: 14,
        paddingLeft: 50
      }
})