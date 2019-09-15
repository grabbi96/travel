import React, { Component } from 'react';
import {MDBContainer, MDBFormInline, MDBIcon, MDBListGroup, MDBListGroupItem} from 'mdbreact'
import messageUser from '../../assets/images/user.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShareSquare } from '@fortawesome/free-solid-svg-icons'
import './Message.css'
class MEasage extends Component {
    state = {  }
    render() {
        return (
            <main>
                <section className="message-section section-padding">
                    <MDBContainer>
                        <div className="message-main-area">
                            <div className="message-left">
                                <div className="message-left-header">
                                    <MDBFormInline className="md-form">
                                        <MDBIcon icon="search" />
                                        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                                    </MDBFormInline>
                                </div>
                                <div className="message-left-wrapper">
                                    <MDBListGroup>
                                        <MDBListGroupItem>
                                            <div className="message-users">
                                                <div className="message-user-thumb">
                                                    <img style={{width:'50px'}} src={messageUser} className="rounded-circle border border-light" alt="message user"/>
                                                </div>
                                                <div className="message-user-info">
                                                   <h6>redoan hossain</h6>
                                                   <span>time and date</span>
                                                </div>
                                            </div>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem>
                                            <div className="message-users">
                                                <div className="message-user-thumb">
                                                    <img style={{width:'50px'}} src={messageUser} className="rounded-circle border border-light" alt="message user"/>
                                                </div>
                                                <div className="message-user-info">
                                                   <h6>redoan hossain</h6>
                                                   <span>time and date</span>
                                                </div>
                                            </div>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem>
                                            <div className="message-users">
                                                <div className="message-user-thumb">
                                                    <img style={{width:'50px'}} src={messageUser} className="rounded-circle border border-light" alt="message user"/>
                                                </div>
                                                <div className="message-user-info">
                                                   <h6>redoan hossain</h6>
                                                   <span>time and date</span>
                                                </div>
                                            </div>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem>
                                            <div className="message-users">
                                                <div className="message-user-thumb">
                                                    <img style={{width:'50px'}} src={messageUser} className="rounded-circle border border-light" alt="message user"/>
                                                </div>
                                                <div className="message-user-info">
                                                   <h6>redoan hossain</h6>
                                                   <span>time and date</span>
                                                </div>
                                            </div>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem>
                                            <div className="message-users">
                                                <div className="message-user-thumb">
                                                    <img style={{width:'50px'}} src={messageUser} className="rounded-circle border border-light" alt="message user"/>
                                                </div>
                                                <div className="message-user-info">
                                                   <h6>redoan hossain</h6>
                                                   <span>time and date</span>
                                                </div>
                                            </div>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem>
                                            <div className="message-users">
                                                <div className="message-user-thumb">
                                                    <img style={{width:'50px'}} src={messageUser} className="rounded-circle border border-light" alt="message user"/>
                                                </div>
                                                <div className="message-user-info">
                                                   <h6>redoan hossain</h6>
                                                   <span>time and date</span>
                                                </div>
                                            </div>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem>
                                            <div className="message-users">
                                                <div className="message-user-thumb">
                                                    <img style={{width:'50px'}} src={messageUser} className="rounded-circle border border-light" alt="message user"/>
                                                </div>
                                                <div className="message-user-info">
                                                   <h6>redoan hossain</h6>
                                                   <span>time and date</span>
                                                </div>
                                            </div>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem>
                                            <div className="message-users">
                                                <div className="message-user-thumb">
                                                    <img style={{width:'50px'}} src={messageUser} className="rounded-circle border border-light" alt="message user"/>
                                                </div>
                                                <div className="message-user-info">
                                                   <h6>redoan hossain</h6>
                                                   <span>time and date</span>
                                                </div>
                                            </div>
                                        </MDBListGroupItem>
                                    </MDBListGroup>
                                </div>
                            </div>
                            <div className="message-middle">
                                <div className="message-chat-header">
                                    <div className="message-users">
                                        <div className="message-user-thumb">
                                            <img style={{width:'50px'}} src={messageUser} className="rounded-circle border border-light" alt="message user"/>
                                        </div>
                                        <div className="message-user-info">
                                            <h6>redoan hossain</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="message-chat-group">
                                <div className="message-chat-wrapper">
                                    <div className="message-chat-list">
                                        <ul className="message-lists">
                                            <li className="friend-message"> 
                                                <div className="message-item-thumb">
                                                    <img src={messageUser} alt="dfgf" style={{width:'50px'}}/>
                                                </div>
                                                <div className="message-item-content">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt voluptate unde asperiores! Earum ipsam repellat sit id. Facere sequi cum debitis hic, autem enim fuga aut delectus quasi adipisci?</p>
                                                    <span>info time and date</span>
                                                </div>
                                            </li>
                                            <li className="self-message"> 
                                                <div className="message-item-thumb">
                                                    <img src={messageUser} alt="dfgf"/>
                                                </div>
                                                <div className="message-item-content">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt voluptate unde asperiores! Earum ipsam repellat sit id. Facere sequi cum debitis hic, autem enim fuga aut delectus quasi adipisci?</p>
                                                    <span>info time and date</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="message-chat-form-area">
                                <div className="form-group icon-parent">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="formGroupExampleInput"
                                        placeholder="message"
                                    />
                                     <FontAwesomeIcon icon={faShareSquare} className="icon-children" />
                                    </div>
                                   
                                </div>
                            
                                </div>
                                
                            
                            </div>
                            <div className="message-right">
                                <div className="message-right-header">
                                <div className="message-chat-header">
                                    <div className="message-users">
                                            <div className="message-user-thumb">
                                                <img style={{width:'50px'}} src={messageUser} className="rounded-circle border border-light" alt="message user"/>
                                            </div>
                                            <div className="message-user-info">
                                                <h6>redoan hossain</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MDBContainer>
                </section>
                
            </main>
        );
    }
}

export default MEasage;