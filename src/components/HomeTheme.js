import PrayerTimes from './PrayerTimes';
import FacebookSection from './FacebookSection';
import About from './About';
import DonationSection from './DonationSection';
import Footer from './Footer';

const MOSQUE_GREEN = "#1a3a2a";
const MOSQUE_GOLD = "#c9a84c";

const themeStyles = `
  .home-theme-divider {
    display: flex; align-items: center; gap: 12px;
    margin-bottom: 28px; justify-content: center;
    padding: 40px 0 0;
  }
  .home-theme-divider span {
    color: ${MOSQUE_GOLD}; font-weight: 800; font-size: 12px;
    letter-spacing: 3px; text-transform: uppercase;
    white-space: nowrap;
  }
  .home-theme-divider .line {
    height: 1px; flex: 1; background: rgba(0,0,0,0.1);
  }
  /* Section headings */
  .home-theme-wrap h2.text-3xl,
  .home-theme-wrap h2.text-2xl {
    color: ${MOSQUE_GREEN} !important;
    font-weight: 900 !important;
  }
  .home-theme-wrap .mosque-website__text--brand {
    color: ${MOSQUE_GOLD} !important;
  }
  /* Donation */
  .home-theme-wrap #donate {
    background: linear-gradient(135deg, ${MOSQUE_GREEN} 0%, #0d2118 100%);
    border-radius: 20px;
    padding: 40px 32px !important;
  }
  .home-theme-wrap #donate h2,
  .home-theme-wrap #donate p,
  .home-theme-wrap #donate span {
    color: #fff !important;
  }
  .home-theme-wrap #donate .mosque-website__text--brand {
    color: ${MOSQUE_GOLD} !important;
  }
  /* Facebook */
  .home-theme-wrap #FacebookSection {
    background: #fff;
    border-radius: 20px;
    padding: 36px 32px;
  }
  .home-theme-wrap #FacebookSection h2 {
    color: ${MOSQUE_GREEN} !important;
  }
  @media (max-width: 600px) {
    .home-theme-wrap #donate { border-radius: 12px; padding: 28px 20px !important; }
    .home-theme-wrap #FacebookSection { padding: 20px 16px; border-radius: 12px; }
  }
`;

function SectionDivider({ label }) {
  return (
    <div className="home-theme-divider">
      <div className="line" style={{ background: `linear-gradient(to right, transparent, ${MOSQUE_GOLD}66)` }} />
      <span>{label}</span>
      <div className="line" style={{ background: `linear-gradient(to left, transparent, ${MOSQUE_GOLD}66)` }} />
    </div>
  );
}

export default function HomeTheme({ data }) {
  return (
    <div className="home-theme-wrap" style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      background: "#f5f5f0",
      minHeight: "100vh"
    }}>
      <style>{themeStyles}</style>

      {/* Prayer Times */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
        <SectionDivider label="Prayer Times" />
        <PrayerTimes />
      </div>

      {/* Facebook */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
        <SectionDivider label="Social Media" />
        <FacebookSection data={data} />
      </div>

      {/* About */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
        <SectionDivider label="About Us" />
        <About data={data} />
      </div>

      {/* Donation */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 40px" }}>
        <SectionDivider label="Support Us" />
        <DonationSection data={data} />
      </div>

      {/* Contact + Footer — merged into Footer component */}
      <Footer data={data} />
    </div>
  );
}
