import React, { Component } from 'react'
import {MDBContainer} from 'mdbreact'
class Error extends Component {
    state = {  }
    render() {
        return (
            <section className="error-section">
                <MDBContainer>
                    <h1>404 page dosen't found</h1>
                </MDBContainer>
            </section>
        );
    }
}

export default Error;