





































// import React from "react";


// class Task8 extends React.Component {
   

//     constructor(props) {
//         super(props);
   
//         this.state = {
//             items: [],
//             DataisLoaded: false
//         };
//     }
   
//     componentDidMount() {
//         fetch(
// "https://jsonplaceholder.typicode.com/users")
//             .then((res) => res.json())
//             .then((json) => {
//                 this.setState({
//                     items: json,
//                     DataisLoaded: true
//                 });
//             })
//     }
//     render() {
//         const { DataisLoaded, items } = this.state;
//         if (!DataisLoaded) return <div>
//              </div> ;
   
//         return (
//         <div className = "App">
//             <h1> fetch even id</h1>  {
//            items.map((item => ( 
//          <li> {(item.id) % 2===0 ? <>User_Name-{item.username} </> : "" }  </li>
//                 )))
//             }
//         </div>
//     );
// }
// }
   
// export default Task8;