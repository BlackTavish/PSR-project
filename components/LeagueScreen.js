import React, { Component } from 'react'
import Service from './Service'
import {Text,View, StyleSheet, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const service = new Service();


export default class LeagueScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            przechowanieLig: null, 
            isLoading: true
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
            przechowanieLig: await service.getPremierLeague(),
            isLoading: false
        })     
    }
    async getDataLL(){
        this.setState({
            przechowanieLig: await service.getLaLiga(),
            isLoading: false
        })     
    }
    async getDataBUN(){
        this.setState({
            przechowanieLig: await service.getBundesliga(),
            isLoading: false
        })     
    }
    async getDataSA(){
        this.setState({
            przechowanieLig: await service.getSerieA(),
            isLoading: false
        })     
    }
    async getDataL1(){
        this.setState({
            przechowanieLig: await service.getLigue1(),
            isLoading: false
        })     
    }
    async getDataERV(){
        this.setState({
            przechowanieLig: await service.getEredivise(),
            isLoading: false
        })     
    }
    async getDataRUS(){
        this.setState({
            przechowanieLig: await service.getPremjer(),
            isLoading: false
        })     
    }
    async getDataPOL(){
        this.setState({
            przechowanieLig: await service.getEkstraklasa(),
            isLoading: false
        })     
    }

    renderClubs(){
        return this.state.przechowanieLig.map((clubs, index) => 
        {
            return(
                <View style = {styles.clubsView}>
                    {/* <Image source = {{uri: clubs.image_url}} key = {index}/> */}
                    <Text style = {styles.textStyle} key = {index}> {clubs.name}</Text>
                </View>
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
        height: 100,
        marginLeft: 20,
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 5,
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
      },
      imgContainer:{
        width: 60,
        height: 75,
        
      },
      textStyle:{
        fontWeight: 'bold'
      }
})
