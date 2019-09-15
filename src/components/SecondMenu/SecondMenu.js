import React, { Component } from 'react';
import {MDBContainer, MDBNavbarNav, MDBNavItem} from "mdbreact";
import {NavLink} from 'react-router-dom'
import './SecondMenu.css'
class SecondMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="second-menu">
                <MDBContainer>
                <MDBNavbarNav left>
          <MDBNavItem>
            <NavLink className="nav-link" to="/dashboard">Dashbroad</NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink className="nav-link" to="/message">Messages</NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink className="nav-link" to="/notification">Notificaitons</NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink className="nav-link" to="/event">Events</NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink className="nav-link" to="/trips">Trips</NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink className="nav-link" to="#">Listings</NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink className="nav-link" to="#">Accommodations</NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink className="nav-link" to="/restaurants">Food & Restaurants</NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink className="nav-link" to="#">Reviews</NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink className="nav-link" to="/friends">Friends</NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink className="nav-link" to="/contribution">Contribution</NavLink>
          </MDBNavItem>
        </MDBNavbarNav>
                </MDBContainer>
      
      </div>
        );
    }
}

export default SecondMenu;