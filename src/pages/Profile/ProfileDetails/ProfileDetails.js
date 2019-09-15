import React, { Component } from 'react'
import {MDBContainer, MDBCol, MDBRow,   MDBNav, MDBNavItem, MDBNavLink, MDBIcon} from 'mdbreact'
import TimeLinePost from '../../../components/TimeLine/TimeLinePost'
import ProfileImage from '../../../assets/images/redoan.png'
class Profile extends Component {
    state = {
        activeItem: "1"
      }
      
      toggle = tab => () => {
        if (this.state.activeItem !== tab) {
        this.setState({
          activeItem: tab
        });
        }
      }
      componentDidMount(){
        //   console.log(this.props.location.pathname)
      }
    render() {
        return (
                <section className="profile-information-section">
                    <MDBContainer fluid>
                        <MDBRow>
                            <MDBCol lg="3" md="5">
                                <div className="profile-info-area">
                                    <div className="profile-info-area-header text-center">
                                        <h3>Profiles</h3>
                                    </div>
                                    <ul className="profile-info-list">
                                        <li>
                                            <h6>Name</h6>
                                            <p>Radoan Hossain Prem</p>
                                        </li>
                                        <li>
                                            <h6>EMAIL</h6>
                                            <p>radoanhossaiinpream@yahoo.com</p>
                                        </li>
                                        <li>
                                            <h6>EMERGENCY CONTACT</h6>
                                            <p>+8801788783649</p>
                                        </li>
                                        <li>
                                            <h6>LOCATION</h6>
                                            <p>Dhaka,Bangladesh</p>
                                        </li>
                                        <li>
                                            <h6>EMERGENCY ADDRESS</h6>
                                            <p>(Not Set)</p>
                                        </li>
                                        <li>
                                            <h6>TIMEZONE</h6>
                                            <p>(Not Set)</p>
                                        </li>
                                        <li>
                                            <h6>PREFERRED LANGUAGE</h6>
                                            <p>(Not Set)</p>
                                        </li>
                                        <li>
                                            <h6>PREFERRED CURRENCY</h6>
                                            <p>(Not Set)</p>
                                        </li>
                                        <li>
                                            <h6>TIMEZONE</h6>
                                            <p>(Not Set)</p>
                                        </li>
                                        <li>
                                            <h6>SHIPPING ADDRESS</h6>
                                            <p>(Not Set)</p>
                                        </li>
                                        <li>
                                            <h6>GENDER</h6>
                                            <p>(Not Set)</p>
                                        </li>
                                    </ul>
                                </div>
                            </MDBCol>
                            <MDBCol lg="6" md="7">
                                <MDBNav tabs className="nav-justified">
                                  <MDBNavItem>
                                    <MDBNavLink to="#" className={this.state.activeItem==="1" ? "active" : "" } onClick={this.toggle("1")} role="tab">
                                      <MDBIcon icon="user" /> post
                                    </MDBNavLink>
                                  </MDBNavItem>
                                  <MDBNavItem>
                                    <MDBNavLink to="#" className={this.state.activeItem==="2" ? "active" : "" } onClick={this.toggle("2")} role="tab">
                                      photos
                                    </MDBNavLink>
                                  </MDBNavItem>
                                  <MDBNavItem>
                                    <MDBNavLink to="#" className={this.state.activeItem==="3" ? "active" : "" } onClick={this.toggle("3")} role="tab">
                                      video
                                    </MDBNavLink>
                                  </MDBNavItem>
                                </MDBNav>
                                {this.state.activeItem === "1" && (
                                    <TimeLinePost />
                                )}

                                {this.state.activeItem === "2" && (
                                    <div className="profile-images-area">
                                        <img src={ProfileImage} className="z-depth-1 rounded" alt="profile"/>
                                        <img src={ProfileImage} className="z-depth-1 rounded" alt="profile"/>
                                        <img src={ProfileImage} className="z-depth-1 rounded" alt="profile"/>
                                        <img src={ProfileImage} className="z-depth-1 rounded" alt="profile"/>
                                    </div>
                                )}
                                {this.state.activeItem === "3" && (
                                    <p className="mt-2">
                                   <div className="profile-video-area">
                                        <div className="profile-video-item z-depth-1 rounded">
                                            <iframe height="315" title="one" src="https://www.youtube.com/embed/dkpS0_hr4XE"></iframe>
                                        </div>
                                        <div className="profile-video-item z-depth-1 rounded">
                                            <iframe height="315" title="two" src="https://www.youtube.com/embed/dkpS0_hr4XE"></iframe>
                                        </div>
                                        <div className="profile-video-item z-depth-1 rounded">
                                            <iframe height="315" title="three" src="https://www.youtube.com/embed/dkpS0_hr4XE"></iframe>
                                        </div>
                                        <div className="profile-video-item z-depth-1 rounded">
                                            <iframe height="315" title="four" src="https://www.youtube.com/embed/dkpS0_hr4XE"></iframe>
                                        </div>
                                        <div className="profile-video-item z-depth-1 rounded">
                                            <iframe height="315" title="five" src="https://www.youtube.com/embed/dkpS0_hr4XE"></iframe>
                                        </div>
                                   
                                   </div>
                                </p>
                                )}
                            </MDBCol>
                            <MDBCol lg="3" md="5">
                            <div className="profile-info-area">
                                    <div className="profile-info-area-header text-center">
                                        <h3>Description</h3>
                                    </div>
                                    <p className="profile-info-area-des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, mollitia vero distinctio autem beatae incidunt modi! Excepturi rerum id, voluptates fuga temporibus incidunt iste dolorem explicabo adipisci numquam atque facilis!</p>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
        );
    }
}

export default Profile;