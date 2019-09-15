import React, { Component } from "react";
import "./Home.css";
// mdb react
import {
  MDBContainer, MDBBtn
} from "mdbreact";

import bannerLogo from "../../assets/images/bannerLogo.png";
class Home extends Component {
  state = {};
  render() {
    return (
      <section className="banner-section">
        <MDBContainer>
          <div className="banner-content text-center">
            <img src={bannerLogo} alt="banner logo" />
            <h1 className="h1-seo">Explore The World !</h1>
            <h3>Find the best place for your trip.</h3>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon">
                  <i className="fa fa-user prefix"></i>
                </span>
              </div>
              <input type="text" className="form-control input-rounded" placeholder="Username" aria-label="Username" aria-describedby="basic-addon" />
            </div>
            <MDBBtn  className="custom-btn">Login & Go for it !</MDBBtn>
          </div>
        </MDBContainer>
      </section>
    );
  }
}

export default Home;
