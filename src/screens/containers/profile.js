import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';

import Icon from '../../sections/components/icon';

class Profile extends Component {
    static navigationOptions = () => {
        return {
          title: 'Perfil',
          tabBarIcon: <Icon  icon='||'/>
        }
      }

    componentDidMount(){
    this.focus = this.props.navigation.addListener('didFocus', () => {
        console.log('didFocus');
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor('#022c43');
        });
    }
    componentWillUnmount(){
        this.focus.remove();
    }   
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Nombre de usuario</Text>
        <Button
          title="Cerrar sesión"
          color="#67a52e"
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})


export default Profile;