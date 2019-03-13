import React from 'react';
import {
	TouchableHighlight,
	TouchableOpacity,
	TouchableWithoutFeedback,
	StyleSheet,
    Text,
    View,
    Platform
}from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/FontAwesome';

const expandIcon = Platform.select({
    ios: 'ios-expand',
    android: 'md-expand',
  });

  const contractIcon = Platform.select({
    ios: 'ios-contract',
    android: 'md-contract'
  });


function FullScreen (props){
	return (
		<TouchableHighlight
			onPress={props.onPress}
			style = {styles.container}
			underlayColor = 'transparent'
			hitSlop={styles.hitSlopSyle}
		>
		{
			props.fullScreen ?
			<Icon style={styles.expandIcon} name={contractIcon} size={25} color={'white'} />
			:
			<Icon style={styles.expandIcon} name={expandIcon} size={25} color={'white'} />            
		}        
		</TouchableHighlight>
        
	)
}

const styles = StyleSheet.create({
	container :{
		justifyContent : 'center',
		paddingHorizontal: 10,
		height : 25,
		marginRight: 10,
		marginVertical:5,		
		borderRadius: 50,	
		//paddingLeft: '90%'
		position: 'absolute', right: 0
		
	},
	button:{
		color: 'white',
		fontSize : 10,
		fontWeight: 'bold',
	},

	hitSlopSyle : {
		left: 5,
		top: 5,
		bottom: 5,
		right: 5,

	},

    expandIcon: {
        justifyContent: 'flex-end'
      }


})
export default FullScreen;