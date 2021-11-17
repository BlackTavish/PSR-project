import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'


export default class PlayersScreen extends Component {

    getPlayers = () => {
        return(
            this.props.route.params.players.map((player, index) =>
            {
                return(
                <View key = {index}>
                    <View style = {styles.playerView}>
                        <Text style = {styles.nameStyle}>{player.name}</Text>
                        <Text style = {styles.positionStyle}>{player.pos}</Text>
                    </View>
                </View>
                )
            })
        )
    }
    render() {
        return (
            <ScrollView>
                <View styles = {styles.container}>
                    {this.getPlayers()}
                </View>
            </ScrollView>
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
        height: 60,
        marginLeft: 20,
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 5,
         paddingLeft: 10,
      },
      nameStyle:{
         fontWeight: 'bold',
         fontSize: 20,
         
      },
      positionStyle:{
          fontSize: 16,
      },
  
})