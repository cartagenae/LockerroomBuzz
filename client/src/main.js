import React from 'react';
import Content from './components/content.js';
import SignUp from './components/signup.js';
import Login from './components/login.js';
import { NavLink } from 'react-router-dom';

// <a className="nav-item nav-link" href="./index.html">Home</a>
// <a className="nav-item nav-link" href="./signin.html">Sign in</a>

class Main extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
            <NavLink to="/home"><h2 className="navbar-brand">Lockerroom Buzz</h2></NavLink>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav right">
                <NavLink to="/home" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/login" className="nav-item nav-link">Sign In</NavLink>
              </div>
            </div>
          </nav>
        </header>
        <br />
      </div>
    )
  }
}

export default Main;
