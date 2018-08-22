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
import ProgressPlayer from '../components/progress-player';
import Timer from '../components/timer';
import FullScreen from '../components/full-screen';

class Player extends Component {
    state = {
        loading: true,
        pausar: false,
        progress: 0,
        duration: 0,
        fullscreen: false
    }
    onBuffer = ({ isBuffering }) => {
        this.setState({
            loading: isBuffering
        })
    }
    onLoad = () => {
        this.setState({
            loading: false
        })
    }
    onPress = () => {
        this.setState({
            pausar: !this.state.pausar
        })
    }
    setTime = (progress) => {
        this.setState({
            progress: progress.currentTime,
            duration: progress.seekableDuration
        })
    }
    onSlidingComplete = value => {
        this.player.seek(value)
    }
    onPressFullScreen = () => {
        if(!this.state.fullscreen){
            this.player.presentFullscreenPlayer();
        }else{
            this.player.dismissFullscreenPlayer();
        }
    }
    render() {
        return (
            <LayoutVideo
                loading={this.state.loading}
                video={
                    <Video
                        ref={(ref) => {
                            this.player = ref
                        }}
                        source={{ uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' }}
                        style={styles.video}
                        resizeMode='contain'
                        onBuffer={this.onBuffer}
                        onLoad={this.onLoad}
                        paused={this.state.pausar}
                        onProgress={this.setTime}
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
                            paused={this.state.pausar}
                        />

                        <ProgressPlayer
                            progress={this.state.progress}
                            duration={this.state.duration}
                            onSlidingComplete={this.onSlidingComplete}
                        />
                        <Timer
                            progress={formatedTime(this.state.progress)}
                            duration={formatedTime(this.state.duration)}
                        />
                        <FullScreen
                            onPressFullScreen={this.onPressFullScreen}
                        />
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

leftPad = numero => {
    const pad = '00';
    return pad.substring(0, pad.length - numero.length) + numero;
}
formatedTime = secons => {
    const minutos = parseInt(secons / 60, 10)
    const seconss = parseInt(secons % 60, 10)
    return `${minutos} : ${this.leftPad(seconss.toString())}`
}

export default Player;