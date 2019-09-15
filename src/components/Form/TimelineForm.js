import React, { Component } from 'react';
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
class TimelineForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="timeline-form">
                    <form>
                      <div className="form-group">
                        <textarea type="text"
                          name="text"
                          id="exampleText"
                          placeholder="What are you thinking"
                          className="form-control">

                        </textarea>
                          
                        
                      </div>
                      <div className="timeline-form-bottom">
                        <input
                          type="submit"
                          className="custom-btn btn"
                          value="Share"
                        />
                        <FontAwesomeIcon icon={faGlobe} className="icon" />
                      </div>
                    </form>
                  </div>
         );
    }
}
 
export default TimelineForm;