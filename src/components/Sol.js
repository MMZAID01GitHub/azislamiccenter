import { useEffect, useState } from 'react';

const INSTAGRAM_URL = "https://www.instagram.com/shiaoflouisville/";

const SOL_GREEN = "#1a3a2a";
const SOL_GOLD = "#c9a84c";

const responsiveStyles = `
  .sol-hero { padding: 56px 24px 52px; }
  .sol-hero-title { font-size: 36px; font-weight: 900; color: #fff; margin: 0 0 6px; letter-spacing: 1px; }
  .sol-about-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 40px; }
  .sol-instagram-wrap { padding: 0 16px; }
  .sol-links-card { padding: 32px 24px; max-width: 500px; }

  @media (max-width: 900px) {
    .sol-about-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 600px) {
    .sol-hero { padding: 40px 16px 40px; }
    .sol-hero-title { font-size: 26px; }
    .sol-about-grid { grid-template-columns: 1fr; }
    .sol-instagram-wrap { padding: 0; }
    .sol-links-card { padding: 24px 16px; max-width: 100%; box-shadow: none !important; }
    .sol-about-grid > div { box-shadow: none !important; }
    * { -webkit-tap-highlight-color: transparent; }
  }
`;

export default function Sol() {
  const [showDonateModal, setShowDonateModal] = useState(false);

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
         className="bg-white min-h-screen">
      <style>{responsiveStyles}</style>

      {/* ── HERO BANNER ── */}
      <div className="sol-hero" style={{
        background: `linear-gradient(160deg, #081910 0%, #0f2b1c 40%, #1a3a2a 100%)`,
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>

        {/* ══════════════════════════════════════════════════
            ISLAMIC PATTERN + AHL AL-BAYT OVERLAY
            All background layers are z-index 0
            Foreground (logo/text) is z-index 1
        ══════════════════════════════════════════════════ */}

        {/* ░░░ BACKGROUND LAYER CONTAINER (z:0) ░░░ */}
        <div style={{position:"absolute", inset:0, zIndex:0, pointerEvents:"none"}}>

          {/* ── LAYER 1: Tiling 8-pointed star girih pattern ── */}
          <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.13}}
            xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="girih" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon
                  points="40,19 46,31 59,27 55,40 59,53 46,49 40,61 34,49 21,53 25,40 21,27 34,31"
                  fill="none" stroke={SOL_GOLD} strokeWidth="1.2"/>
                <polygon points="40,0 46,12 40,19 34,12" fill="none" stroke={SOL_GOLD} strokeWidth="0.8"/>
                <polygon points="80,40 68,34 61,40 68,46" fill="none" stroke={SOL_GOLD} strokeWidth="0.8"/>
                <polygon points="40,80 34,68 40,61 46,68" fill="none" stroke={SOL_GOLD} strokeWidth="0.8"/>
                <polygon points="0,40 12,46 19,40 12,34" fill="none" stroke={SOL_GOLD} strokeWidth="0.8"/>
                <polygon points="0,0 12,0 19,12 12,19 0,12" fill="none" stroke={SOL_GOLD} strokeWidth="0.8"/>
                <polygon points="80,0 80,12 68,19 61,12 68,0" fill="none" stroke={SOL_GOLD} strokeWidth="0.8"/>
                <polygon points="0,80 0,68 12,61 19,68 12,80" fill="none" stroke={SOL_GOLD} strokeWidth="0.8"/>
                <polygon points="80,80 68,80 61,68 68,61 80,68" fill="none" stroke={SOL_GOLD} strokeWidth="0.8"/>
                <line x1="19" y1="12" x2="27" y2="21" stroke={SOL_GOLD} strokeWidth="0.6"/>
                <line x1="61" y1="12" x2="53" y2="21" stroke={SOL_GOLD} strokeWidth="0.6"/>
                <line x1="19" y1="68" x2="27" y2="59" stroke={SOL_GOLD} strokeWidth="0.6"/>
                <line x1="61" y1="68" x2="53" y2="59" stroke={SOL_GOLD} strokeWidth="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#girih)"/>
          </svg>

          {/* ── LAYER 2: Central radial medallion ── */}
          <svg style={{
            position:"absolute", top:"50%", left:"50%",
            transform:"translate(-50%,-50%)",
            overflow:"visible", opacity:0.22,
          }} width="420" height="420" viewBox="-210 -210 420 420">
            <circle r="200" fill="none" stroke={SOL_GOLD} strokeWidth="1" strokeDasharray="8 6"/>
            <circle r="170" fill="none" stroke={SOL_GOLD} strokeWidth="0.5"/>
            <circle r="120" fill="none" stroke={SOL_GOLD} strokeWidth="0.8" strokeDasharray="4 4"/>
            <circle r="82"  fill="none" stroke={SOL_GOLD} strokeWidth="1.5"/>
            {Array.from({length:16},(_,i)=>{
              const a=i*22.5*Math.PI/180;
              return <line key={i}
                x1={84*Math.sin(a)} y1={-84*Math.cos(a)}
                x2={168*Math.sin(a)} y2={-168*Math.cos(a)}
                stroke={SOL_GOLD} strokeWidth="0.8"/>;
            })}
            {Array.from({length:8},(_,i)=>{
              const a=i*45*Math.PI/180;
              return <circle key={i} cx={188*Math.sin(a)} cy={-188*Math.cos(a)} r="4" fill={SOL_GOLD} opacity="0.9"/>;
            })}
            <path d="M -14,-158 A 28,28 0 1,0 14,-158 A 18,18 0 1,1 -14,-158 Z" fill={SOL_GOLD} opacity="0.7"/>
          </svg>


          {/* ── LAYER 4b: Bottom gold shimmer strip ── */}
          <div style={{
            position:"absolute", bottom:0, left:0, right:0,
            height:3,
            background:`linear-gradient(90deg, transparent, ${SOL_GOLD}70, transparent)`,
          }}/>

        </div>{/* ░░░ END BACKGROUND ░░░ */}

        {/* ▓▓▓ FOREGROUND CONTENT (z:1) — logo, title, text, button ▓▓▓ */}
        <div style={{ position:"relative", zIndex:1 }}>

        <div style={{
          width: 130, height: 130, borderRadius: "50%", margin: "0 auto 20px",
          overflow: "hidden",
          background: "#ffffff",
          boxShadow: `0 0 0 4px ${SOL_GOLD}, 0 8px 32px rgba(0,0,0,0.4)`,
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <img src="/sol-logo.png" alt="SOL Youth Group"
            style={{ width: "150%", height: "150%", objectFit: "cover", objectPosition: "center center" }} />
        </div>

        <h1 className="sol-hero-title" style={{ padding: 0 }}>
          SOL Youth Group
        </h1>
        <p style={{ color:SOL_GOLD, fontSize:16, fontWeight:600, margin:"0 0 12px", letterSpacing:2, textTransform:"uppercase" }}>
          Shia of Louisville
        </p>
        <p style={{ color:"rgba(255,255,255,0.92)", fontSize:15, maxWidth:480, margin:"0 auto 28px", lineHeight:1.6 }}>
          A community of young Shia Muslims in Louisville, Kentucky — growing together in faith, knowledge, and community.
        </p>
        <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
            style={{
              display:"inline-block",
              background:`linear-gradient(135deg, ${SOL_GOLD}, #e8c96a)`,
              color:SOL_GREEN, fontWeight:700, fontSize:14,
              padding:"11px 30px", borderRadius:100, textDecoration:"none",
              boxShadow:"0 4px 16px rgba(201,168,76,0.35)"
            }}>
            Follow on Instagram ↗
          </a>
          <button
            onClick={() => setShowDonateModal(true)}
            style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:`linear-gradient(135deg, ${SOL_GOLD}, #e8c96a)`,
              color:SOL_GREEN, fontWeight:700, fontSize:14,
              padding:"11px 30px", borderRadius:100,
              border:"none", cursor:"pointer",
              boxShadow:"0 4px 16px rgba(201,168,76,0.35)"
            }}>
            SOL Donations
          </button>
        </div>

        </div>{/* ▓▓▓ END FOREGROUND ▓▓▓ */}

      </div>{/* ── END HERO BANNER ── */}

      {/* ── DONATE MODAL ── */}
      {showDonateModal && (
        <div
          onClick={() => setShowDonateModal(false)}
          style={{
            position:"fixed", inset:0, zIndex:1000,
            background:"rgba(0,0,0,0.65)", backdropFilter:"blur(4px)",
            display:"flex", alignItems:"center", justifyContent:"center",
            padding:"24px"
          }}>
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background:`linear-gradient(160deg, #081910 0%, #0f2b1c 50%, ${SOL_GREEN} 100%)`,
              border:`1.5px solid ${SOL_GOLD}55`,
              borderRadius:20,
              padding:"40px 36px 32px",
              maxWidth:400, width:"100%",
              boxShadow:"0 24px 64px rgba(0,0,0,0.55)",
              position:"relative", textAlign:"center"
            }}>
            {/* Close button */}
            <button
              onClick={() => setShowDonateModal(false)}
              style={{
                position:"absolute", top:14, right:16,
                background:"none", border:"none", cursor:"pointer",
                color:"rgba(255,255,255,0.5)", fontSize:22, lineHeight:1
              }}>✕</button>

            {/* Gold divider top */}
            <div style={{height:2, background:`linear-gradient(90deg, transparent, ${SOL_GOLD}, transparent)`, marginBottom:28}}/>

            <p style={{color:SOL_GOLD, fontWeight:800, fontSize:11, letterSpacing:3, textTransform:"uppercase", margin:"0 0 10px"}}>
              Support SOL
            </p>
            <h2 style={{color:"#fff", fontWeight:900, fontSize:22, margin:"0 0 6px"}}>SOL Donations</h2>
            <p style={{color:"rgba(255,255,255,0.65)", fontSize:13, margin:"0 0 28px"}}>
              Help us grow our community — every contribution counts.
            </p>

            {/* Zelle row */}
            <div style={{
              background:"rgba(255,255,255,0.06)", border:`1px solid ${SOL_GOLD}40`,
              borderRadius:12, padding:"18px 20px", marginBottom:12, textAlign:"left"
            }}>
              <p style={{color:SOL_GOLD, fontWeight:800, fontSize:12, letterSpacing:2, textTransform:"uppercase", margin:"0 0 6px"}}>Zelle</p>
              <p style={{color:"#fff", fontWeight:700, fontSize:18, margin:"0 0 4px"}}>(502) 716-2649</p>
              <p style={{color:"rgba(255,255,255,0.55)", fontSize:12, margin:0}}>Open your banking app → Zelle → Send Money</p>
            </div>

            {/* Cash row */}
            <div style={{
              background:"rgba(255,255,255,0.06)", border:`1px solid ${SOL_GOLD}40`,
              borderRadius:12, padding:"18px 20px", marginBottom:24, textAlign:"left"
            }}>
              <p style={{color:SOL_GOLD, fontWeight:800, fontSize:12, letterSpacing:2, textTransform:"uppercase", margin:"0 0 6px"}}>Cash</p>
              <p style={{color:"rgba(255,255,255,0.8)", fontSize:14, margin:0}}>Contact our Treasurer directly to donate in person.</p>
            </div>

            {/* Gold divider bottom */}
            <div style={{height:1, background:`linear-gradient(90deg, transparent, ${SOL_GOLD}40, transparent)`, marginBottom:20}}/>

            <button
              onClick={() => setShowDonateModal(false)}
              style={{
                background:`linear-gradient(135deg, ${SOL_GOLD}, #e8c96a)`,
                color:SOL_GREEN, fontWeight:800, fontSize:14,
                padding:"11px 36px", borderRadius:100,
                border:"none", cursor:"pointer",
                boxShadow:"0 4px 16px rgba(201,168,76,0.35)"
              }}>
              Got it
            </button>
          </div>
        </div>
      )}

      {/* ── ABOUT SECTION ── */}
      <div style={{ background:"#f5f5f0", padding:"56px 24px" }}>
        <div style={{ maxWidth:800, margin:"0 auto" }}>

          {/* Section label */}
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:32, justifyContent:"center" }}>
            <div style={{ height:2, flex:1, background:`linear-gradient(to right, transparent, ${SOL_GOLD})` }} />
            <span style={{ color:SOL_GOLD, fontWeight:800, fontSize:13, letterSpacing:3, textTransform:"uppercase" }}>About SOL</span>
            <div style={{ height:2, flex:1, background:`linear-gradient(to left, transparent, ${SOL_GOLD})` }} />
          </div>

          {/* About cards */}
          <div className="sol-about-grid">
            {[
              { icon:"🕌", title:"Our Mission", body:"To nurture the spiritual, intellectual, and social growth of Shia Muslim youth in Louisville through education and community." },
              { icon:"📖", title:"Islamic Education", body:"We host regular presentations, workshops, and discussions on Islamic topics — from Quran 101 to the Power of Duaa." },
              { icon:"🤝", title:"Community & Unity", body:"Building a strong, welcoming community where every young Muslim — brothers and sisters alike — feels at home and connected to their faith." },
              { icon:"🌙", title:"Events & Programs", body:"From Eid celebrations to community BBQs and Dhikr gatherings, we bring the community together year-round." },
            ].map(card => (
              <div key={card.title} style={{
                background:"#fff", borderRadius:16, padding:"28px 22px",
                boxShadow:"0 2px 16px rgba(0,0,0,0.07)",
                borderTop:`4px solid ${SOL_GOLD}`
              }}>
                <div style={{ fontSize:32, marginBottom:12 }}>{card.icon}</div>
                <h3 style={{ color:SOL_GREEN, fontWeight:800, fontSize:17, margin:"0 0 8px" }}>{card.title}</h3>
                <p style={{ color:"#374151", fontSize:14, lineHeight:1.65, margin:0 }}>{card.body}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div style={{ background: "#f5f5f0" }}>
      <div className="max-w-4xl mx-auto px-4 pt-10 pb-6">

        {/* Official Instagram Profile Embed */}
        <div className="sol-instagram-wrap" style={{ display: "flex", justifyContent: "center" }}>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/shiaoflouisville/"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: "0",
              borderRadius: 3,
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: 540,
              minWidth: 326,
              padding: 0,
              width: "100%"
            }}
          />
        </div>

        {/* View more */}
        <div className="text-center mt-8">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 14,
              padding: "10px 28px",
              borderRadius: 8,
              textDecoration: "none"
            }}
          >
            View full profile on Instagram
          </a>
        </div>

        {/* Linktree Section */}
        <div className="mt-12">

          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#39e09b", borderRadius: 100,
              padding: "6px 18px", marginBottom: 12
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.897h6.15c.526 0 .975-.38 1.054-.897 0-.162 0-.323-.082-.486l-3.074-5.302 3.074-5.3c.082-.163.082-.324.082-.486-.079-.517-.528-.897-1.053-.897h-6.15c-.527 0-.975.38-1.054.897 0 .162 0 .323.08.486l3.074 5.3-3.073 5.302zm4.047-3.837l1.88 3.243H10.12l1.88-3.243zm0-2.928L10.12 5.058h3.762l-1.882 3.243zM21 10.508h-4.412l3.118-3.118a1.076 1.076 0 0 0 0-1.522 1.076 1.076 0 0 0-1.522 0l-3.118 3.118V4.574c0-.594-.484-1.074-1.078-1.074-.593 0-1.074.48-1.074 1.074v4.412L9.796 5.868a1.076 1.076 0 0 0-1.522 0 1.076 1.076 0 0 0 0 1.522l3.118 3.118H7c-.594 0-1.074.48-1.074 1.074 0 .593.48 1.074 1.074 1.074h4.412l-3.118 3.118a1.076 1.076 0 0 0 0 1.522c.418.418 1.104.418 1.522 0l3.118-3.118v4.366c0 .594.48 1.074 1.074 1.074.594 0 1.078-.48 1.078-1.074v-4.366l3.118 3.118c.418.418 1.104.418 1.522 0a1.076 1.076 0 0 0 0-1.522l-3.118-3.118H21c.594 0 1.074-.48 1.074-1.074 0-.593-.48-1.074-1.074-1.074z"/>
              </svg>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>SOL Youth Group</span>
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#262626", margin: 0 }}>SOL Youth Group Links</h3>
            <p style={{ color: "#555", fontSize: 14, marginTop: 4 }}>All our resources in one place</p>
          </div>

          {/* Links Container */}
          <div className="sol-links-card" style={{
            background: "linear-gradient(135deg, #1a3a2a 0%, #0d2118 100%)",
            borderRadius: 20,
            margin: "0 auto",
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)"
          }}>

            {/* Share your thoughts section */}
            <p style={{ color: "#39e09b", fontWeight: 700, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12, marginTop: 0 }}>
              Share Your Thoughts ✉️
            </p>
            {[
              { label: "Send us a question anonymously!", url: "https://forms.gle/hqSRBqfvkr3VHBrF7" },
              { label: "Send us your feedback!", url: "https://forms.gle/XVq9RWaBi8hb8ozn7" },
            ].map(link => (
              <a key={link.url} href={link.url} target="_blank" rel="noreferrer"
                style={{
                  display: "block", width: "100%", textAlign: "center",
                  background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.15)",
                  color: "#fff", fontWeight: 600, fontSize: 15,
                  padding: "14px 20px", borderRadius: 12, textDecoration: "none",
                  marginBottom: 10, transition: "all 0.2s",
                  backdropFilter: "blur(4px)"
                }}
                onMouseOver={e => { e.currentTarget.style.background = "#39e09b"; e.currentTarget.style.borderColor = "#39e09b"; e.currentTarget.style.color = "#0d2118"; }}
                onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#fff"; }}
              >
                {link.label}
              </a>
            ))}

            {/* Presentations section */}
            <p style={{ color: "#39e09b", fontWeight: 700, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12, marginTop: 20 }}>
              Presentations 📖
            </p>
            {[
              { label: "Marriage in Islam", url: "https://docs.google.com/presentation/d/e/2PACX-1vTlmZ-d5SCwr-YEp4fJxjfnm9aaajv9WVcb93VWLlDDHAg28rbBazmZFT7cNSWccFC7aSrbKmwGsX8S/pub?start=false&loop=false&delayms=5000" },
              { label: "The Power of Duaa", url: "https://docs.google.com/presentation/d/e/2PACX-1vQMLEqmQkUvweSOaKv_JYUDxOR_hw7ABttqpTaizcdOilV5wPu9sfIz9nDG792obND3qErrg3xfSe-p/pub?start=false&loop=false&delayms=5000" },
              { label: "Quran 101", url: "https://docs.google.com/presentation/d/e/2PACX-1vTZ1tt1V3T5MoD_cUxJDybj41FJ1xDop7WHt7n7J-Z_5qmO7XTktrPyeAtiYqpjH2kwJfREbNsW5VG_/pub?start=false&loop=false&delayms=5000" },
              { label: "Death: Towards Eternal Life", url: "https://docs.google.com/presentation/d/e/2PACX-1vRC7VMFfILkw1oMTasRx8zxQfYqbO-qEpD8CpD7LrkI0AHuhCkpwkzhwlXHKSnfE5GiBE9Cwdf7ckOb/pub?start=false&loop=false&delayms=5000" },
            ].map(link => (
              <a key={link.url} href={link.url} target="_blank" rel="noreferrer"
                style={{
                  display: "block", width: "100%", textAlign: "center",
                  background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.15)",
                  color: "#fff", fontWeight: 600, fontSize: 15,
                  padding: "14px 20px", borderRadius: 12, textDecoration: "none",
                  marginBottom: 10, transition: "all 0.2s"
                }}
                onMouseOver={e => { e.currentTarget.style.background = "#39e09b"; e.currentTarget.style.borderColor = "#39e09b"; e.currentTarget.style.color = "#0d2118"; }}
                onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#fff"; }}
              >
                {link.label}
              </a>
            ))}

            {/* Footer */}
            <p style={{ textAlign: "center", marginTop: 20, marginBottom: 0, fontSize: 12, color: "rgba(255,255,255,0.65)" }}>
              Powered by{" "}
              <a href="https://linktr.ee/shiaoflouisvilleyouth" target="_blank" rel="noreferrer"
                 style={{ color: "#39e09b", textDecoration: "none" }}>
                Linktree ↗
              </a>
            </p>
          </div>
        </div>

      </div>
      </div>{/* end cream wrapper */}

    {/* ══════════════════════════════════════════════════
        SOL PAGE FOOTER
        Dark green branded footer matching homepage style
        Includes: logo, tagline, email, Instagram, nav links
    ══════════════════════════════════════════════════ */}
    <footer style={{
      background:`linear-gradient(160deg, #081910 0%, #0f2b1c 50%, ${SOL_GREEN} 100%)`,
      borderTop:`1px solid ${SOL_GOLD}30`,
      padding:"0",
    }}>

      {/* Top gold accent line */}
      <div style={{height:2, background:`linear-gradient(90deg, transparent, ${SOL_GOLD}, transparent)`}}/>

      <div style={{maxWidth:900, margin:"0 auto", padding:"52px 28px 32px"}}>

        {/* ── Top row: Logo + tagline | Links | Contact ── */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",
          gap:40, marginBottom:44
        }}>

          {/* Column 1 — Brand */}
          <div>
            <div style={{display:"flex", alignItems:"center", gap:14, marginBottom:16}}>
              <div style={{
                width:50, height:50, borderRadius:"50%",
                background:"#fff", border:`2px solid ${SOL_GOLD}`,
                display:"flex", alignItems:"center", justifyContent:"center",
                overflow:"hidden", flexShrink:0,
              }}>
                <img src="/sol-logo.png" alt="SOL"
                  style={{width:"150%", height:"150%", objectFit:"cover", objectPosition:"center"}}/>
              </div>
              <div>
                <div style={{color:SOL_GOLD, fontWeight:800, fontSize:15, lineHeight:1.2}}>SOL Youth Group</div>
                <div style={{color:"rgba(255,255,255,0.75)", fontSize:12}}>Seeds of Light</div>
              </div>
            </div>
            <p style={{color:"rgba(255,255,255,0.82)", fontSize:13, lineHeight:1.7, margin:"0 0 20px"}}>
              A community of young Shia Muslims in Louisville, Kentucky — growing together in faith, knowledge, and community.
            </p>
            {/* Social buttons */}
            <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" style={{
                display:"inline-flex", alignItems:"center", gap:6,
                background:"linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
                color:"#fff", fontWeight:700, fontSize:12,
                padding:"7px 16px", borderRadius:100, textDecoration:"none",
              }}>📸 Instagram</a>
              <a href="mailto:contact@azky.org" style={{
                display:"inline-flex", alignItems:"center", gap:6,
                background:`rgba(201,168,76,0.12)`,
                border:`1px solid ${SOL_GOLD}55`,
                color:SOL_GOLD, fontWeight:700, fontSize:12,
                padding:"7px 16px", borderRadius:100, textDecoration:"none",
              }}>✉️ Email Us</a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <p style={{
              color:SOL_GOLD, fontWeight:800, fontSize:11,
              letterSpacing:3, textTransform:"uppercase", margin:"0 0 18px"
            }}>Quick Links</p>
            {[
              {label:"📖 Presentations",    href:"https://linktr.ee/shiaoflouisvilleyouth", external:true},
              {label:"❓ Ask a Question",   href:"https://forms.gle/hqSRBqfvkr3VHBrF7", external:true},
              {label:"💬 Send Feedback",    href:"https://forms.gle/XVq9RWaBi8hb8ozn7", external:true},
              {label:"📸 Follow Us",        href:INSTAGRAM_URL, external:true},
            ].map(link => (
              link.external
                ? <a key={link.label} href={link.href} target="_blank" rel="noreferrer" style={{
                    display:"block", color:"rgba(255,255,255,0.88)", fontSize:13,
                    textDecoration:"none", padding:"5px 0",
                    borderBottom:"1px solid rgba(255,255,255,0.1)",
                    transition:"color 0.15s",
                  }}
                  onMouseEnter={e=>e.currentTarget.style.color=SOL_GOLD}
                  onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.88)"}
                  >{link.label}</a>
                : <button key={link.label} onClick={()=>window.dispatchEvent(new CustomEvent('sol-navigate',{detail:link.href}))}
                    style={{
                      display:"block", width:"100%", textAlign:"left",
                      color:"rgba(255,255,255,0.88)", fontSize:13, background:"none",
                      border:"none", borderBottom:"1px solid rgba(255,255,255,0.1)",
                      padding:"5px 0", cursor:"pointer", transition:"color 0.15s",
                    }}
                    onMouseEnter={e=>e.currentTarget.style.color=SOL_GOLD}
                    onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.88)"}
                  >{link.label}</button>
            ))}
          </div>

        </div>

        {/* ── Divider ── */}
        <div style={{height:1, background:`linear-gradient(90deg, transparent, ${SOL_GOLD}40, transparent)`, marginBottom:24}}/>

        {/* ── Bottom row: copyright + Bismillah ── */}
        <div style={{
          display:"flex", alignItems:"center", justifyContent:"space-between",
          flexWrap:"wrap", gap:12,
        }}>
          <p style={{color:"rgba(255,255,255,0.55)", fontSize:12, margin:0}}>
            © 2021 SOL Youth Group — Al Zahrah Islamic Center, Louisville KY
          </p>
        </div>

      </div>
      {/* ── Bottom gold shimmer line ── */}
      <div style={{height:2, background:`linear-gradient(90deg, transparent, ${SOL_GOLD}, transparent)`}}/>
    </footer>
    </div>
  );
}
