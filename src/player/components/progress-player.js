import React from 'react'
import {
    View,
    StyleSheet,
    Slider
} from 'react-native'

function ProgressPlayer(props) {
    return (
        <View style={styles.container}>
            <Slider
                maximumValue={props.duration}
                minimumValue={0}
                onSlidingComplete={props.onSlidingComplete}
                style={styles.slider}
                value={props.progress}
                maximumTrackTintColor="rgba(255, 255, 255, .30)"
                minimumTrackTintColor='rgba(255, 255, 255, .5)'
                thumbTintColor='white'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    slider: {
        width: '100%'
    }
})

export default ProgressPlayer