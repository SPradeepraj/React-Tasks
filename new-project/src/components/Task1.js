import React from 'react'
import {useNavigate} from 'react-router-dom'

function Task1() {
  let Navigate = useNavigate();
  return (
    <div>
       <button onClick={() => { 
         Navigate("/Task2")}}>Redirecting to Test2 Page</button>
    </div>
  )
}

export default Task1
