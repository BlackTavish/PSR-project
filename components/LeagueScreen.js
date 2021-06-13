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
            this.getDataPL();
        }
        else if(this.props.route.params.leagueFlag === 'LL'){
            this.getDataLL();
        }
        else if(this.props.route.params.leagueFlag === 'BUN'){
            this.getDataBUN();
        }
        else if(this.props.route.params.leagueFlag === 'SA'){
            this.getDataSA();
        }
        else if(this.props.route.params.leagueFlag === 'L1'){
            this.getDataL1();
        }
        else if(this.props.route.params.leagueFlag === 'ERV'){
            this.getDataERV();
        }
        else if(this.props.route.params.leagueFlag === 'RUS'){
            this.getDataRUS();
        }
        else if(this.props.route.params.leagueFlag === 'POL'){
            this.getDataPOL();
        }
    }

    async getDataPL(){
        this.setState({
            saveData: await service.getPremierLeague(),
            isLoading: false
        })     
    }
    async getDataLL(){
        this.setState({
            saveData: await service.getLaLiga(),
            isLoading: false
        })     
    }
    async getDataBUN(){
        this.setState({
            saveData: await service.getBundesliga(),
            isLoading: false
        })     
    }
    async getDataSA(){
        this.setState({
            saveData: await service.getSerieA(),
            isLoading: false
        })     
    }
    async getDataL1(){
        this.setState({
            saveData: await service.getLigue1(),
            isLoading: false
        })     
    }
    async getDataERV(){
        this.setState({
            saveData: await service.getEredivise(),
            isLoading: false
        })     
    }
    async getDataRUS(){
        this.setState({
            saveData: await service.getPremjer(),
            isLoading: false
        })     
    }
    async getDataPOL(){
        this.setState({
            saveData: await service.getEkstraklasa(),
            isLoading: false
        })     
    }

    renderClubs(){
        return this.state.saveData.map((clubs, index) => 
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
     imgContainer:{
        width:90,
        height: '90%',
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
