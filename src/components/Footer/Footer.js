import React, { Component } from 'react';
import {MDBContainer, MDBRow} from 'mdbreact'
import './Footer.css'
class Footer extends Component {
    state = {  }
    render() {
        return (
            <footer className="footer-section">
                <MDBContainer>
                    <MDBRow className="footer-inner">
                    <ul className="footer-link-list">
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
                <p>2019@ Workout All Rights Reserved</p>
                    </MDBRow>
                
                </MDBContainer>
            </footer>
        );
    }
}

export default Footer;