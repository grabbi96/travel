import React, { Component } from 'react';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact'
import {Link} from 'react-router-dom'
import restuarentOne from '../../assets/images/restaurant-one.jpg'
import restuarentTwo from "../../assets/images/restuarent-two.jpg"
import './FoodRestuarent.css'
class FoodRestuarent extends Component {
    state = {  }
    render() {
        return (
            <section className="fr-section section-padding">
                <MDBContainer>
                    
                    <div className="restuarent-area">
                        <div className="restuarent-title">
                            <h4>Restuarents</h4>
                        </div>
                        <div className="restuarents">
                            <MDBRow>
                                <MDBCol md="6">
                                    <div className="r-item z-depth-1">
                                        <div className="r-item-thumb">
                                            <img src={restuarentOne} alt="restuarent"/>
                                        </div>
                                        <div className="r-item-content">
                                            <h5> there will be an off-site corporate office </h5>
                                            <span>company name</span>
                                            <ul>
                                                <li>Special One</li>
                                                <li>Special Two</li>
                                                <li>Special Three</li>
                                            </ul>
                                            <Link to="/restaurants/details" className="custom-btn btn">details</Link>
                                        </div>
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="r-item z-depth-1">
                                        <div className="r-item-thumb">
                                            <img src={restuarentTwo} alt="restuarent"/>
                                        </div>
                                        <div className="r-item-content">
                                            <h5>In regional or national restaurant chains </h5>
                                            <span>company name</span>
                                            <ul>
                                                <li>Special One</li>
                                                <li>Special Two</li>
                                                <li>Special Three</li>
                                            </ul>
                                            <Link to="/restaurants/details" className="custom-btn btn">details</Link>
                                        </div>
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="r-item z-depth-1">
                                        <div className="r-item-thumb">
                                            <img src={restuarentTwo} alt="restuarent"/>
                                        </div>
                                        <div className="r-item-content">
                                            <h5>Restuarent title</h5>
                                            <span>company name</span>
                                            <ul>
                                                <li>Special One</li>
                                                <li>Special Two</li>
                                                <li>Special Three</li>
                                            </ul>
                                            <Link to="/restaurants/details" className="custom-btn btn">details</Link>
                                        </div>
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="r-item z-depth-1">
                                        <div className="r-item-thumb">
                                            <img src={restuarentOne} alt="restuarent"/>
                                        </div>
                                        <div className="r-item-content">
                                            <h5>Restuarent title</h5>
                                            <span>company name</span>
                                            <ul>
                                                <li>Special One</li>
                                                <li>Special Two</li>
                                                <li>Special Three</li>
                                            </ul>
                                            <Link to="/restaurants/details" className="custom-btn btn">details</Link>
                                        </div>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </div>
                </MDBContainer>
            </section>
        );
    }
}

export default FoodRestuarent;