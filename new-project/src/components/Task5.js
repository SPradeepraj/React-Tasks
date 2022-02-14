import React, { Component } from 'react'

export class Task5 extends Component {
constructor(props){
    super(props);
    this.state ={
        count: 0,
    }
}


 onStart = ()=> {
    this.clearInterval();
this.interval = setInterval(() =>{ 
    this.setState(prevState =>({
    count: parseInt(prevState.count) +1,
}));
},1000);
};
  
onStop = () => {
    this.clearInterval();

};

onReset = () => {
    this.clearInterval();
    this.setState (prevState => ({
        count:0,
    }));
};

clearInterval = () =>{
    clearInterval(this.interval);
}


onChangeStartingPoint = (e) =>{
    this.clearInterval();
    this.setState({
        count:parseInt(e.target.value),
    });
}
StartTimer(){
    
    this.setInterval=setTimeout(()=>(
        alert("success")) ,5000
    )
}

    render() {
        return (
            <div>
            <h1>STOP WATCH</h1>
            <input onChange={this.onChangeStartingPoint} value={this.state.count}/><br/><br/><br/>
            <div><input onChange={this.onChangeStartingPoint} value= {this.state.count} ></input></div><br/><br/>
                <button onClick={this.onStart}>Start Timer</button><br/><br/>
                <button onClick={this.onStop}>Stop Timer</button><br/><br/>
                <button onClick ={this.onReset}>Reset Timer</button><br/><br/>
                 <button onClick={this.StartTimer}>Start</button><br/><br/>
               
                
            </div>
        )
    }
}

export default Task5
