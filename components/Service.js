import React, { Component } from 'react'
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

export default class Service extends Component {
    
    baseURL = 'http://10.0.2.2:3000/';
    
    getPremierLeague = async () => {
        return await fetch(this.baseURL + 'clubsPL', {method: 'GET', headers: 
        {Accept: 'application/json', 'Content-Type': 'application/json'}}).then(
            (response) => {return response.json()}
        ).then((data) => {
            if(data){
                return data;  
            }
        });
    }

    getLaLiga = async () => {
        return await fetch(this.baseURL + 'clubsLL', {method: 'GET', headers: 
        {Accept: 'application/json', 'Content-Type': 'application/json'}}).then(
            (response) => {return response.json()}
        ).then((data) => {
            if(data){
                return data;  
            }
        });
    }
    getBundesliga = async () => {
        return await fetch(this.baseURL + 'clubsBUN', {method: 'GET', headers: 
        {Accept: 'application/json', 'Content-Type': 'application/json'}}).then(
            (response) => {return response.json()}
        ).then((data) => {
            if(data){
                return data;  
            }
        });
    }
    getSerieA = async () => {
        return await fetch(this.baseURL + 'clubsSA', {method: 'GET', headers: 
        {Accept: 'application/json', 'Content-Type': 'application/json'}}).then(
            (response) => {return response.json()}
        ).then((data) => {
            if(data){
                return data;  
            }
        });
    }
    getLigue1 = async () => {
        return await fetch(this.baseURL + 'clubsL1', {method: 'GET', headers: 
        {Accept: 'application/json', 'Content-Type': 'application/json'}}).then(
            (response) => {return response.json()}
        ).then((data) => {
            if(data){
                return data;  
            }
        });
    }

}
