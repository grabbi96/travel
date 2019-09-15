import React, { Component } from 'react';
// mdb react
import {MDBContainer, MDBRow, MDBCol, MDBBadge  } from 'mdbreact'
import {Link} from 'react-router-dom'
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlusSquare, faSearch} from '@fortawesome/free-solid-svg-icons';
import './Event.css'
import cox from '../../assets/images/cox.jpg'
class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <main className="events-main-area section-padding">
                <MDBContainer>
                    <div className="event-add-area">
                        <Link to="event/add" className="ripe-malinka-gradient sm btn round" size="sm">
                            Add Event <FontAwesomeIcon icon={faPlusSquare} />
                        </Link>
                    </div>
                    <div className="event-search-area">
                        <div className="group-control  icon-parent">
                        <input
                            className="form-control round"
                            placeholder="Event or Place or Price or Date"
                        />
                            <FontAwesomeIcon icon={faSearch} className="icon-children" />
                        </div>
                    </div>
                    <MDBRow>
                        <MDBCol md="6">
                            <div className="event-item z-depth-1">
                                <div className="event-item-thumb">
                                    <img src={cox} alt="coxBazar"/>
                                </div>
                                <div className="event-item-content">
                                    <div className="event-item-tags">
                                        <MDBBadge className="custom-btn round">12-12-19</MDBBadge> 
                                        <MDBBadge className="custom-btn round">12-12-19</MDBBadge> 
                                        <MDBBadge className="custom-btn round">12-12-19</MDBBadge> 
                                    </div>
                                    <div className="event-item-content-left">
                                        <h4>Malaysia...truly Aisa</h4>
                                        <h6>kuala Lumpur, Malaysia</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellendus sunt nobis quia, amet nisi ab ex vel numquam </p>
                                        <p>
                                            by
                                            <a href="#!">
                                                <strong>Carine Fox</strong>
                                            </a>
                                            , 19/08/2018
                                            </p>
                                    </div>
                                    <div className="event-item-content-right">
                                        <a href="/" className="btn custom-btn round">Register</a>
                                        <a href="/" className="btn custom-btn round">Listing</a>
                                        <a href="/" className="btn custom-btn round">Know More</a>
                                    </div>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol md="6">
                            <div className="event-item z-depth-1">
                                <div className="event-item-thumb">
                                    <img src={cox} alt="coxBazar"/>
                                </div>
                                <div className="event-item-content">
                                    <div className="event-item-tags">
                                        <MDBBadge className="custom-btn round">12-12-19</MDBBadge> 
                                        <MDBBadge className="custom-btn round">12-12-19</MDBBadge> 
                                        <MDBBadge className="custom-btn round">12-12-19</MDBBadge> 
                                    </div>
                                    <div className="event-item-content-left">
                                        <h4>Malaysia...truly Aisa</h4>
                                        <h6>kuala Lumpur, Malaysia</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellendus sunt nobis quia, amet nisi ab ex vel numquam </p>
                                        <p>
                                            by
                                            <a href="#!">
                                                <strong>Carine Fox</strong>
                                            </a>
                                            , 19/08/2018
                                            </p>
                                    </div>
                                    <div className="event-item-content-right">
                                        <a href="/" className="btn custom-btn round">Register</a>
                                        <a href="/" className="btn custom-btn round">Listing</a>
                                        <a href="/" className="btn custom-btn round">Know More</a>
                                    </div>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol md="6">
                            <div className="event-item z-depth-1">
                                <div className="event-item-thumb">
                                    <img src={cox} alt="coxBazar"/>
                                </div>
                                <div className="event-item-content">
                                    <div className="event-item-tags">
                                        <MDBBadge className="custom-btn round">12-12-19</MDBBadge> 
                                        <MDBBadge className="custom-btn round">12-12-19</MDBBadge> 
                                        <MDBBadge className="custom-btn round">12-12-19</MDBBadge> 
                                    </div>
                                    <div className="event-item-content-left">
                                        <h4>Malaysia...truly Aisa</h4>
                                        <h6>kuala Lumpur, Malaysia</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellendus sunt nobis quia, amet nisi ab ex vel numquam </p>
                                        <p>
                                            by
                                            <a href="#!">
                                                <strong>Carine Fox</strong>
                                            </a>
                                            , 19/08/2018
                                            </p>
                                    </div>
                                    <div className="event-item-content-right">
                                        <a href="/" className="btn custom-btn round">Register</a>
                                        <a href="/" className="btn custom-btn round">Listing</a>
                                        <a href="/" className="btn custom-btn round">Know More</a>
                                    </div>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol md="6">
                            <div className="event-item z-depth-1">
                                <div className="event-item-thumb">
                                    <img src={cox} alt="coxBazar"/>
                                </div>
                                <div className="event-item-content">
                                    <div className="event-item-tags">
                                        <MDBBadge className="custom-btn round">12-12-19</MDBBadge> 
                                        <MDBBadge className="custom-btn round">12-12-19</MDBBadge> 
                                        <MDBBadge className="custom-btn round">12-12-19</MDBBadge> 
                                    </div>
                                    <div className="event-item-content-left">
                                        <h4>Malaysia...truly Aisa</h4>
                                        <h6>kuala Lumpur, Malaysia</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellendus sunt nobis quia, amet nisi ab ex vel numquam </p>
                                        <p>
                                            by
                                            <a href="#!">
                                                <strong>Carine Fox</strong>
                                            </a>
                                            , 19/08/2018
                                            </p>
                                    </div>
                                    <div className="event-item-content-right">
                                        <a href="/" className="btn custom-btn round">Register</a>
                                        <a href="/" className="btn custom-btn round">Listing</a>
                                        <a href="/" className="btn custom-btn round">Know More</a>
                                    </div>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol md="6">

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </main>
         );
    }
}
 
export default Events;