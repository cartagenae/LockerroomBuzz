import React from 'react';
import Footer from './footer';
import { NavLink } from 'react-router-dom';

class Signup extends React.Component {
  render() {
    return (
      <div>
        <br /><br /><br />
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <form>
                <h1>Create Account</h1>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="first-name">First Name</label>
                      <input type="text" className="form-control" id="first-name" placeholder="Your first name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="last-name">Last Name</label>
                      <input type="text" className="form-control" id="last-name" placeholder="Your last name" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="user-email">Email</label>
                      <input type="email" className="form-control" id="user-email" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="username">Username</label>
                      <input type="text" className="form-control" id="username" placeholder="Your desired username" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="user-password">Password</label>
                  <input type="password" className="form-control" id="user-password" placeholder="Enter your password" />
                </div>
                <div className="form-group">
                  <label for="confirm-password">Confirm Password</label>
                  <input type="password" className="form-control" id="confirm-password" placeholder="Confirm your password" />
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <button type="button" className="btn btn-primary">Create Account</button>
                  </div>
                  <div className="col-md-6">
                    <NavLink to="/login" className="text-left">Already have an account? Click here to sign in</NavLink>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-2"></div>
          </div>
          <br /><br />
        </div>

        <Footer />
      </div>
    );
  }
};

export default Signup;
