import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Search from '../../sections/containers/search';
import Icon from '../../sections/components/icon';

class Lucky extends Component {

  static navigationOptions = () =>{
    return {
      title: "voy a tener suerte",
      tabBarIcon: <Icon icon='⭐️' />,
      drawerIcon: <Icon icon='⭐️' />
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
      <View style={styles.container}>
        <Text>ðŸ€</Text>
        <Search />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Lucky