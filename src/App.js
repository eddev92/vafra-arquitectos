import React, { Component } from 'react';
import './App.css';
import {MenuComponent} from './components/menu';
import HomeComponent from './components/home';
import OurVafraComponent from './components/our';
import GaleryComponent from './components/galery';

class App extends Component {
  render() {
    return (
      <div className="App">
       <MenuComponent />
       <HomeComponent />
       <OurVafraComponent />
       <GaleryComponent />
      </div>
    );
  }
}

export default App;
