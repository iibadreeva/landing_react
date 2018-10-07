import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll'

import Header from './components/header_footer/Header';
import Features from './components/features';
import VunueNfo from './components/vunueNfo';
import HighLights from './components/highLights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ minHeight:"1500px"}}>
          <Header/>
          <Element name="featured">
              <Features />
          </Element>
          <Element name="venuenfo">
              <VunueNfo />
          </Element>
          <Element name="highlights">
              <HighLights />
          </Element>
          <Element name="pricing">
              <Pricing />
          </Element>
          <Element name="location">
              <Location />
          </Element>
          <Footer />
      </div>
    );
  }
}

export default App;
