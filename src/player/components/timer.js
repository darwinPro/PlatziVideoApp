import React from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'

function Timer(props) {
    return (
        <View style={styles.container}>
            <Text>{props.progress}</Text>
            <Text style={styles.left}>/</Text>
            <Text>{props.duration}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    left:{
        paddingHorizontal:5
    }
})

export default Timer