import React, { Component } from 'react';
import Video from 'react-native-video'
import {
    StyleSheet,
    ActivityIndicator,
    Text
} from 'react-native'
import LayoutVideo from '../components/layout-video';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';

class Player extends Component {
    state = {
        loading:true,
        pausar:false
    }
    onBuffer = ({isBuffering})=>{
        this.setState({
            loading:isBuffering
        })
    }
    onLoad = () =>{
        this.setState({
            loading:false
        })
    }
    onPress = () => {
        this.setState({
            pausar: !this.state.pausar
        })
    }
    render() {
        return (
            <LayoutVideo
                loading={this.state.loading}
                video={
                    <Video
                        source={{ uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' }}
                        style={styles.video}
                        resizeMode='contain'
                        onBuffer={this.onBuffer}
                        onLoad= {this.onLoad}
                        paused= {this.state.pausar}
                    />
                }
                loader={
                    <ActivityIndicator
                        color="red"

                    />
                }
                control={
                    <ControlLayout>
                        <PlayPause
                            onPress={this.onPress}
                            paused={this.state.pausar   }
                        />
                        <Text>ProgressBar</Text>
                        <Text>Time left</Text>
                        <Text>FullScreen</Text>
                    </ControlLayout>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    }
})

export default Player;