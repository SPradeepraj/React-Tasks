import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
        <div className='Nav-Link'>

        <div className={'nav'}> <Link to="/Task1"><h3>Task1</h3></Link></div>
        <div className={'nav'}><Link to="/Task2"><h3>Task2</h3></Link></div>
        <div className={'nav'}><Link to="/Task3"><h3>Task3</h3></Link></div>
        <div className={'nav'}><Link to="/Task4"><h3>Task4</h3></Link></div>
        <div className={'nav'}><Link to="/Task5"><h3>Task5</h3></Link></div>
        <div className={'nav'}><Link to="/Task6"><h3>Task6</h3></Link></div>
        <div className={'nav'}><Link to="/Task7"><h3>Task7</h3></Link></div>
        <div className={'nav'}><Link to="/Task8"><h3>Task8</h3></Link></div>
        <div className={'nav'}><Link to="/Task9"><h3>Task9</h3></Link></div>
        <div className={'nav'}><Link to="/Task10"><h3>Task10</h3></Link></div>

        <child />
        <child />

        </div>
           
        </div>
    )
}

export default Home
