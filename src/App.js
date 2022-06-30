import React from 'react'

import {BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Packages from './component/Packages';
import './App.css';




function App () {
  const packages =['Premium crystals', 'Stem Meditation','Full Body Massage','Mineral Hot Bath'];
  return (
        <div className='App'>
      <Router>
        <header>
          <div>
            <h1 className='title'>Welcome to My Mineral SPA</h1>
          <div className='navBar'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/packages'>packages</Link>
              </li>
            </ul>
            </div>
          </div>
        </header>
        <div >
          <Route path='/' component ={Home}/>
          <Route path='/about' component ={About}/>
          <Route path='/packages' render ={() => <Packages packages ={packages}/>}/>
        </div>
      </Router>
      </div>
   
  )
}

export default App;

