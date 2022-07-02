import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Packages from './components/packages';





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
        <Routes>
          <Route path='/' component ={Home}/>
          <Route path='/about' component ={About}/>
          <Route path='/packages' render ={() => <Packages packages ={packages}/>}/>
          </Routes>
          
          </div>
          </Router>
      </div>
   
  )
}

export default App;
