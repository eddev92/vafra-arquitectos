import React, { Component } from 'react';
import './App.css';
import {MenuComponent} from './components/menu';
import HomeComponent from './components/home';
import OurVafraComponent from './components/our';
import GaleryComponent from './components/galery';
import FooterComponent from './components/footer';
import OurServicesComponent from './components/services';
import SellsComponent from './components/sells';
import OurTeamComponent from './components/our-team';

class App extends Component {
  render() {
    return (
      <div className="App">
       <MenuComponent />
       <HomeComponent />
       <OurVafraComponent />
       <OurServicesComponent />
       <SellsComponent />
       {/* <OurTeamComponent /> */}
       <GaleryComponent />
       <FooterComponent />
      </div>
    );
  }
}

export default App;
