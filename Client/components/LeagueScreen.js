import React, { Component } from 'react'
import Service from './Service'
import {Text,View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const service = new Service();


export default class LeagueScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            saveData: null, 
            isLoading: true,
        };
    }


    componentDidMount(){
        if(this.props.route.params.leagueFlag === 'PL'){
            this.getLeagueName("premier_league");
        }
        else if(this.props.route.params.leagueFlag === 'LL'){
            this.getLeagueName("la_liga");
        }
        else if(this.props.route.params.leagueFlag === 'BUN'){
            this.getLeagueName("bundesliga");
        }
        else if(this.props.route.params.leagueFlag === 'SA'){
            this.getLeagueName("serie_a");
        }
        else if(this.props.route.params.leagueFlag === 'L1'){
            this.getLeagueName("ligue_1");
        }
        else if(this.props.route.params.leagueFlag === 'ERV'){
            this.getLeagueName("eredivisie");
        }
        else if(this.props.route.params.leagueFlag === 'RUS'){
            this.getLeagueName("premjer_liga");
        }
        else if(this.props.route.params.leagueFlag === 'POL'){
            this.getLeagueName("ekstraklasa");
        }
        else if(this.props.route.params.leagueFlag === 'CHA'){
            this.getLeagueName("championship");
        }
        else if(this.props.route.params.leagueFlag === 'NOS'){
            this.getLeagueName("nos");
        }
        else if(this.props.route.params.leagueFlag === 'MLS'){
            this.getLeagueName("mls");
        }
    }



    async getLeagueName(leagueName){
      
        this.setState({
            saveData: await service.getLeague(leagueName),
            isLoading: false
        })     
    }
    
    renderClubs(){
        console.log(this.state.saveData);
        return this.state.saveData.league.map((clubs, index) => 
        {
            console.log(clubs)
            return(
                <TouchableOpacity key = {index} onPress = {() => this.props.navigation.navigate('details', {clubs})}>
                    <View style = {styles.clubsView}>
                        <Image source={{uri: clubs.image_url}} style = {styles.imgContainer}/>
                        <Text style = {styles.textStyle}>{clubs.name}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        )
    }

    render() {
            return(
                <View style = {styles.container}>
                    <ScrollView>
                        {this.state.isLoading ? <Text>Loading...</Text> : this.renderClubs()}
                    </ScrollView>
                </View>
            );  
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        
      },
      clubsView: {
        width: '90%',
        height: 90,
        marginLeft: 20,
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 5,
        flex: 1,
        paddingLeft: 20,
        alignItems:'center',
        flexDirection:'row',
      },
     imgContainer:{
        width:70,
        height: '80%',
        resizeMode: 'contain'
        
     },
      textStyle:{
        fontWeight: 'bold',
        fontSize: 17,
        paddingLeft: 30,
        flex: 1,
        flexWrap: 'wrap'
      }
})
