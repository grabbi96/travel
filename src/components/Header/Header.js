
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer } from "mdbreact";
import './Header.css'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlug, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

import author from '../../assets/images/author-page.jpg'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      scroll: null,
      top: 0
    };
    this.handleScroll = this.handleScroll.bind(this);

  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top ?
      document.body.style.paddingTop = `${this.state.height}px` :
      document.body.style.paddingTop = 0;
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    let userAuth = (
      <MDBNavbarNav right>
        <MDBNavItem>
          <NavLink to="/register" className="text-white nav-link" ><FontAwesomeIcon icon={faPlug} /> Register</NavLink>
        </MDBNavItem>
        <MDBNavItem>
          <NavLink to="/login" className="text-white nav-link" ><FontAwesomeIcon icon={faSignInAlt} /> Login</NavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    )
    let userProfile = (
      <div className="control-block ml-auto">
        <div className="author-thumb">
          <img alt="author" src={author} className="avatar" />
          <span className="icon-status online"></span>

          <div className="more-dropdown more-with-triangle">
            <div className="mCustomScrollbar ps ps--theme_default ps--active-y">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">Your Account</h6>
              </div>

              <ul className="account-settings">
                <li>
                  <a href="29-YourAccount-AccountSettings.html">
                    <i className="fas fa-sliders-h"></i>
                    <span>Profile Settings</span>
                  </a>
                </li>
                <li>
                  <a href="36-FavPage-SettingsAndCreatePopup.html">
                    <i className="fas fa-plus"></i>
                    <span>Create Event Page</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Log Out</span>
                  </a>
                </li>
              </ul>



            </div>
          </div>
        </div>
        <div className="author-name">
          <h6 className="author-title">James Spiegel</h6>
          <p>SPACE COWBOY</p>
        </div>
        <div className="author-arrow-option">
          <i className="fas fa-angle-down"></i>
        </div>
      </div>
    )
    return (
      <MDBNavbar dark expand="md" className={[this.state.scroll > this.state.top ? "fixed-nav" : "", "primary-menu"].join(" ")}>
        <MDBContainer>
          <MDBNavbarBrand>
            <Link to="/">
              <strong className="white-text">Walkout</strong>
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            {
              this.props.isAuthentication ? userProfile : userAuth
            }

          </MDBCollapse>
        </MDBContainer>

      </MDBNavbar>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthentication: state.auth.isAuthentication
  }
}

export default connect(mapStateToProps)(Header);