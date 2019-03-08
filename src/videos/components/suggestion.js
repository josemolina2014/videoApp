import React from "react";
import {
    View,
    Image,
    Text,
    StyleSheet
  } from "react-native";

function Sugesstion(props){
    return (
        <View style= {styles.container}>
            <View style={styles.left}>
                <Image
                    style= {styles.cover}
                    source = {require('../../../assets/logo.png')}
                />
            </View>
            <View syles={styles.right}>
                <Text style={styles.title}></Text>
                <Text style={styles.year}></Text>
                <Text styls={styles.ratng}></Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create ({
    container : {

    },
    left : {

    },
    right :{

    },
    cover : {

    },
    title :{

    },
    year :{

    },
    ratng: {

    }

    
})

export default Sugesstion