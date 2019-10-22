import React from 'react';
import { Link } from 'react-router-dom'
import './signin.css';
import { connect } from "react-redux";
import AuthMiddleWare from "../../store/middlewares/authMiddleware";

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
          email : "",
          password : "",
          siginError : false
        }
      }
    submission(e) {
        e.preventDefault()
        let data = {
          email : this.state.email,
          password : this.state.password,
        }
        this.props.SignInDispatch(data)
      }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.authReducer && nextProps.authReducer.user && nextProps.authReducer.user.email){
            this.props.history.push('/home')
        }
        if(nextProps.authReducer && nextProps.authReducer.error.message){
          this.setState({
            siginError : true
          })
        }
    }
    render(){
        return this.props.authReducer.isLoading ? (<div className="loader"></div>)
            :
            (<div className="main-container">
              <form onSubmit={(e) => this.submission(e)}>
                  <fieldset className="input">
                      <h2><strong>SignIn</strong></h2>

                      <input className="check" type="email" required="required" placeholder="Enter Your Email"
                          onChange={e => this.setState({ email: e.target.value, siginError : false })} />
                      
                      <input className="check" type="password" required="required" placeholder="Enter Your Password"
                          onChange={e => this.setState({ password: e.target.value, siginError : false  })} />
                      <input type="submit" value="Sign In" />
                      
                      <Link to="/signup">
                          <p className="text-para">Create an account</p>
                      </Link>
                      {this.state.siginError && <p className="error"> * User not found in database</p>}
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
        SignInDispatch: data => dispatch(AuthMiddleWare.signIn(data))
    };
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignIn);
