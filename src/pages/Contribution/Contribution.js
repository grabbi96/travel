import React, { Component } from 'react';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import imageSrc from '../../assets/images/sajek.jpg'
import './Contribution.css'
class Contributions extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <main className="contributions section-padding">
                <MDBContainer>
                    <h5 className="contributions-title">
                        Contributions
                    </h5>
                    <MDBRow>
                        <MDBCol md="3" sm="6" xs="6">
                            <div className="contribution-add-item grey lighten-2 rounded z-depth-1">
                                <NavLink to="/contribution/add" className="red rounded">
                                    <FontAwesomeIcon className="white-text" icon={faPlus} />
                                </NavLink>
                            </div>
                        </MDBCol>
                        <MDBCol md="3" sm="6" xs="6">
                            <div className="contribution-item-area">
                                <div className="contribution-item grey lighten-2 rounded z-depth-1">
                                    <div className="contribution-item-thumb">
                                        <img src={imageSrc} alt="user"/>
                                    </div>
                                    <div className="contribution-item-content">
                                        <ul className="contribution-item-info">
                                            <li>name: <span className="red-text">Sajek</span></li>
                                            <li>title: <span className="red-text">Sajek mountain</span></li>
                                            <li>category: <span className="red-text">mountain and forest</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="contribution-item-overlay">
                                    <ul className="contribution-item-options">
                                        <li>
                                            <NavLink to="contribution/view"><FontAwesomeIcon icon={faEye} /> View</NavLink>
                                        </li>
                                        <li>
                                            <a href="/"><FontAwesomeIcon icon={faEdit} /> Edit</a>
                                        </li>
                                        <li>
                                            <a href="/"><FontAwesomeIcon icon={faTrash} /> Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </main> 
        );
    }
}
 
export default Contributions;