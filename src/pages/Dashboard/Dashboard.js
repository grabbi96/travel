import React, { Component } from "react";
// mdb react
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact'
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faGlobeAsia
} from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.css";
import userImage from "../../assets/images/user.png";
import TimeLinePostArea from './section/TimelinePostArea'
class Dashbroad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>

        <section className="dashbroad-post-area section-bg-color">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="8">
                <TimeLinePostArea />
              </MDBCol>
              <MDBCol md="4">
                  <div className="user-notification-area">
                    <div className="user-notification-title">
                      <h6>
                        Your Page
                      </h6>
                    </div>
                    <div className="user-notification-content">
                      <div className="user-n-thumb">
                        <img src={userImage} alt="user"/>
                      </div>
                      <div className="user-n-content">
                        <ul>
                          <li className="mb-1">
                            <a href="/" className="red-text">Affection and care for life</a>
                          </li>
                          <li className="mb-1"> <a href="/" className="red-text"><FontAwesomeIcon icon={faCommentAlt} />  Messages</a> </li>
                          <li className="mb-1"> <a href="/" className="red-text"><FontAwesomeIcon icon={faGlobeAsia} /> <span className="grey-text">Notification</span>  ( 04)</a> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </main>
    );
  }
}

export default Dashbroad;
