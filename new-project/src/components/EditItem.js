import React from 'react';
import { useState, useEffect, } from "react";
import { useParams } from 'react-router-dom';


function EditItem(props) {
  const params = useParams();
    
  const [item,setItem]=useState({});

    useEffect(()=> {
       
        fetch ("https://jsonplaceholder.typicode.com/users/"+params.editItem)
        .then(res => res.json())
        .then(
          (result) => {
            setItem(result);
          }
        );
    });
    

    
  function changeData(e){
e.preventDefault()
console.log(params)
  }
      return (
       <div>
           <h2>All Details</h2>
           <p>
               <label>User ID : <input type="text" name="Id" 
               value={item.id} onChange={changeData}></input></label>
           </p>
           <p>
               <label>User Name : <input type="text" name="Name" 
               value={item.name} onChange={changeData}></input></label>
           </p>
           <button>Update</button>
       </div>
        );
}

export default EditItem;
































// import React, { Component } from 'react';
// import { useState, useEffect } from 'react';
// import Task3 from './Task3';

// class Task3item extends Component{    

//     constructor(props){
//         super(props) 
//     }
// handleChange({target}){
//     this.setState({
//         [target.name] : target.value
//     });
// }

// publish() {
//     console.log(this.state.user, this.state.name);
// }

//     componentDidMount(){
//         console.log(this.props.match)
//     }


//     // const [item,setItem] = useState({});

//     // useEffect(()=> {
//     //     fetch("https://jsonplaceholder.typicode.com/users/"+props.match.params.EditItem)
//     //     .then(res => res.json())
//     //     .then(
//     //       (result) => {
//     //         setItem(result);
//     //       }
//     //     );
//     // });

//     render(){
//         return (
//             <div>
//             <h2>All Details</h2>
//             <p>
//             <label>User Id : <input type="" name="Id" 
//             value={Task3.EditItem}  onChange={this.handleChange}  
//             ></input></label>
//             </p>
//             <p>
//             <label>User Name : <input type="text" name="Name" 
//             value={Task3.id} onChange={this.handleChange} 
//             ></input></label>
//             </p>
//             <button>Update</button>
//             </div>
//         );
//     }
// }













// import React from 'react';
// import { useState, useEffect } from "react";

// function EditItem(props) {
    
//   const [item,setItem]=useState({});

//     useEffect(()=> {
//         fetch("https://jsonplaceholder.typicode.com/users/"+props.match.params.EditItem)
//         .then(res => res.json())
//         .then(
//           (result) => {
//             setItem(result);
//           }
//         );
//     });

    

    
//   function changeData(e){
// e.preventDefault()
// console.log(props.match.params.EditItem)
//   }
//       return (
//        <div>
//            <h2> Details</h2>
//            <p>
//                <label>UserID : <input type="text" name="Id" 
//                value={item.id} onChange={changeData}></input></label>
//            </p>
//            <p>
//                <label>UserName : <input type="text" name="Name" 
//                value={item.name} onChange={changeData}></input></label>
//            </p>
//            <button>Update</button>
//        </div>
//         );
// }

// export default EditItem;