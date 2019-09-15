import React from 'react';
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faEllipsisH,
  faThumbsUp,
  faThumbsDown,
  faShare
} from "@fortawesome/free-solid-svg-icons";
import userImage from "../../assets/images/user.png";
class TimeLinePost extends React.Component {
  state={
    replyCommentForm:{
      value:false
    }
  }
  replyCommentHanfler = (val)=>{
    this.setState({
      replyCommentForm:{
        value:val
      }
    })
  }
  render(){
    return (
        <div className="timeline-post-item z-depth-1">
                    <div className="post-contant">
                      <div className="post-contant-top">
                        <div className="user-post-info">
                          <div className="user-post-info-thumb">
                            <img src={userImage} alt="user icon" />
                          </div>
                          <div className="user-post-info-content">
                            <h4>
                              Radwan Ahmed <span>made a post</span>
                            </h4>
                            <span>1 minutes ago</span>
                          </div>
                        </div>
                        <div className="user-post-options">
                          <FontAwesomeIcon
                            icon={faEllipsisH}
                            className="icon"
                          />
                        </div>
                      </div>
                      <div className="post-contant-middle">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Libero quis tempore quidem, dicta nemo veritatis
                          fugit quia aliquam animi, optio temporibus aperiam
                          laudantium inventore consectetur commodi illo nesciunt
                          odio explicabo?
                        </p>
                      </div>
                      <div className="post-contant-bottom">
                        <ul className="post-reviews">
                          <li>
                            <FontAwesomeIcon icon={faThumbsUp} />2
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faThumbsDown} />2
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faShare} />2
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-comment-form">
                      <form>
                        <div className="input-group">
                          <input
                            placeholder="Add a comment"
                            className="icon-parent form-control"
                          />
                          <FontAwesomeIcon
                            icon={faGlobe}
                            className="icon icon-children"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="post-comment-list">
                      <ul className="comment-lists">
                          <li className="comment-item">
                              <div className="comment-area">
                                  <div className="comment-thumb">
                                       <img src={userImage} alt="comment user"/>                                     
                                  </div>
                                  <div className="comment-content">
                                    <h5>User name <span> 5 minutes ago</span> </h5>
                                    <p>lorem hen ten</p>
                                    <div className="meta-post">
                                        <ul>
                                          <li>
                                              <a href="/"><i className="fas fa-thumbs-up"></i> like</a>
                                          </li>
                                          <li>
                                            <a href="/" onClick={(e) => {
                                                e.preventDefault()
                                                this.replyCommentHanfler()
                                            }}>
                                            <i className="fas fa-reply"></i> Reply
                                            </a>
                                          </li>
                                          
                                        </ul>
                                      </div>
                                  </div>
                                  
                              </div>
                              <ul className="child-comment-list">
                                <li>
                                  <div className="comment-area">
                                      <div className="comment-thumb">
                                          <img src={userImage} alt="comment user"/>                                     
                                      </div>
                                      <div className="comment-content">
                                        <h5>User name <span> 5 minutes ago</span> </h5>
                                        <p>lorem hen ten</p>
                                      </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="comment-area">
                                      <div className="comment-thumb">
                                          <img src={userImage} alt="comment user"/>                                     
                                      </div>
                                      <div className="comment-content">
                                        <h5>User name <span> 5 minutes ago</span> </h5>
                                        <p>lorem hen ten</p>
                                      </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="comment-area">
                                      <div className="comment-thumb">
                                          <img src={userImage} alt="comment user"/>                                     
                                      </div>
                                      <div className="comment-content">
                                        <h5>User name <span> 5 minutes ago</span> </h5>
                                        <p>lorem hen ten</p>
                                      </div>
                                  </div>
                                </li>
                              </ul>
                              <div className="comment-reply-area">
                                <div className="post-comment-form">
                                  <form>
                                    <div className="input-group">
                                      <input
                                        placeholder="Add a comment"
                                        className="icon-parent form-control"
                                      />
                                      <FontAwesomeIcon
                                        icon={faGlobe}
                                        className="icon icon-children"
                                      />
                                    </div>
                                  </form>
                                </div>
                              </div>
                          </li>
                          <li className="comment-item">
                              <div className="comment-area">
                                  <div className="comment-thumb">
                                       <img src={userImage} alt="comment user"/>                                     
                                  </div>
                                  <div className="comment-content">
                                    <h5>User name <span> 5 minutes ago</span> </h5>
                                    <p>lorem hen ten</p>
                                    <div className="meta-post">
                                        <ul>
                                          <li>
                                              <a href="/"><i className="fas fa-thumbs-up"></i> like</a>
                                          </li>
                                          <li>
                                              <a href="/" onClick={(e) => {
                                                  e.preventDefault()
                                                  this.replyCommentHanfler()
                                              }}>
                                              <i className="fas fa-reply"></i> Reply
                                              </a>
                                          </li>
                                          
                                        </ul>
                                      </div>
                                  </div>
                                  
                              </div>
                              <div className="comment-reply-area">
                                <div className="post-comment-form">
                                  <form>
                                    <div className="input-group">
                                      <input
                                        placeholder="Add a comment"
                                        className="icon-parent form-control"
                                      />
                                      <FontAwesomeIcon
                                        icon={faGlobe}
                                        className="icon icon-children"
                                      />
                                    </div>
                                  </form>
                                </div>
                              </div>
                          </li>
                      </ul>
                    </div>
                  </div>
                  
    )
  }
}

export default TimeLinePost