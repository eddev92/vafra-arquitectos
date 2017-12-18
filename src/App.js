import React, { Component } from 'react';
<<<<<<< HEAD
import './App.css';
import {MenuComponent} from './components/menu';
import HomeComponent from './components/home';
import OurVafraComponent from './components/our';
import GaleryComponent from './components/galery';
=======
import logo from './logo.svg';
import './App.css';
>>>>>>> 68e8f936332ca195cea571ad7e0b9bbe904d1908

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
       <MenuComponent />
       <HomeComponent />
       <OurVafraComponent />
       <GaleryComponent />
=======
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
>>>>>>> 68e8f936332ca195cea571ad7e0b9bbe904d1908
      </div>
    );
  }
}

export default App;
