import React, { Component } from 'react'
import { MDBNav, MDBNavItem, MDBNavLink} from 'mdbreact'
import feMaleUser from '../../../assets/images/avatar-female.jpg'
class ChatSidebar extends Component {
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
    render() {
        return (
            <div className="chat-aside-content">
                <div className="search">
                    <form className="form-inline position-relative">
                        <input type="search" className="form-control" id="people" placeholder="Search for people..." />
                        <button type="button" className="btn btn-link loop"><i className="fas fa-search"></i></button>
                    </form>
                    <button className="btn create" data-toggle="modal" data-target="#exampleModalCenter"><i className="fas fa-user-plus"></i></button>
                </div>
                <div className="list-group sort">
                    <MDBNav tabs >
                        <MDBNavItem>
                            <MDBNavLink to="#" className={this.state.activeItem === "1" ? "active" : ""} onClick={this.toggle("1")} role="tab">
                                All
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#" className={this.state.activeItem === "2" ? "active" : ""} onClick={this.toggle("2")} role="tab">
                                Offline
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#" className={this.state.activeItem === "3" ? "active" : ""} onClick={this.toggle("3")} role="tab">
                                Online
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNav>
                </div>

                <div className="contacts">
                    <h1>Contacts</h1>
                    {this.state.activeItem === "1" && (
                        <div className="list-group" id="contacts" role="tablist">
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="status">
                                </div>
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="status">
                                </div>
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="status">
                                </div>
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />c
											<div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="status">
                                </div>
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                        </div>
                    )}
                    {this.state.activeItem === "3" && (
                        <div className="list-group" id="contacts" role="tablist">
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="status">
                                </div>
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="status">
                                </div>
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="status">
                                </div>
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="status">
                                </div>
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="status">
                                </div>
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="status">
                                </div>
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="status">
                                </div>
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="status">
                                </div>
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="status">
                                </div>
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                        </div>
                    )}
                    {this.state.activeItem === "2" && (
                        <div className="list-group" id="contacts" role="tablist">
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                            <a href="/" className="filterMembers all online contact show" data-toggle="list">
                                <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Janette" />
                                <div className="data">
                                    <h5>Janette Dalton</h5>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                                <div className="person-add">
                                    <i className="fas fa-user"></i>
                                </div>
                            </a>
                        </div>
                    )}
                </div>

            </div>
        );
    }
}

export default ChatSidebar;