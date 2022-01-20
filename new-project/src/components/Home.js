import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
        <div className='Nav-Link'>

        <div className={'nav'}> <Link to="/Task1">Task1</Link></div><br/>
        <div className={'nav'}><Link to="/Task2">Task2</Link></div><br/>
        <div className={'nav'}><Link to="/Task3">Task3</Link></div><br/>
        <div className={'nav'}><Link to="/Task4">Task4</Link></div><br/>
        <div className={'nav'}><Link to="/Task5">Task5</Link></div><br/>
        <div className={'nav'}><Link to="/Task6">Task6</Link></div><br/>
        <div className={'nav'}><Link to="/Task7">Task7</Link></div><br/>
        <div className={'nav'}><Link to="/Task8">Task8</Link></div><br/>
        <div className={'nav'}><Link to="/Task9">Task9</Link></div><br/>
        <div className={'nav'}><Link to="/Task10">Task10</Link></div><br/>

        <child />
        <child />

        </div>
           
        </div>
    )
}

export default Home
