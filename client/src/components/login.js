import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './footer';

class Login extends React.Component {
  render() {
    return (
      <div>
      <br /><br /><br /><br /><br /><br />
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <form>
                <h1>Sign In</h1>
                <br />
                <div class="form-group">
                  <label for="username">Your Username</label>
                  <input type="text" class="form-control" id="username" placeholder="Enter Username" />
                </div>
                <div class="form-group">
                  <label for="password">Your Password</label>
                  <input type="password" class="form-control" id="password" placeholder="Enter Password" />
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Enter</button>
              </form>
            </div>
            <div class="col-md-4 text-right vl  ">
              <br />
              <h1>Don't have an account?</h1>
              <br />
              <NavLink to="/signup" className="btn btn-success" role="button">Sign up here!</NavLink>
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
