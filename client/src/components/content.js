import React from 'react';
import twoboxers from './img/two-boxers.jpg';
import laptop from './img/work-on-laptop.jpg';
import friendsgambling from './img/friends-gambling.jpg';
import { NavLink } from 'react-router-dom';
import Footer from './footer';

class Content extends React.Component {
  render() {
    return (
      <div>
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="jumbotron">
              <h1>Welcome to Lockeroom Buzz</h1>
              <br />
              <p>Donec ante massa, porttitor a felis vitae, vehicula hendrerit metus. Praesent tincidunt aliquam sagittis. Donec gravida, purus non viverra elementum, leo velit rhoncus purus, quis fermentum sem metus eget sapien. Nulla id tristique sapien. Curabitur ornare fringilla pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit neque non urna ultricies maximus a ut turpis. Mauris interdum gravida orci ut varius.</p>
              <br />
              <NavLink to="/signup" className="btn btn-primary" role="button">Get Started</NavLink>
              <br />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5"><hr /></div>
            <div className="col-md-2 text-center" id="first">The Latest Buzz</div>
            <div className="col-md-5"><hr /></div>
          </div>
        </div>

        <br />

        <div className="container-fluid">

          <div className="row">
            <div className="col-md-4">
              <div className="container">
                <h1>First Column</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel nisi eget sapien porttitor cursus in mattis augue. Donec aliquam consectetur quam. Sed posuere augue vitae aliquet egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec eu mi sed felis ultricies volutpat vitae vel magna. Nunc varius tristique dui, ut euismod ex euismod ac. Sed non accumsan dolor. Sed ut elit lobortis, suscipit eros a, finibus velit. In vulputate, massa nec egestas posuere, nunc orci euismod metus, sit amet fringilla sapien magna at purus. Pellentesque enim massa, pellentesque ut velit eget, scelerisque rutrum lorem. In tempus suscipit accumsan. Sed id aliquet arcu, ullamcorper luctus nunc. Duis id tortor finibus, viverra quam ut, consequat nisl. Etiam condimentum diam nec nulla placerat, non egestas tellus aliquam. Pellentesque suscipit, nisl a vulputate hendrerit, leo nunc varius sem, a interdum lectus tortor nec mauris.</p>
              </div>
              <div className="container">
                <a href="#" className="btn btn-warning" role="button">Read more</a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="container">
                <h1>Main Column</h1>
                <p>Donec ante massa, porttitor a felis vitae, vehicula hendrerit metus. Praesent tincidunt aliquam sagittis. Donec gravida, purus non viverra elementum, leo velit rhoncus purus, quis fermentum sem metus eget sapien. Nulla id tristique sapien. Curabitur ornare fringilla pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit neque non urna ultricies maximus a ut turpis. Mauris interdum gravida orci ut varius.</p>

                <p>Aliquam ac enim porttitor velit fermentum blandit. Aenean non leo quis est rutrum vulputate a ac mauris. Ut ornare mi et tellus sagittis, sed egestas elit imperdiet. Cras elementum dapibus accumsan. Proin ornare ac justo vel vestibulum. Donec faucibus, ex at convallis porta, ante ligula sagittis lorem, non convallis nibh eros sed lectus. Donec nec dolor eget dui pretium bibendum id eget leo. Vivamus tempus pharetra ex, at blandit tellus ornare pulvinar. Vestibulum in finibus dui. Quisque enim tellus, maximus et sem eget, sollicitudin fringilla lacus.</p>
              </div>
              <div className="container">
                <a href="#" className="btn btn-warning" role="button">Read more</a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="container">
                <h1>Last Column</h1>
                <p>Pellentesque nisi elit, varius quis condimentum nec, auctor quis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a nisi felis. Fusce condimentum consequat tortor, eu tincidunt massa euismod ut. Praesent egestas nulla eget tempor fermentum. Nulla orci lorem, pharetra non est a, accumsan pellentesque nibh. Pellentesque vitae eros id dui gravida posuere id id nulla. Pellentesque vel commodo nisl. Phasellus sodales est et porta ultrices. In pretium enim ut rutrum tempus. Cras maximus convallis tempor.</p>

                <p>Pellentesque euismod purus mauris. Aliquam nec ullamcorper mi. Pellentesque ut ligula eros. Aliquam condimentum euismod quam, sit amet suscipit nisl tincidunt sit amet. Integer leo dolor, maximus vel turpis sed, tristique pretium mi. Phasellus consectetur felis ac felis blandit, eget varius magna condimentum. Ut odio metus, sollicitudin vitae fringilla vitae, varius vel augue</p>
              </div>
              <div className="container">
                <a href="#" className="btn btn-warning" role="button">Read more</a>
              </div>
            </div>
          </div>

        </div>

        <br /><br />

        <div className="container-fluid">
          <div className="row">
            <div className="jumbotron">
              <h1>Say "Hello" to my little friend!</h1>
              <p>Donec ante massa, porttitor a felis vitae, vehicula hendrerit metus. Praesent tincidunt aliquam sagittis. Donec gravida, purus non viverra elementum, leo velit rhoncus purus, quis fermentum sem metus eget sapien. Nulla id tristique sapien. Curabitur ornare fringilla pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit neque non urna ultricies maximus a ut turpis. Mauris interdum gravida orci ut varius.</p>
            </div>
          </div>
        </div>

        <hr /><br />

        <div className="container">
          <div className="row">
            <div className="card text-center">
              <div className="card-header">Current Events</div>
              <div className="card-body shadow p-3 mb-white rounded">

                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <img src={ twoboxers } className="card-img-top" />
                      <div className="card-body">
                        <h1>Sports</h1>
                        <p>Get updated with the most recent sporting events!</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src={ laptop } className="card-img-top" />
                      <div className="card-body">
                        <h1>Finance</h1>
                        <p>Find out what your current bears and bulls are!</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src={ friendsgambling } className="card-img-top" />
                      <div className="card-body">
                        <h1>Politics</h1>
                        <p>Learn more about your political current events!</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <br /><br /><br />

        <Footer />

      </div>
    );
  }
};

export default Content;
