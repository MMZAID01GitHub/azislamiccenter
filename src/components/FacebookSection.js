const MOSQUE_GREEN = "#1a3a2a";
const MOSQUE_GOLD = "#c9a84c";

// Set to your YouTube channel URL when ready, e.g. "https://www.youtube.com/@YourChannel"
const YOUTUBE_URL = null;

export default function FacebookSection(props) {
  return (
    <div id="FacebookSection">

      {/* Platform tabs */}
      <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
        {/* Facebook tab — active */}
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "#1877f2", color: "#fff",
          padding: "8px 18px", borderRadius: 100,
          fontWeight: 700, fontSize: 14
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
          </svg>
          Facebook
        </div>

        {/* YouTube tab — coming soon */}
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          background: YOUTUBE_URL ? "#ff0000" : "rgba(0,0,0,0.06)",
          color: YOUTUBE_URL ? "#fff" : "#aaa",
          padding: "8px 18px", borderRadius: 100,
          fontWeight: 700, fontSize: 14,
          border: YOUTUBE_URL ? "none" : "1.5px dashed #ccc",
          cursor: YOUTUBE_URL ? "pointer" : "default"
        }}
          onClick={() => YOUTUBE_URL && window.open(YOUTUBE_URL, "_blank")}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
          </svg>
          {YOUTUBE_URL ? "YouTube" : "YouTube — Coming Soon"}
        </div>
      </div>

      {/* Facebook embed card */}
      <div style={{
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.06)"
      }}>
        {/* Card header */}
        <div style={{
          background: "#1877f2",
          padding: "14px 20px",
          display: "flex", alignItems: "center", gap: 10
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
            <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
          </svg>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>Al Zahrah Islamic Center</span>
          <a
            href="https://www.facebook.com/Alzaharah/"
            target="_blank"
            rel="noreferrer"
            style={{
              marginLeft: "auto", color: "#fff", fontSize: 12, fontWeight: 600,
              background: "rgba(255,255,255,0.2)", padding: "4px 12px",
              borderRadius: 100, textDecoration: "none"
            }}
          >
            Follow →
          </a>
        </div>

        {/* Embed */}
        <div style={{ display: "flex", justifyContent: "center", padding: "20px 0 8px" }}>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAlzaharah%2F&tabs=timeline&width=370&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="370"
            height="500"
            style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>

    </div>
  );
}
