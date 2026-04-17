// import './App.css';
// import "./styles/globals.css"
// import Head from 'next/head'

import { Helmet } from 'react-helmet';
import Navigation from './components/Navigation'
import MosqueBrandingCSS from './components/MoqueBrandingCSS'
import Sol from './components/Sol'
import HomeTheme from './components/HomeTheme'
import ContentSection from './components/ContentSection'
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
    const showBanner = route === '/home';
    this.setState({ route, showBanner });
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
      <Navigation data={this.state} onRouteChange={this.onRouteChange} showBanner={this.state.showBanner} route={this.state.route} />
      {
        this.state.route === '/home'
        ? 
        <HomeTheme data={this.state} />
        : this.state.route === '/sol'
        ?
        <Sol />
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