// // import React, { Component } from "react";

// //  class Task5 extends Component {
// //     constructor(props) {
// //     super(props)
// //     this.state = {
// //         count:0
// //     }
// //     setTimeout(function () {
        
// //     }, 1000); 
// //     setInterval()
    
// //     // It is a function that execute a JavaScript statement EVERY x interval.
    
// //     setInterval(function () {
// //            }, 2000); // Execute somethingElse() every 2 seconds.


// //     }}

// // export default Task5;

// //     this.startTimer = this.startTimer.bind(this)
// //     this.stopTimer = this.stopTimer.bind(this)
// //     this.resetTimer = this.resetTimer.bind(this)
// //     this.StartTimer = this.StartTimer.bind(this)
// // }
// // startTimer() {
// //     this.timer=setInterval((props) =>
// //     this.setstate({
// //         count:this.state.count+1
// //     }),1000












































































































































































































































// import React, { Component } from 'react'

// export class Task5 extends Component {
// constructor(props){
//     super(props);
//     this.state ={
//         count: 0,
//     }
// }


//  onStart = ()=> {
//     this.clearInterval();
// this.interval = setInterval(() =>{ 
//     this.setState(prevState =>({
//     count: parseInt(prevState.count) +1,
// }));
// },1000);
// };
  
// onStop = () => {
//     this.clearInterval();

// };

// onReset = () => {
//     this.clearInterval();
//     this.setState (prevState => ({
//         count:0,
//     }));
// };

// clearInterval = () =>{
//     clearInterval(this.interval);
// }


// onChangeStartingPoint = (e) =>{
//     this.clearInterval();
//     this.setState({
//         count:parseInt(e.target.value),
//     });
// }
// StartTimer(){
    
//     this.setInterval=setTimeout(()=>(
//         alert("success")) ,5000
//     )
// }

//     render() {
//         return (
//             <div>
//             <h1>STOP WATCH</h1>
//             <input onChange={this.onChangeStartingPoint} value={this.state.count}/><br/><br/><br/>
//             <div><input onChange={this.onChangeStartingPoint} value= {this.state.count} ></input></div><br/><br/>
//                 <button onClick={this.onStart}>Start Timer</button><br/><br/>
//                 <button onClick={this.onStop}>Stop Timer</button><br/><br/>
//                 <button onClick ={this.onReset}>Reset Timer</button><br/><br/>
               
                
//             </div>
//         )
//     }
// }

// export default Task5
