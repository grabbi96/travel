import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from 'mdbreact'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faMapMarked, faUser, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'
class EditProfile extends Component {
    state = {  }
    render() {
        return (
            <main>
                <section className="edit-profile-section section-padding section-bg-color">
                    <MDBContainer>
                        <div className="edit-profile-area">
                        <div className="edit-profile-header">
                            
                            <h6>Personal Information</h6>
                            <FontAwesomeIcon icon={faEdit} />
                        </div>
                        <div className="edit-profile-wrapper">
                            <MDBRow>
                                <MDBCol md="6">
                                    <div className="form-group  icon-parent left-icon-label">
                                        <label htmlFor="exampleInput">Name</label>
                                        <input
                                            className="form-control"
                                            placeholder="name"
                                        />
                                        <FontAwesomeIcon icon={faUser} className="icon-children" />
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="form-group  icon-parent left-icon-label">
                                        <label htmlFor="exampleInput">Emergency Contact</label>
                                        <input
                                            className="form-control"
                                            placeholder="Emergency Contact"
                                        />
                                        <FontAwesomeIcon icon={faPhone} className="icon-children" />
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="form-group  icon-parent left-icon-label">
                                        <label htmlFor="exampleInput">Emergency Address</label>
                                        <input
                                            className="form-control"
                                            placeholder="Emergency Address"
                                        />
                                        <FontAwesomeIcon icon={faMapMarked} className="icon-children" />
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="form-group  icon-parent left-icon-label">
                                        <label htmlFor="exampleInput">Shipping Address</label>
                                        <input
                                            className="form-control"
                                            placeholder="Shipping Address"
                                        />
                                        <FontAwesomeIcon icon={faMapMarked} className="icon-children" />
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="form-group  icon-parent left-icon-label">
                                        <label htmlFor="exampleInput">Preferred Language</label>
                                        <select className="browser-default custom-select">
                                            <option>Preferred Language</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="form-group  icon-parent left-icon-label">
                                        <label htmlFor="exampleInput">Gender</label>
                                        <select className="browser-default custom-select">
                                            <option>Preferred Language</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="form-group  icon-parent left-icon-label">
                                        <label htmlFor="exampleInput">Timezone</label>
                                        <select className="browser-default custom-select">
                                            <option>Select Timezone</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="form-group  icon-parent left-icon-label">
                                        <label htmlFor="exampleInput">Preferred Currency</label>
                                        <input
                                            className="form-control"
                                            placeholder="Preferred Currency"
                                        />
                                        <FontAwesomeIcon icon={faMapMarked} className="icon-children" />
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="form-group  icon-parent left-icon-label">
                                        <label htmlFor="exampleInput">Profile Video</label>
                                        <input
                                            className="form-control"
                                            placeholder="Profile Video"
                                        />
                                        <FontAwesomeIcon icon={faVideo} className="icon-children" />
                                    </div>
                                </MDBCol>
                                <MDBCol md="12">
                                    <MDBInput type="textarea" label="Discription..." rows="3" />
                                </MDBCol>
                                <div className="edit-profile-btn-area">
                                    <MDBBtn color="danger">Cancel</MDBBtn>
                                    <MDBBtn color="success">update</MDBBtn>
                                </div>
                            </MDBRow>
                            </div>
                        </div>
                    </MDBContainer>
                </section>
            </main>
        );
    }
}

export default withRouter(EditProfile);