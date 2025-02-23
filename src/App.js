// import './App.css';
// import "./styles/globals.css"
// import Head from 'next/head'

import { Helmet } from 'react-helmet';
import About from './components/About'
import Contact from './components/Contact'
import ContentSection from './components/ContentSection'
import DonationSection from './components/DonationSection'
import Navigation from './components/Navigation'
import MosqueBrandingCSS from './components/MoqueBrandingCSS'
import PrayerTimes from './components/PrayerTimes'
import Team from './components/Team'
import mosques from './data/mosques.json'
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import GoogleAnalytics from './components/GoogleAnalytics';
// const TRACKING_ID = process.env.REACT_APP_GOOGLE_MEASUREMENT_ID ? process.env.REACT_APP_GOOGLE_MEASUREMENT_ID : 'G-GCS07570PB' // OUR_TRACKING_ID
const TRACKING_ID = 'G-GCS07570PB' // OUR_TRACKING_ID

if (TRACKING_ID) {
  ReactGA.initialize(TRACKING_ID)
}
else {console.log('no tracking')}

class App extends Component {
  constructor() {
    super();
    this.state = mosques
    this.state.route = '/home'
    this.state.showBanner = true
    
  };

  onRouteChange = (route) => {
    route === '/home'
    ? this.setState({ showBanner: true })
    : this.setState({showBanner: false});
    this.setState({ route: route });
    console.log(this.state.route)
    console.log("new state",this.state.showBanner)
    // console.log(this.state.showBanner)
  }

  render() {
    // let data = this.state
    return (
      <div className="App">
      <Helmet>
        <title>{this.state.name} - Mosque Website</title>
        <GoogleAnalytics />
      </Helmet>


      <MosqueBrandingCSS data={this.state} />
      <Navigation data={this.state} onRouteChange={this.onRouteChange} showBanner = {this.state.showBanner} />
      {
        this.state.route === '/home'
        ? 
        <div>
          <PrayerTimes data={this.state} />
          <About data={this.state} />
          <ContentSection data={this.state.content_sections.home} />
          <DonationSection data={this.state} />
          <Team data={this.state} />
          <Contact data={this.state} />
        </div>
        : 
        <div>
          <ContentSection data={this.state.content_sections.events} />
        </div>
      }

    </div>
    );
  }
}

export default App
