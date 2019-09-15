import React, { Component } from "react";
// mdbreact
import {
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBIcon
} from "mdbreact";
import Input from "../../components/Form/Input/Input";
import { connect } from "react-redux";
import { registration } from "../../store/actions/authAction";
import Spinner from "../../components/Spinner/Spinner";
class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {
      password: "",
      confirmPassword: ""
    }
  };
  componentDidMount() {
  }
  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (event.target.name === "password") {
      if (event.target.value.length < 6) {
        this.setState({
          errors: {
            password: "password should be minimum 6 character",
            confirmPassword: this.state.errors.confirmPassword
          }
        });
      } else {
        this.setState({
          errors: {
            password: "",
            confirmPassword: this.state.errors.confirmPassword
          }
        });
      }
    }
    if (event.target.name === "confirmPassword") {
      if (this.state.password !== event.target.value) {
        this.setState({
          errors: {
            password: this.state.errors.password,
            confirmPassword: "password should be match"
          }
        });
      } else {
        this.setState({
          errors: {
            password: this.state.errors.password,
            confirmPassword: ""
          }
        });
      }
    }
  };
  focusHandler = event => {
    if (event.target.name === "password") {
      if (event.target.value.length < 6) {
        this.setState({
          errors: {
            password: "password should be minimum 6 character",
            confirmPassword: this.state.errors.confirmPassword
          }
        });
      }
    }
    if (event.target.name === "confirmPassword") {
      if (this.state.password !== this.state.confirmPassword) {
        this.setState({
          errors: {
            password: this.state.errors.password,
            confirmPassword: "password should be match"
          }
        });
      }
    }
  };

  blurHandler = event => {
    if (event.target.name === "password") {
      if (this.state.password.length < 6) {
        this.setState({
          errors: {
            password: "password should be minimum 6 character",
            confirmPassword: this.state.errors.confirmPassword
          }
        });
      } else {
        this.setState({
          errors: {
            password: "",
            confirmPassword: this.state.errors.confirmPassword
          }
        });
      }
    }
    if (event.target.name === "confirmPassword") {
      if (this.state.password !== this.state.confirmPassword) {
        this.setState({
          errors: {
            password: this.state.errors.password,
            confirmPassword: "password should be match"
          }
        });
      }
    }
  };
  submitHandler = event => {
    event.preventDefault();
    let user = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.confirmPassword
    };
    this.props.registration(user, this.props.history);
    console.log(this.props.error);
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(nextProps.error) !== JSON.stringify(prevState.error)) {
      return {
        errors: nextProps.error
      };
    }
    return null;
  }
  render() {
    return (
      <div className="login-page text-center">
        <MDBContainer>
          <div className="login-form-area">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header warm-flame-gradient z-depth-2 rounded">
                  <h3 className="my-3 white-text">
                    <MDBIcon icon="lock" /> Sign up
                  </h3>
                </MDBCardHeader>
                <form className="login-form" onSubmit={this.submitHandler}>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.changeHandler}
                    value={this.state.firstName}
                    error={this.state.errors.first_name}
                  />
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.changeHandler}
                    value={this.state.lastName}
                    error={this.state.errors.last_name}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.changeHandler}
                    value={this.state.email}
                    error={this.state.errors.email}
                  />
                  <Input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={this.changeHandler}
                    value={this.state.password}
                    error={this.state.errors.password}
                    onFocus={this.focusHandler}
                    onBlur={this.blurHandler}
                  />
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={this.changeHandler}
                    value={this.state.confirmPassword}
                    error={this.state.errors.password_confirmation}
                    onFocus={this.focusHandler}
                  />
                  <MDBBtn
                    type="submit"
                    gradient="peach"
                    onSubmit={this.submitHandler}
                    className="custom-btn"
                    block
                  >
                    {this.props.isloading ? <Spinner /> : "Sing In"}
                  </MDBBtn>
                </form>
              </MDBCardBody>
            </MDBCard>
          </div>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    isloading: state.meta.isLoading
  };
};

export default connect(
  mapStateToProps,
  { registration }
)(Register);
