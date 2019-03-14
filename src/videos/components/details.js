import React from 'react';
import {
    View,
    Text, 
    Image,
    StyleSheet
} from 'react-native';

function Details (props) {
    return (
        <View>
            <Image 
                style= {styles.cover}
                source={{uri: props.medium_cover_image}}
            />
            <Text>{props.title}</Text>
            <Text>{props.description_full}</Text>            
        </View>
    )
}

const styles = StyleSheet.create({
    contain :{

    },
    cover:{
        width:125,
        height: 190,
    }
})
export default Details;