import React, { Component } from 'react';
import { 
    TouchableOpacity,
    StyleSheet,
    View,
    Text
} from 'react-native';

class Header extends Component {
    
    render() {
        const {title, navigation} = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.hamburgerBtn} onPress={() => navigation.openDrawer()}>
                    <View style={styles.bar}></View>
                    <View style={styles.bar}></View>
                    <View style={styles.bar}></View>
                </TouchableOpacity>
                <Text style={styles.titlePage}>{title}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '15%',
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    hamburgerBtn: {
        width: 50,
        height: 50,
        backgroundColor: 'gray',
        borderWidth: 2,
        borderColor: 'black',
        position: 'absolute',
        left:20,
        top:'50%',
        transform: [{translateY: -25}],
        display:'flex',
        justifyContent:'space-evenly',
        alignItems: 'center'
        
    },
    titlePage:{
        paddingLeft: 25,
        fontSize:30,
        fontFamily:'Langar-Regular',
    },
    bar: {
        width:'70%',
        height: 3,
        backgroundColor: 'black'
    }
})

export default Header;