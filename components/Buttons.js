import React, {Component} from 'react';
import{
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

class Buttons extends Component {
    render() {
        const {title, onPress} = this.props;
        return (
            <TouchableOpacity style={styles.button} onPress={() => onPress()}>
                <Text style = {styles.color}>{title}</Text>     
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    button:{
        minWidth:120,
        minHeight:40,
        borderColor:'black',
        color: 'black',
        borderWidth:2,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
        marginBottom:5
    },
    color:{
        color:'white'
    }
})

export default Buttons;