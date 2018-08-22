import React from 'react'
import {
    View,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
    Image
} from 'react-native'

function PlayPause(props) {
    return (
        <TouchableHighlight
            onPress={props.onPress}
            style={styles.container}
            underlayColor='red'
            hitSlop={{
                left: 5,
                top: 5,
                bottom: 5,
                right: 5
            }}
        >
            {
                props.paused ?
                    <Image
                        style={{
                            width: 24,
                            height: 24
                        }}
                        source={require('../../icons/play.png')} />
                    :
                    <Image
                        style={{
                            width: 24,
                            height: 24
                        }}
                        source={require('../../icons/pause.png')} />
            }


        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 5,
        height: 25,
        marginVertical: 5,
    }
})

export default PlayPause