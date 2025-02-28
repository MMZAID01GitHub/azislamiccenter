

import { Component } from "react";
import HeroBanner  from './HeroBanner'
import HeroText from './HeroText'
import OtherBanners from './OtherBanners'
import ReactGA from "react-ga";
// import useAnalyticsEventTracker from "./GoogleAnalytics";



class  Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.data;
    console.log(this.props.data.showBanner)
    this.state.showBanner= this.props.showBanner;
    // const [navbar, setNavbar] = useState(false);
    // this.onRouteChange = this.props.onRouteChange
  }

  useAnalyticsEventTracker = (category="Blog category") => {
    const eventTracker = (action = "test action", label = "test label") => {
      ReactGA.event({category, action, label});
    }
    return eventTracker;
  }
  
    
  render() {
    const gaEventTracker = this.useAnalyticsEventTracker('navigate');
    return (
      // https://larainfo.com/blogs/react-responsive-navbar-menu-with-tailwind-css-example
    <div> 
      <nav className="w-full bg-white shadow">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
              <div>
                  <div className="flex items-center justify-between py-3 md:py-5 md:block">
                      <a href="https://www.facebook.com/Alzaharah/">
                      <img
                          className={`${this.state.branding.larger_logo ? "h-14" : "h-16"} w-auto`}
                          src={this.state.branding.logo_url}
                          alt="hero"
                        />
                      </a>
                      <div className="md:hidden">
                          <button
                              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                              onClick={() => console.log("hi")}
                          >
                              {(
                                  <svg
                                      xmlns="this.state.branding.logo_url"
                                      className="w-6 h-6"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                  >
                                      <path
                                          fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"
                                      />
                                  </svg>
                              ) }
                          </button>
                      </div>
                  </div>
              </div>
              <div>
                  <div
                      className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                         "block" 
                      }`}
                  >
                      <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">

                      {this.state.pages.map((item) => (

                    <li className="text-xl text-black-1400 hover:text-red-900 hover:text-italics" key={item.href}>
                    <p   onClick={() => {
                      gaEventTracker(item.name)
                      this.props.onRouteChange(item.href)
                      item.href === '/home'
                      ? this.setState({showBanner:true})
                      : this.setState({showBanner:false}) }}>
                      {item.name}
                      </p>
                    </li>

                  ))}


                      </ul>
                  </div>
              </div>
          </div>
      </nav>

      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
  
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-24 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href={this.state.route}>
                  
                        <span className="sr-only">{this.state.name}</span>
                        {/* <img
                          className={`${this.state.branding.larger_logo ? "h-32" : "h-16"} w-auto`}
                          src={this.state.branding.logo_url}
                          alt="hero"
                        /> */}
                     
                    </a>
                  </div>
                </div>
                <div className="xhidden md:block md:ml-10 pr-4 space-x-8">

                </div>
              </nav>
            </div>
            {
              this.state.showBanner
              ? <HeroText data={this.state} />
              : console.log("no banner")
            }

          </div>
        </div>
        {
          this.state.showBanner === true
          ?   <HeroBanner data={this.state} />
          : <OtherBanners data={this.state} />
        }
      </div>  

  </div>    
  );
  }

}

export default Navigation