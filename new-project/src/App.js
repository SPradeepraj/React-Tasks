import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import VideoPlayer from 'react-video-js-player';
import Home from './components/Home';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import ErrorPage from './components/ErrorPage';
import Task3 from './components/Task3';
import EditItem from './components/EditItem';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';
import Task7 from './components/Task7';
import Task8 from './components/Task8';
import Task9 from './components/Task9';
import Task10 from './components/Task10';
function App(){
  
return (
 <div>
  <Router>

  <Routes>
  
  <Route path='/' element={<Home />} />
  <Route path='/*' element={ <ErrorPage />} />
  <Route path='/Task1' element={ <Task1 />} />
  <Route path='/Task2' element={ <Task2 />} />
  <Route path='/Task3' element={ <Task3 />} />
  <Route exact path='/:editItem' element = {<EditItem />} />
  <Route path='/Task4' element={ <Task4 />} />
  <Route path='/Task5' element={ <Task5 />} />
  <Route path='/Task6' element={ <Task6 />} />
  <Route path='/Task7' element={ <Task7 />} />
  <Route path='/Task8' element={ <Task8 />} />
  <Route path='/Task9' element={ <Task9 />} />
  <Route path='/Task10' element={ <Task10 />} />
    
  </Routes>
  </Router>
  </div>

  
);
}
export default App;