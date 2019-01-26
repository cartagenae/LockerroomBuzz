import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './footer';

class Login extends React.Component {
  render() {
    return (
      <div>
      <br /><br /><br /><br /><br /><br /><br />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <form>
                <h1>Sign In</h1>
                <br />
                <div className="form-group">
                  <label for="username">Your Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                  <label for="password">Your Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter Password" />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Enter</button>
              </form>
            </div>
            <div className="col-md-4 text-right vl  ">
              <br />
              <h1>Don't have an account?</h1>
              <br />
              <NavLink to="/signup" classNameName="btn btn-success" role="button">Sign up here!</NavLink>
            </div>
          </div>
          <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>

        <Footer />
      </div>
    );
  }
};

export default Login;
