import React, { Component } from 'react'
import './Profile.css'
import profilePicture from '../../assets/images/redoan.png'
import ProfileDetails from './ProfileDetails/ProfileDetails'
import { Link, withRouter } from 'react-router-dom'

class Profile extends Component {
    state = {
        btnValue: 'edit-profile',
    }
    componentDidMount() {
    }
    componentDidUpdate() {
    }

    render() {
        return (
            <main>
                <section className="profile-banner-section">
                    <div className="profile-banner-left">
                        <div className="profile-banner-left-thumb">
                            <img src={profilePicture} alt="profile" className="rounded-circle z-depth-2 img-thumbnail" />
                        </div>
                        <div className="profile-banner-left-content">
                            <h6>Redoan Hossain</h6>
                            <p>some bio will be here</p>
                        </div>
                    </div>
                    <div className="profile-banner-right" >
                        <div className="profile-banner-right-content">
                            <h4>Hi i am <span className="custom-text-color"> redoan hossain </span> </h4>
                            <h4>Get know about me</h4>
                        </div>
                    </div>
                    <div className="profile-edit-btn"><Link to={`${this.props.match.url}/edit`} className="custom-btn btn"> Update Profile </Link>

                    </div>
                </section>

                <ProfileDetails />


            </main>
        );
    }
}

export default withRouter(Profile);