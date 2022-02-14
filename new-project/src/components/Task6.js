
import React,{ Component }  from 'react';

   
class Task6 extends Component {
  
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {text: ''};
  }
  
  handleTextChange(newText) {
    this.setState({text: newText});
  }
   
  render() {
    return (
        <React.Fragment>
          <B text={this.state.text} 
             handleTextChange={this.handleTextChange}/>
          <C text={this.state.text} />
        </React.Fragment>
    );
  }
}
  
export default Task6;

  
class B extends Component {
  
constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
}
  
handleTextChange(e){
    this.props.handleTextChange(e.target.value);
}
  
render() {
    return (
        <input value={this.props.text} 
               onChange={this.handleTextChange} />
    );
}
}
      

class C extends Component {
  
render() {
    return (
        <h2>OUTPUT <input value = {this.props.text} ></input></h2>
    );
}
}
      















// import React, {Component} from 'react';

// export default class Task6 extends Component {
//     constructor(){
//         super();
//         this.state={

//         }
//     }
//     globalChange(item){
//         this.setstate({data:item})
//     }

//     render () {
//         return (
//             <div className='App'>
//             <h1> Lifting Up</h1>

//             <Child val={this.data} globalChange={this.globalChange.bind(this)} />
//             <Child val={this.data.state} globalChange={this.globalChange.bind(this)} />
            
//             </div>            
//         )
//     }
// }

// class Child extends Component {
//     constructor() {
//         super();
//         this.state={}
//     }
//     render () {
//         return (
//             <div>
//             <input type="text" placeholder='' value={this.props.val} onChange={(e) => (this.props.globalChange.item)} />
        
            
//             </div>
//         )
//     }
// }




