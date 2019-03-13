import React from 'react';
import {
	TouchableHighlight,
	TouchableOpacity,
	TouchableWithoutFeedback,
	StyleSheet,
	Text,
	Platform
}from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const playIcon = Platform.select({
	ios: 'ios-play',
	android: 'md-play'
	});

const pauseIcon = Platform.select({
	ios:'ios-pause',
	android: 'md-pause'
})

function PlayPause (props){
	return (
		<TouchableHighlight
			onPress={props.onPress}			
			
			hitSlop={styles.hitSlopSyle}
		>
		{
			props.paused?			
			<Icon name={playIcon} size={25} color={'white'}/>
			:
			<Icon name={pauseIcon} size={25} color={'white'}/>			
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
		borderWidth:1,
		borderRadius: 10,
		borderColor:'white',
		backgroundColor: 'gray',
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

	}



})
export default PlayPause;