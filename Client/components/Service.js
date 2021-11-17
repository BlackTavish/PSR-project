import React, { Component } from 'react'
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

export default class Service extends Component {
    
    baseURL = 'http://192.168.0.102:3000/api/';
    
    getLeague = async (leagueName) => {
       
        return await fetch(this.baseURL + "league?leagueName=" + leagueName, {method: 'GET', headers: 
        {Accept: 'application/json', 'Content-Type': 'application/json'}}).then(
            (response) => {return response.json()}
        ).then((data) => {
            if(data){
               
                 return data;  
            }
        });
    }

    
}
