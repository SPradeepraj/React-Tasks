
// import React, { Component } from 'react';
// import VideoPlayer from 'react-video-js-player';
 
// class  Task2 extends Component {
//     player = {}
//     state = {
//         video: {
//             src: "Video.mp4",
//             poster: "Video.mp4"
//         }
//     }
//     // image(Show){
//     //     console.log("image display", Image)
//     //     this.Show = Image;
    
//     // }
//     onPlayerReady(player){
//         console.log("Player is ready: ", player);
//         this.player = player;
//     }
//     onVideoPlay(duration){
//         console.log("Video played at: ", duration);
//     }
 
//     onVideoPause(duration){
//         console.log("Video paused at: ", duration);
//     }
 
//     onVideoTimeUpdate(duration){
//         console.log("Time updated: ", duration);
//     }
 
//     onVideoSeeking(duration){
//         console.log("Video seeking: ", duration);
//     }
//     onVideoSeeked(from, to){
//         console.log(`Video seeked from ${from} to ${to}`);
//     }
 
//     onVideoEnd(){
//         console.log("Video ended");
//     }
 
//     render() {
//         return (

//         // <div className='Image'> <image src='Image.jpg' alt='' width={'400'} height={'200'} onClick ={"this.show"}></image>     
//         <div>
//         <VideoPlayer
//             controls={true} src={this.state.video.src}  poster={this.state.video.poster}
//             width="420"
//             height="210"
//             onReady={this.onPlayerReady.bind(this)}
//             onPlay={this.onVideoPlay.bind(this)}
//             onPause={this.onVideoPause.bind(this)}
//             onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
//             onSeeking={this.onVideoSeeking.bind(this)}
//             onSeeked={this.onVideoSeeked.bind(this)}
//             onEnd={this.onVideoEnd.bind(this)}
//         />
//     </div>
// );
// }
// }

// import React from 'react'

// import VideoPlayer from 'react-video-js-player';

// function Task2() {
//     return (
//         <div className='App'>
//         <VideoPlayer width ="480px"
//         height="240px"
//         controls url="https://youtu.be/TQeeEfWCD5I"/>
            
//         </div>

//     )
// }

// export default Task2

import React from 'react'

function Task2() {
    return (
        <div>
           <img src={require('./Render/Image.jpg')} height ={'300'} width={'500'} alt=''/> <br/><br/> 
           <video controls src={require ('./Render/Video.mp4')} height ={'300'} width={'500'} alt=''> </video>
        </div>
    )
}

export default Task2
