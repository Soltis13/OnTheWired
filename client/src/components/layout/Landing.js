import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
        <div class="landing">
        <div class="dark-overlay landing-inner text-light">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h1 class="display-3 mb-4">Articles
                </h1>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
