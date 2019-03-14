import React, {Component} from 'react';
import Video from 'react-native-video';
import { 
    StyleSheet,
    ActivityIndicator, 
    Text, 
    Platform,
    TouchableHighlight,
    View,
    Slider
} from "react-native";
import Layout from '../components/layout';
import ControlLayout from '../components/controlLayout';
import PlayPause from '../components/play-pause';
import FullScreen from '../components/fullScreen';



class Player extends Component {
  constructor(props) {
    super(props);
  
    this.onLoad = this.onLoad.bind(this);
    this.onProgress = this.onProgress.bind(this);
  }

  state ={
    loading: true,
    paused: false,
    fullScreen: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    valueSlider: 0,
    durationMillis: 0,
    positionMillis: 0,
    valueSlider: 0,
    value: 0,
  }
  onBuffer = ({isBuffering}) => {
    this.setState({
      loading : isBuffering
    })
  }
  onLoad(data) {
        this.setState({
          loading: false,
          duration: data.duration
        });
  }

  playPause = () => {
        this.setState({
            paused : !this.state.paused
        })
  }
  fullScreen = () => {
    this.setFullScreenPromise()
      .then(() => {
        if(this.state.fullScreen)
          this.player.presentFullscreenPlayer();
        else this.player.dismissFullscreenPlayer();
      });
  }

  setFullScreenPromise = () => {
    return new Promise((resolve, reject) => {
      resolve(this.setState({
        fullScreen: !this.state.fullScreen
      }))
    }).catch(error => console.error(error))
  }
  fullScreenPlayerWillDismiss = () => {
    this.setState({
      fullScreen: false
    })
  }
   onProgress(data) {
    this.setState({currentTime: data.currentTime});
  }
  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    } else {
      return 0;
    }
  }

  onChange = (value) => {
    this.setState(() => ({
      valueSlider: value,
    }));
  }

  onSliding = () => {
    this.setState((prevState) => ({
      value: prevState.valueSlider,
    }));
    
   this.player.seek(this.state.valueSlider);
  }

  onPlaybackStatusUpdate = ({ positionMillis, durationMillis }) => {
    if (positionMillis && durationMillis) {
      this.setState(() => ({ positionMillis }));
      this.onChange(this.state.positionMillis);
    }else return;
    if (!this.state.shouldPlay && this.state.showControls) {
      clearTimeout(this.timer);
      this.setState({showControls: true})
    }
  }

componentWillUnmount() {
    clearTimeout(this.timer);
  }
    render (){

      const flexCompleted = this.getCurrentTimePercentage() * 100;
      const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
        return (
            <Layout 
                loading = {this.state.loading}
                video= {
                    <Video
                        source = {{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
                        style = {styles.video}
                        resizeMode = "cover"
                        onBuffer={this.onBuffer}
                        onLoad = {this.onLoad}
                        paused = {this.state.paused}
                        ref={(ref) => {
                            this.player = ref
                        }}
                        onFullscreenPlayerWillDismiss={this.fullScreenPlayerWillDismiss}
                        onProgress={this.onProgress}
                        fullscreenAutorotate ={true}
                        fullscreenOrientation = 'landscape'
                        onPlaybackStatusUpdate = {this.onPlaybackStatusUpdate}
                    />
                }
                loader = {
                    <ActivityIndicator color="red"/>
                }
                controls={
                  <ControlLayout>
                    <PlayPause 
                      onPress={this.playPause}
                      paused = {this.state.paused}
                    />                                        

                      <View style={styles.slidercontainer}>
                        <Slider
                            maximumValue={this.state.duration}
                            minimumValue={0}
                            onValueChange={this.onChange}
                            onSlidingComplete={this.onSliding}
                            style={styles.slider}
                            value={this.state.currentTime}
                            step={this.state.duration / 1000}
                            maximumTrackTintColor="rgba(0,0,0,.40)"
                            minimumTrackTintColor={
                              Platform.OS === 'ios'
                                ? 'white'
                                : '#283593'
                            }
                            thumbTintColor="#1A237E"
                          />
                        
                      </View>
                      
                    <Text style={styles.time}>{this.covertToSec(this.state.currentTime)} / {this.covertToSec(this.state.duration)}</Text>
                       
                    <FullScreen 
                        onPress={this.fullScreen}  
                        fullScreen = {this.state.fullScreen}                            
                    />
                  </ControlLayout>
                }
            />
        )
    }

    covertToSec(totalSeconds){
      
      const seconds = Math.floor(totalSeconds % 60);
      const minutes = Math.floor(totalSeconds / 60);
    
      const padWithZero = number => {
        const string = number.toString();
        if (number < 10) {
          return `0${string}`;
        }
        return string;
      };
      return `${padWithZero(minutes)}:${padWithZero(seconds)}`;     
    }
}

const styles = StyleSheet.create({
  video:{
      position: 'absolute',
      left:0,
      right:0,
      bottom:0,
      top:0,
    }, 
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',    
    },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
    },
   progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
    },
  trackingControls :{
    paddingLeft: 20
  },

  slider: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 50,       
   
  }, 

slidercontainer: {
    height: Platform.OS === 'ios' ? 35 : 45,
    left: 25,
    right: 30,
    bottom: 0,
    backgroundColor: 'transparent',
    position: 'absolute',
    justifyContent: 'center',
    //paddingHorizontal: 25,
  },
  time :{
    marginRight:10,
    color: 'white',
    left: 10,
    top: 7,
  }
  });

  
  export default Player;