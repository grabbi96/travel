import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
// mdbreact
import {MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBIcon} from 'mdbreact';
import Input from '../../components/Form/Input/Input'
import {connect} from 'react-redux'
import {login} from '../../store/actions/authAction'
import './Login.css'
class Login extends Component {
    state = {
        email:"",
        password:""
    }
    changeHandler = event =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    submitHandler = event =>{
        event.preventDefault()
        let user = {
            email:this.state.email,
            password:this.state.password
        }
        this.props.login(user, this.props.history)
    }
    render() {
        return (
            <div className="login-page text-center">
                <MDBContainer>
                    <div className="login-form-area">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardHeader className="form-header warm-flame-gradient rounded">
                                    <h3 className="my-3 white-text">
                                        <MDBIcon icon="lock" /> Sign in
                                    </h3>
                                </MDBCardHeader>
                                <form className="login-form" onSubmit={this.submitHandler}>
                                    <Input 
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.changeHandler}
                                        placeholder="Email" 
                                    />
                                    <Input 
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        onChange={this.changeHandler}
                                        value={this.state.password}
                                    />
                                    <MDBBtn type="submit" onSubmit={this.submitHandler} className="custom-btn" style={{backgroundColor:"#F96332", border: 'none'}} block>Sing In</MDBBtn>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </MDBContainer>
            </div>
        );
    }
}

export default connect(null, {login})(Login);