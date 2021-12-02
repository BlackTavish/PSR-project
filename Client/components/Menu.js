import {DrawerContentScrollView} from '@react-navigation/drawer';
import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {Drawer} from 'react-native-paper';


class Menu extends Component {
    
    constructor(props){
        super(props);
    }

 render() {
   return(

   
    <View style={styles.container}>
      <DrawerContentScrollView {...this.props} style={styles.scrollView}>
        <Text style={styles.title}>FlashGoal</Text>
        <View style={styles.imageContainer}>
         <Image style = {styles.image} 
         source = {require('../images/ball.png')}>
         </Image>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <Text
            style={styles.button}
            onPress={() => this.props.navigation.navigate('home')}>
            Home
          </Text>
         </Drawer.Section>
         <Drawer.Section style={styles.drawerSectionLower}>
          <Text
            style={styles.button}
            onPress={() => this.props.navigation.navigate('premier_league', {leagueFlag: 'PL'})}>
            Premier League
          </Text>
          <Text
            style={styles.button}
            onPress={() => this.props.navigation.navigate('la_liga', {leagueFlag: 'LL'})}>
            La Liga
          </Text>
          <Text
            style={styles.button}
            onPress={() => this.props.navigation.navigate('bundesliga', {leagueFlag: 'BUN'})}>
            Bundesliga
          </Text>
          <Text
            style={styles.button}
            onPress={() => this.props.navigation.navigate('serie_a', {leagueFlag: 'SA'})}>
            Serie A
          </Text>
          <Text
            style={styles.button}
            onPress={() => this.props.navigation.navigate('ligue_1', {leagueFlag: 'L1'})}>
            Ligue 1
          </Text>
          <Text
            style={styles.button}
            onPress={() => this.props.navigation.navigate('eredivise', {leagueFlag: 'ERV'})}>
            Eredivise
          </Text>
          <Text
            style={styles.button}
            onPress={() => this.props.navigation.navigate('premjer_liga', {leagueFlag: 'RUS'})}>
            Prejmjer League
          </Text>
          <Text
            style={styles.button}
            onPress={() => this.props.navigation.navigate('ekstraklasa', {leagueFlag: 'POL'})}>
            Ekstraklasa
          </Text>
          <Text
            style={styles.button}
            onPress={() => this.props.navigation.navigate('championship', {leagueFlag: 'CHA'})}>
            Championship
          </Text>
          <Text
            style={styles.button}
            onPress={() => this.props.navigation.navigate('nos', {leagueFlag: 'NOS'})}>
            Liga NOS
          </Text>
          <Text
            style={styles.button}
            onPress={() => this.props.navigation.navigate('mls', {leagueFlag: 'MLS'})}>
            MLS
          </Text>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
   )
}
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'gray',
    },
    scrollView: {
      width: '100%',
    },
    title: {
      fontSize: 35,
      textAlign: 'center',
      color: 'white',
      marginTop: 10,
      marginBottom: 10,
      fontFamily: 'Langar-Regular'
    },
    imageContainer: {
      width: '90%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    image: {
      width: '85%',
      height: 200,
      left: 15
    },
    buttonContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    button: {
      width: '90%',
      height: 40,
      fontSize: 15,
      textAlign: 'center',
      backgroundColor: '#4C4C4C',
      color: 'white',
      marginTop: 15,
      textAlignVertical: 'center',
    },
    line: {
      width: '100%',
      height: 2,
      backgroundColor: 'black',
    },
    drawerSection: {
      borderBottomColor: 'black',
      borderBottomWidth: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: 15,
    },
    drawerSectionLower: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    drawerSectionLineAbove: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderTopWidth: 4
    }
  });
  
  export default Menu;