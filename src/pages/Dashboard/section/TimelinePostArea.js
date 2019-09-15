import React, { Component } from 'react';
// mdb react
import {MDBBtn} from 'mdbreact'
// font awesome
import Transition from 'react-transition-group/Transition' 

import TimelineForm from '../../../components/Form/TimelineForm'
import TimeLinePost from '../../../components/TimeLine/TimeLinePost'
class TimeLinePostArea extends Component {
    state = {
        showForm:false,
        replyCommentForm:{
          
        }
    }
    render() { 
        return ( 
            <div>
                <div className="timeline-post-area z-depth-1">
                  <div className="timeline-post-header">
                    <MDBBtn className="classic-btn" onClick={()=> this.setState(prevState => ({showForm:!prevState.showForm}))} >Make a post</MDBBtn>
                    <div className="box">
                      <input
                        type="file"
                        name="file-4[]"
                        id="file-4"
                        className="inputfile inputfile-3"
                        data-multiple-caption="{count} files selected"
                        multiple
                      />
                      <label htmlFor="file-4" className="box-label-image">
                        <span>Image&hellip;</span>
                      </label>
                    </div>
                  </div>
                  <Transition in={this.state.showForm} timeout={1000} mountOnEnter unmountOnExit>
                       {state => 
                        <div  style={{opacity:state === 'exiting'? 0: 1, transition:'opacity .5s ease-in'}}>
                                <TimelineForm />
                        </div>
                       
                       }
                  </Transition>
                  
                </div>
                <div className="timeline-post-items-area">
                    <TimeLinePost />
                
                  
                </div>
            </div>
            
            );
    }
}
 
export default TimeLinePostArea;