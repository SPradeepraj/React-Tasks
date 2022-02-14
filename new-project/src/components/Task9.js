import React from "react";
// import './App.css';
import { Component  } from 'react';

class Task9 extends Component {
    constructor (props) {
    super(props);
    this.state = {
     title: 'React ToDo',
     act: 0,
     index: '',
     datas: []  
    }
}

componentDidMount () {
     this.refs.name.focus();
}


fSubmit = (e) => {
    e.preventDefault();
    console.log('try');

    
    let datas = this.state.datas;
    let name = this.refs.name.value; 
    let address =this.refs.address.value;

    //new
    if(this.state.act ===0 )  {

        let data = {
            name, address
        }
        datas.push(data);
    }

    //update
    else {
       let index=this.state.index;
       datas[index].name = name;
       datas[index].address = address;

    }


    this.setState({
        datas: datas,
        act: 0
    });


    this.refs.myForm.reset();
    this.refs.name.focus();
}

fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
        datas: datas
    });

    this.refs.myform.reset();
    this.refs.name.focus();
}

fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
        act: 1,
        index: 1
});

    this.refs.name.focus();
}


// handleSubmit = (e) => {
//     e.preventDefault();
//     console.log();


render () {
    let datas = this.state.datas;
    return (
    <div className='App' >
    <h2>{this.state.title}</h2>
    <form ref='myForm' className='myForm' >
    <input type="text" ref='name' placeholder="name" className="formField" /> <br /><br />
    <input type="text" ref='address' placeholder="address" className="formField" /><br /><br />

    <button onClick={(e) => this.fSubmit(e)} className="myButtom">Update</button>
    
    </form>
    <pre>
    
        {datas.map((data, i) =>
        <li key={i} className="mylist">
        {i+1}. {data.name}, {data.address}

        <button onClick={() => this.fRemove(i)} className="myButtom">Remove</button>

        <button onClick={() => this.fEdit(i)} className="myButtom">Edit</button>
        </li>
    )}
    </pre>
    </div> 
    ); 
}

}
export default Task9;








// import React, { Fragment, useState } from 'react';
// // import UserTable from './UserTable';
// // import AddUserForm from './AddUserForm';
// // import EditUserForm from './EditUserForm';

// const Task9 = () => {
// const usersData =[
//         {id:"1",name:"Shivraj", username:"Patil"},
//       {id:"2", name:"tdyrt", username:"wertyu"},
//     ]
//     const initialFormState={id:null , name:'', username:''}

//         const [users, setUser] =useState(usersData)
// const [editing, setEditing] = useState(false);
// const [currentUser, setCurrentUser] =  useState(initialFormState)


//         const addUser = (user) =>{
//           user.id= users.length+1
//           setUser([...users, user])
//         }

//         const deleteUser = (id) =>{
//            setUser(users.filter((user) => user.id !==id))}


//            const editRow= (user)=>{
//             setEditing(true)
//             setCurrentUser({id: user.id, name:user.name, username:user.username }) 
            
//           }
          
//  const updateUser =(id,updateUser) =>{
//    setEditing(false)
//    setUser(users.map((user) =>(user.id)===id ? updateUser : user))}


// return (
//     <div>
//       <h1>CRUD App with Hooks</h1>
//       <div>
//         <div>
//            {editing ? (
//             <Fragment>
//               <h2>Edit user</h2>
//               <EditUserForm
//                 editing={editing}
//                 setEditing={setEditing}
//                 currentUser={currentUser}
//                 updateUser={updateUser}
//               />
//             </Fragment>
//           ) : (
//             <Fragment>
//               <h2>Add user</h2>
//               <AddUserForm addUser={addUser} />
//             </Fragment>
//           )}
//         </div>
//         <div>
//           <h2>View users</h2>
//           <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
//         </div>
//       </div>
//     </div>
//   )}
  

// export default Task9;














