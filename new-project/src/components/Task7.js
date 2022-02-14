
import React from "react";

class Task7 extends React.Component {
   

    constructor(props) {
        super(props);
   
        this.state = {
            items: [],    
            DataisLoaded: false
        };
    }
   
    componentDidMount() { 
        fetch(
"https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait... </h1> </div> ;
   
        return (
        <div>
            <h1>Rendering Data</h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    User_Name: { item.username }, 
                    
                    
                    </ol>
                ))
            }
        </div>
    );
}
}
   
export default Task7;