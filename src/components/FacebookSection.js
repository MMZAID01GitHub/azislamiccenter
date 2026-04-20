import { useState } from "react";

const YOUTUBE_URL = "https://www.youtube.com/@al-zahrahislamiccenterkyus";

export default function FacebookSection(props) {
  const [tab, setTab] = useState("facebook");

  return (
    <div id="FacebookSection" style={{
      borderLeft: `5px solid ${tab === "youtube" ? "#ff0000" : "#1877f2"}`,
      transition: "border-color 0.3s ease",
      borderRadius: 20,
    }}>

      {/* Platform tabs */}
      <div style={{ display: "flex", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
        {/* Facebook tab */}
        <button onClick={() => setTab("facebook")} style={{
          display: "flex", alignItems: "center", gap: 8,
          background: tab === "facebook" ? "#1877f2" : "rgba(0,0,0,0.06)",
          color: tab === "facebook" ? "#fff" : "#555",
          padding: "8px 18px", borderRadius: 100,
          fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer",
          transition: "all 0.2s"
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
          </svg>
          Facebook
        </button>

        {/* YouTube tab */}
        <button onClick={() => setTab("youtube")} style={{
          display: "flex", alignItems: "center", gap: 8,
          background: tab === "youtube" ? "#ff0000" : "rgba(0,0,0,0.06)",
          color: tab === "youtube" ? "#fff" : "#555",
          padding: "8px 18px", borderRadius: 100,
          fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer",
          transition: "all 0.2s"
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
          </svg>
          YouTube
        </button>
      </div>

      {/* Active tab color bar */}
      <div style={{
        height: 3, borderRadius: 99, marginBottom: 20,
        background: tab === "youtube" ? "#ff0000" : "#1877f2",
        transition: "background 0.3s ease"
      }} />
      {tab === "facebook" && (
        <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden" }}>
          <div style={{
            background: "#1877f2", padding: "14px 20px",
            display: "flex", alignItems: "center", gap: 10
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
              <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
            </svg>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>Al Zahrah Islamic Center</span>
            <a href="https://www.facebook.com/Alzaharah/" target="_blank" rel="noreferrer"
              style={{
                marginLeft: "auto", color: "#fff", fontSize: 12, fontWeight: 600,
                background: "rgba(255,255,255,0.2)", padding: "4px 12px",
                borderRadius: 100, textDecoration: "none"
              }}>
              Follow →
            </a>
          </div>
          <div style={{ display: "flex", justifyContent: "center", padding: "20px 0 8px" }}>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAlzaharah%2F&tabs=timeline&width=370&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="370" height="500"
              style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
              scrolling="no" frameBorder="0" allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Al Zahrah Facebook Page"
            />
          </div>
        </div>
      )}

      {/* YouTube panel */}
      {tab === "youtube" && (
        <div style={{ background: "#000", borderRadius: 16, overflow: "hidden" }}>
          <div style={{
            background: "#ff0000", padding: "14px 20px",
            display: "flex", alignItems: "center", gap: 10
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
              <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
            </svg>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>Al Zahrah Islamic Center</span>
            <a href={YOUTUBE_URL} target="_blank" rel="noreferrer"
              style={{
                marginLeft: "auto", color: "#fff", fontSize: 12, fontWeight: 600,
                background: "rgba(255,255,255,0.2)", padding: "4px 12px",
                borderRadius: 100, textDecoration: "none"
              }}>
              Subscribe →
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 24px", gap: 20 }}>
            <div style={{
              width: 80, height: 80, borderRadius: "50%", background: "#ff0000",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="#fff">
                <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
              </svg>
            </div>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 20, margin: "0 0 8px" }}>Al Zahrah Islamic Center</h3>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, margin: "0 0 24px" }}>Watch lectures, events, and more on our YouTube channel</p>
              <a href={YOUTUBE_URL} target="_blank" rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "#ff0000", color: "#fff", fontWeight: 700,
                  fontSize: 15, padding: "12px 28px", borderRadius: 100, textDecoration: "none",
                  border: "2px solid rgba(255,255,255,0.2)"
                }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
                Visit Our Channel
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}