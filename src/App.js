import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom'
import SignIn from './components/signin/signin';
import SignUp from './components/signup/signup';
import Home from './components/Home/home';


class App extends React.Component {
  render(){
    return (
      <Router>
        <Route path="/" component={SignIn} exact={true}/>
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Home} />
      </Router>
    );
  }
}

export default App;
