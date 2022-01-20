import React from 'react'
import { Link } from 'react-router-dom';
// import { Component } from 'react';
// import {useState, useEffect} from 'react';
// import EditItem from './EditItem.js';

class Task3 extends React.Component{

    constructor(props){
        super(props);

        this.state={
            items:[], 
            DetailsLoaded: false
        };
    }

    componentDidMount () {
                fetch(
                    "https://jsonplaceholder.typicode.com/users")
                .then((res) => res.json())
                .then((json) => {
                    this.setState({
                    items: json,
                    DetailsLoaded:true 
                    });   
                    })
                    
                }      

        render() {

            const {DetailsLoaded, items}=this.state;
            if (!DetailsLoaded) return<div></div>;
            
        

        return (
           <div className='App'>
           <h3>ALL DETAILS</h3>
                        {
                items.map((item)=> ( 
                    <ol key={item.id}>
                id:{item.id},
                UserName:{item.username},
                <Link to={'/'+item.id}>Edit</Link>
            
                </ol>
          )
          
        )
                }
           </div> 
        )};}
    

export default Task3;
