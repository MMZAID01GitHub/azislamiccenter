

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
    <div>
      {/* ── Top Navigation Bar ── */}
      <nav style={{
        background: "#1a3a2a",
        position: "sticky", top: 0, zIndex: 100,
        boxShadow: "0 2px 16px rgba(0,0,0,0.35)"
      }}>
        {/* ── Top gold shimmer line ── */}
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          padding: "0 16px",
          display: "flex", alignItems: "center",
          height: 64, gap: 12
        }}>

          {/* Logo / wordmark */}
          <div
            style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", flexShrink: 0 }}
            onClick={() => {
              this.props.onRouteChange('/home');
              this.setState({ showBanner: true });
            }}
          >
            {this.props.route === '/sol' ? (
              <div style={{
                width: 42, height: 42, borderRadius: "50%", overflow: "hidden",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "#fff", border: "2px solid #c9a84c", flexShrink: 0
              }}>
                <img src="/sol-logo.png" alt="SOL"
                  style={{ width: "150%", height: "150%", objectFit: "cover", objectPosition: "center" }} />
              </div>
            ) : (
              <div style={{
                width: 44, height: 44, borderRadius: "50%", overflow: "hidden",
                flexShrink: 0, border: "2px solid #c9a84c",
              }}>
                <img
                  src={this.state.branding.logo_url}
                  alt={this.state.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            )}
            <span style={{
              color: "#fff", fontWeight: 800, fontSize: 15,
              lineHeight: 1.2, display: "flex", flexDirection: "column"
            }}>
              <span style={{ color: "#c9a84c", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
                {this.props.route === '/sol' ? "SOL Youth Group" : "Al Zahrah Islamic Center"}
              </span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", fontWeight: 400 }}>
                {this.props.route === '/sol' ? "Seeds of Light" : "مركز الزهراء الإسلامي"}
              </span>
            </span>
          </div>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Nav links */}
          <ul style={{ display: "flex", alignItems: "center", gap: 4, listStyle: "none", margin: 0, padding: 0, flexShrink: 0, flexWrap: "wrap", justifyContent: "flex-end" }}>
            {this.state.pages.map((item) => {
              const isActive = this.props.route === item.href;
              return (
                <li key={item.href}>
                  <button
                    onClick={() => {
                      gaEventTracker(item.name);
                      this.props.onRouteChange(item.href);
                      item.href === '/home'
                        ? this.setState({ showBanner: true })
                        : this.setState({ showBanner: false });
                    }}
                    style={{
                      background: isActive ? "rgba(201,168,76,0.15)" : "transparent",
                      border: isActive ? "1px solid rgba(201,168,76,0.4)" : "1px solid transparent",
                      color: isActive ? "#c9a84c" : "rgba(255,255,255,0.75)",
                      fontWeight: isActive ? 700 : 500,
                      fontSize: 14,
                      padding: "7px 16px",
                      borderRadius: 100,
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                      letterSpacing: 0.3
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.color = "#fff";
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                      }
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>

        </div>
        {/* ── Bottom gold shimmer line ── */}
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
      </nav>

      {this.props.route !== '/sol' && (
      <div style={{
        position: "relative",
        background: "linear-gradient(135deg, #1a3a2a 0%, #0d2118 100%)",
        overflow: "hidden",
        minHeight: 320
      }}>
        {/* subtle pattern overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(201,168,76,0.07) 0%, transparent 60%)",
          pointerEvents: "none"
        }} />
        <div className="max-w-7xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
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
          : <OtherBanners data={this.state} hide={this.props.route === '/sol'} />
        }
      </div>
      )}

  </div>    
  );
  }

}

export default Navigation