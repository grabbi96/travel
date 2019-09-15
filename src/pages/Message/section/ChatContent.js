import React, { Component } from 'react';
import feMaleUser from "../../../assets/images/avatar-female.jpg";

class ChatContent extends Component {
    state = {  }
    render() {
        return (
            <div className="main">
                <div className="tab-content" id="nav-tabContent">
                    <div className="babble tab-pane fade active show" id="list-chat" role="tabpanel" aria-labelledby="list-chat-list">
                        <div className="chat" id="chat1">
                            <div className="top">
                                <div className="container">
                                    <div className="col-md-12">
                                        <div className="inside">
                                            <a href="/"><img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Keith" /></a>
                                            <div className="status">
                                            </div>
                                            <div className="data">
                                                <h5><a href="/">Keith Morris</a></h5>
                                                <span>Active now</span>
                                            </div>
                                            <a href="/">
                                                <i className="fas fa-info-circle"></i>
                                            </a>
                                            <div className="dropdown">
                                                <a href="/">
                                                    <i className="fas fa-ellipsis-v"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <button className="dropdown-item connect" name="1"><i className="material-icons">phone_in_talk</i>Voice Call</button>
                                                    <button className="dropdown-item connect" name="1"><i className="material-icons">videocam</i>Video Call</button>
                                                    <button className="dropdown-item"><i className="material-icons">clear</i>Clear History</button>
                                                    <button className="dropdown-item"><i className="material-icons">block</i>Block Contact</button>
                                                    <button className="dropdown-item"><i className="material-icons">delete</i>Delete Contact</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content" id="content">
                                <div className="container">
                                    <div className="col-md-12">
                                        <div className="date">
                                            <hr />
                                            <span>Yesterday</span>
                                            <hr />
                                        </div>
                                        <div className="message">
                                            <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Keith" />
                                            <div className="text-main">
                                                <div className="text-group">
                                                    <div className="text">
                                                        <p>We've got some killer ideas kicking about already.</p>
                                                    </div>
                                                </div>
                                                <span>09:46 AM</span>
                                            </div>
                                        </div>
                                        <div className="message me">
                                            <div className="text-main">
                                                <div className="text-group me">
                                                    <div className="text me">
                                                        <p>Can't wait! How are we coming along with the client?</p>
                                                    </div>
                                                </div>
                                                <span>11:32 AM</span>
                                            </div>
                                        </div>
                                        <div className="message">
                                            <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Keith" />
                                            <div className="text-main">
                                                <div className="text-group">
                                                    <div className="text">
                                                        <p>Coming along nicely, we've got a draft for the client quarries completed.</p>
                                                    </div>
                                                </div>
                                                <span>02:56 PM</span>
                                            </div>
                                        </div>
                                        <div className="message me">
                                            <div className="text-main">
                                                <div className="text-group me">
                                                    <div className="text me">
                                                        <p>Roger that boss!</p>
                                                    </div>
                                                </div>
                                                <div className="text-group me">
                                                    <div className="text me">
                                                        <p>I have already started gathering some stuff for the mood boards, excited to start!</p>
                                                    </div>
                                                </div>
                                                <span>10:21 PM</span>
                                            </div>
                                        </div>
                                        <div className="message">
                                            <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Keith" />
                                            <div className="text-main">
                                                <div className="text-group">
                                                    <div className="text">
                                                        <p>Great start guys, I've added some notes to the task. We may need to make some adjustments to the last couple of items - but no biggie!</p>
                                                    </div>
                                                </div>
                                                <span>11:07 PM</span>
                                            </div>
                                        </div>
                                        <div className="date">
                                            <span>Today</span>
                                        </div>
                                        <div className="message me">
                                            <div className="text-main">
                                                <div className="text-group me">
                                                    <div className="text me">
                                                        <p>Well done all. See you all at 2 for the kick-off meeting.</p>
                                                    </div>
                                                </div>
                                                <span>10:21 PM</span>
                                            </div>
                                        </div>
                                        <div className="message">
                                            <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Keith" />
                                            <div className="text-main">
                                                <div className="text-group">
                                                    <div className="text">
                                                        <div className="attachment">
                                                            <button className="btn attach"><i className="material-icons md-18">insert_drive_file</i></button>
                                                            <div className="file">
                                                                <h5><a href="/">Tenacy Agreement.pdf</a></h5>
                                                                <span>24kb Document</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span>11:07 PM</span>
                                            </div>
                                        </div>
                                        <div className="message me">
                                            <div className="text-main">
                                                <div className="text-group me">
                                                    <div className="text me">
                                                        <p>Hope you're all ready to tackle this great project. Let's smash some Brand Concept &amp; Design!</p>
                                                    </div>
                                                </div>
                                                <span><i className="material-icons">check</i>10:21 PM</span>
                                            </div>
                                        </div>
                                        <div className="message">
                                            <img className="avatar-md" src={feMaleUser} data-toggle="tooltip" data-placement="top" title="" alt="avatar" data-original-title="Keith" />
                                            <div className="text-main">
                                                <div className="text-group">
                                                    <div className="text typing">
                                                        <div className="wave">
                                                            <span className="dot"></span>
                                                            <span className="dot"></span>
                                                            <span className="dot"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="col-md-12">
                                    <div className="bottom">
                                        <form className="position-relative w-100">
                                            <textarea className="form-control" placeholder="Start typing for reply..." rows="1"></textarea>
                                            <a href="/" className="emoticons">
                                                <i className="far fa-laugh"></i>
                                            </a>
                                            <button href="/" type="submit" className="send"><i className="fas fa-location-arrow"></i></button>
                                        </form>
                                        <label>
                                            <input type="file" />
                                            <span className="btn attach d-sm-block d-none"><i className="fas fa-paperclip"></i></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatContent;