import AuthAction from "../actions/authAction";
import * as firebase from "firebase";

class AuthMiddleware {

    static signUp(data){
        return dispatch => {
            dispatch(AuthAction.signup(true))
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then((docs) => {
                firebase.database().ref().child("users/"+ firebase.auth().currentUser.uid).set({
                  email : data.email,
                  password : data.password,
                  firstName : data.firstName,
                  lastName : data.lastName
                })
                .then(user => dispatch(AuthAction.signupSuccess(user)))
              }).catch(error  => dispatch(AuthAction.signupFailure(error)))
        }
    }

    static signIn(data){
      return dispatch => {
          dispatch(AuthAction.signin(true))
          firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(user => {
              firebase.database().ref().child('users/' + firebase.auth().currentUser.uid).on('value', snap =>  {
                dispatch(AuthAction.signinSuccess(snap.val()))
              })
            }).catch(error => dispatch(AuthAction.signinFailure(error)))
      }
    }

    static logout(data) {
      return dispatch => {
        dispatch(AuthAction.logout(true));
        firebase.auth().signOut()
          .then(user => dispatch(AuthAction.logoutSuccess(user)))
          .catch(error => dispatch(AuthAction.logoutFailure(error)));
      };
    }

}

export default AuthMiddleware;