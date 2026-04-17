import { Component } from "react";
import HeroBanner from './HeroBanner'
import HeroText from './HeroText'
import OtherBanners from './OtherBanners'
import ReactGA from "react-ga";

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.state.showBanner = this.props.showBanner;
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
        <style>{`
          .nav-inner {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 16px;
            display: flex;
            align-items: center;
            min-height: 68px;
            gap: 10px;
            flex-wrap: nowrap;
          }
          .nav-wordmark { margin-top: -2px; }
          .nav-buttons { flex-shrink: 0; flex-wrap: nowrap; }
          @media (max-width: 560px) {
            .nav-inner {
              flex-wrap: wrap;
              min-height: unset;
              padding: 10px 14px 8px;
              gap: 6px;
            }
            .nav-wordmark { margin-top: 0; }
            .nav-buttons {
              flex: 0 0 100%;
              flex-wrap: nowrap;
              justify-content: center !important;
              padding-bottom: 6px;
            }
          }
        `}</style>
        <nav style={{
          background: "#1a3a2a",
          position: "sticky", top: 0, zIndex: 100,
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
        }}>
          {/* Top gold shimmer line */}
          <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

          <div className="nav-inner">

            {/* Logo + wordmark */}
            <div
              style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", flexShrink: 0 }}
              onClick={() => {
                this.props.onRouteChange('/home');
              }}
            >
              {this.props.route === '/sol' ? (
                <div style={{
                  width: 42, height: 42, borderRadius: "50%", overflow: "hidden", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "#fff", border: "2px solid #c9a84c",
                }}>
                  <img src="/sol-logo.png" alt="SOL"
                    style={{ width: "150%", height: "150%", objectFit: "cover", objectPosition: "center" }} />
                </div>
              ) : (
                <div style={{
                  width: 42, height: 42, borderRadius: "50%", overflow: "hidden",
                  flexShrink: 0, border: "2px solid #c9a84c",
                }}>
                  <img src={this.state.branding.logo_url} alt={this.state.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              )}
              <span className="nav-wordmark" style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
                <span style={{ color: "#c9a84c", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
                  {this.props.route === '/sol' ? "SOL Youth Group" : "Al Zahrah Islamic Center"}
                </span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.82)", fontWeight: 400 }}>
                  {this.props.route === '/sol' ? "Seeds of Light" : "\u0645\u0631\u0643\u0632 \u0627\u0644\u0632\u0647\u0631\u0627\u0621 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064a"}
                </span>
              </span>
            </div>

            {/* Spacer — hidden on mobile via flex-wrap */}
            <div style={{ flex: 1 }} />

            {/* Nav buttons */}
            <ul className="nav-buttons" style={{
              display: "flex", alignItems: "center", gap: 4,
              listStyle: "none", margin: 0, padding: 0,
              justifyContent: "flex-end",
            }}>
              {this.state.pages.map((item) => {
                const isActive = this.props.route === item.href;
                return (
                  <li key={item.href}>
                    <button
                      onClick={() => {
                        gaEventTracker(item.name);
                        this.props.onRouteChange(item.href);
                      }}
                      style={{
                        background: isActive ? "rgba(201,168,76,0.15)" : "transparent",
                        border: isActive ? "1px solid rgba(201,168,76,0.4)" : "1px solid transparent",
                        color: isActive ? "#c9a84c" : "rgba(255,255,255,0.92)",
                        fontWeight: isActive ? 700 : 500,
                        fontSize: 13, padding: "6px 14px",
                        borderRadius: 100, cursor: "pointer",
                        transition: "all 0.15s ease", whiteSpace: "nowrap",
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
                          e.currentTarget.style.color = "rgba(255,255,255,0.92)";
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

          {/* Bottom gold shimmer line */}
          <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
        </nav>

        {this.props.route !== '/sol' && (
          <div style={{
            position: "relative",
            background: "linear-gradient(135deg, #1a3a2a 0%, #0d2118 100%)",
            overflow: "hidden",
            minHeight: 320
          }}>
            <div style={{
              position: "absolute", inset: 0, zIndex: 0,
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(201,168,76,0.07) 0%, transparent 60%)",
              pointerEvents: "none"
            }} />
            <div className="max-w-7xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
              <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                {this.state.showBanner && <HeroText data={this.state} />}
              </div>
            </div>
            {this.state.showBanner === true
              ? <HeroBanner data={this.state} />
              : <OtherBanners data={this.state} hide={this.props.route === '/sol'} />
            }
          </div>
        )}

      </div>
    );
  }
}

export default Navigation
