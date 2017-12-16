import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu} from './components/menu';
import HomeComponent from './components/home';
import OurVafraComponent from './components/our';
import GaleryComponent from './components/galery';

class App extends Component {
  render() {
    return (
      <div className="App">
       {/*<Menu />*/}
       <HomeComponent />
       <OurVafraComponent />
       <GaleryComponent />
      </div>
    );
  }
}

export default App;
