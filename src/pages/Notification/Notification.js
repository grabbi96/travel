import React, { Component } from 'react';
import { MDBContainer, MDBListGroupItem, MDBListGroup } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons'
import userImage from '../../assets/images/user.png'
import userNOne from '../../assets/images/user-n.jpg'
import userNTwo from '../../assets/images/user-n-2.jpg'
import userNThree from '../../assets/images/user-n-3.jpg'

import './Notification.css'
class Notification extends Component {
    state = {}
    render() {
        return (
            <main>
                <section className="notification-section section-padding section-bg-color">
                    <MDBContainer>
                        <div className="section-wrapper">
                            <MDBListGroup>
                                <MDBListGroupItem>
                                    <div className="notification-item">
                                        <div className="ntft-thumb">
                                            <img src={userImage} alt="asdfdsf" style={{ width: '50px' }} />
                                        </div>
                                        <div className="ntft-user">
                                            <h6>golam rabbi</h6>
                                            <span>15 sec ago</span>
                                        </div>
                                        <div className="ntft-message">
                                            golam rabbi going to india
                                        </div>
                                    </div>
                                    <div className="notification-close">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <div className="notification-item">
                                        <div className="ntft-thumb">
                                            <img src={userImage} alt="asdfdsf" style={{ width: '50px' }} />
                                        </div>
                                        <div className="ntft-user">
                                            <h6>golam rabbi</h6>
                                            <span>15 sec ago</span>
                                        </div>
                                        <div className="ntft-message">
                                            golam rabbi going to india
                                        </div>
                                    </div>
                                    <div className="notification-close">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <div className="notification-item">
                                        <div className="ntft-thumb">
                                            <img src={userImage} alt="asdfdsf" style={{ width: '50px' }} />
                                        </div>
                                        <div className="ntft-user">
                                            <h6>golam rabbi</h6>
                                            <span>15 sec ago</span>
                                        </div>
                                        <div className="ntft-message">
                                            golam rabbi going to india
                                        </div>
                                    </div>
                                    <div className="notification-close">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </div>
                    </MDBContainer>
                    <MDBContainer>
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">Notifications</h6>
                                <a href="/" className="more">
                                    <FontAwesomeIcon icon={faEllipsisH} />
                                </a>
                            </div>



                            <ul className="notification-list">
                                <li>
                                    <div className="notification-list-item-left">
                                        <div className="author-thumb">
                                            <img src={userNOne} alt="author" />
                                        </div>
                                        <div className="notification-event">
                                            <p>
                                                <a href="/" className="h6 notification-friend">Mathilda Brinker  </a>
                                                commented on  your new
                                        <a href="/" className="notification-link">  profile status</a>.
                                       </p>

                                            <span className="notification-date">
                                                <time className="entry-date updated"
                                                    dateTime="2004-07-24T18:18">
                                                    4 hours ago
                                            </time>
                                            </span>
                                        </div>
                                    </div>

                                    <span className="notification-icon">
                                        <FontAwesomeIcon icon={faCommentAlt} />
                                    </span>

                                    <div className="more">
                                        <FontAwesomeIcon icon={faEllipsisH} />
                                        <FontAwesomeIcon icon={faTimes} />
                                    </div>
                                </li>
                                <li>
                                    <div className="notification-list-item-left">
                                        <div className="author-thumb">
                                            <img src={userNThree} alt="author" />
                                        </div>
                                        <div className="notification-event">
                                            <p>
                                                <a href="/" className="h6 notification-friend">Mathilda Brinker  </a>
                                                commented on  your new
                                        <a href="/" className="notification-link">  profile status</a>.
                                       </p>

                                            <span className="notification-date">
                                                <time className="entry-date updated"
                                                    dateTime="2004-07-24T18:18">
                                                    4 hours ago
                                            </time>
                                            </span>
                                        </div>
                                    </div>

                                    <span className="notification-icon">
                                        <FontAwesomeIcon icon={faCommentAlt} />
                                    </span>

                                    <div className="more">
                                        <FontAwesomeIcon icon={faEllipsisH} />
                                        <FontAwesomeIcon icon={faTimes} />
                                    </div>
                                </li>
                                <li>
                                    <div className="notification-list-item-left">
                                        <div className="author-thumb">
                                            <img src={userNTwo} alt="author" />
                                        </div>
                                        <div className="notification-event">
                                            <p>
                                                <a href="/" className="h6 notification-friend">Mathilda Brinker  </a>
                                                commented on  your new
                                        <a href="/" className="notification-link">  profile status</a>.
                                       </p>

                                            <span className="notification-date">
                                                <time className="entry-date updated"
                                                    dateTime="2004-07-24T18:18">
                                                    4 hours ago
                                            </time>
                                            </span>
                                        </div>
                                    </div>

                                    <span className="notification-icon">
                                        <FontAwesomeIcon icon={faCommentAlt} />
                                    </span>

                                    <div className="more">
                                        <FontAwesomeIcon icon={faEllipsisH} />
                                        <FontAwesomeIcon icon={faTimes} />
                                    </div>
                                </li>
                            </ul>


                        </div>
                    </MDBContainer>
                </section>
            </main>
        );
    }
}

export default Notification;