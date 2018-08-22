import React from 'react'
import {
    View,
    StyleSheet,
    TouchableHighlight,
    Image
} from 'react-native'

function FullScreen(props) {
    return (
        <View style={styles.container}>
            <TouchableHighlight
                onPress={props.onPressFullScreen}
                style={styles.container}
                underlayColor='red'
                hitSlop={{
                    left: 5,
                    top: 5,
                    bottom: 5,
                    right: 5
                }}
            >
                <Image
                    style={{
                        width: 24,
                        height: 24
                    }}
                    source={require('../../icons/fullcreen.png')} />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
    }
})

export default FullScreen