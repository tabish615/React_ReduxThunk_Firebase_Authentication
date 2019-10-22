import React from 'react';
import { Link } from 'react-router-dom'
import './signup.css';
import { connect } from "react-redux";
import AuthMiddleWare from "../../store/middlewares/authMiddleware";

class SignUp extends React.Component {
  constructor(){
    super();
    this.state = {
      firstName : "",
      lastName : "",
      email : "",
      password : "",
      signupError : false
    }
  }

  submission(e) {
    e.preventDefault()
    let data = {
      email : this.state.email,
      password : this.state.password,
      firstName : this.state.firstName,
      lastName : this.state.lastName,
    }
    this.props.SignUpDispatch(data)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.authReducer && nextProps.authReducer.error && nextProps.authReducer.error.message){
      this.setState({
        signupError : true
      })
    }
}

  render(){
    return this.props.authReducer.isLoading ? (<div className="loader"></div>)
      :
        (<div className="main-container">
          <form onSubmit={(e) => this.submission(e)}>
            <fieldset className="input">
              
              <h1><strong>SignUp</strong></h1>

              <input className="check" type="text" required="required" placeholder="First Name"
                  onChange={e => this.setState({ firstName: e.target.value, signupError : false })} />
              
              <input className="check" type="text" required="required" placeholder="Last Name"
                  onChange={e => this.setState({ lastName: e.target.value, signupError : false })} />
              
                <input className="check" type="text" required="required" placeholder="Email"
                  onChange={e => this.setState({ email: e.target.value, signupError : false})} />
              
              <input  className="check" type="password" required="required" placeholder="Password"
                  onChange={e => this.setState({ password: e.target.value, signupError : false })} />
              
              <input type="submit" value="Signup" />  

              <p className="text-para">Already have an account?
                <Link to="/">
                  Login!
                </Link>
              </p>

              {this.state.signupError && <p className="error"> * Email already exist in  database</p>}

            </fieldset>
          </form>
        </div>)
  }
}

function mapStateToProps(state) {
  return {
    authReducer: state.authReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SignUpDispatch: data => dispatch(AuthMiddleWare.signUp(data))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
