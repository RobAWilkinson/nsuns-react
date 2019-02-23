import React, { Component } from 'react';
import './App.css';
import LoginSignup from './components/loginSignup/loginSignup';
import MainPage from './pages/mainPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    console.log('rerendering app');
    return (
      <div className="App">
        <header>
          <LoginSignup />
        </header>
        <MainPage />
      </div>
    );
  }
}

export default App;
