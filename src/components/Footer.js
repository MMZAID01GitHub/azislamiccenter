const MOSQUE_GREEN = "#1a3a2a";
const MOSQUE_GOLD = "#c9a84c";

export default function Footer({ data, showContact = false }) {
  const email = data?.contact?.email_addresses?.[0]?.address || "contact@azky.org";
  const president = data?.team?.find(p => p.role === "President") || data?.team?.[0];
  const otherMembers = data?.team?.filter(p => p.role !== "President") || [];

  return (
    <footer style={{
      background: `linear-gradient(160deg, ${MOSQUE_GREEN} 0%, #0d2118 100%)`,
      padding: "0 0 0 0",
    }}>
      {/* ── Top gold shimmer line ── */}
      <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${MOSQUE_GOLD}, transparent)` }} />

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px 28px" }}>

        {/* ── Contact header ── */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ color: MOSQUE_GOLD, fontWeight: 800, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", margin: "0 0 12px" }}>
            Contact Us
          </p>
          <h2 style={{ color: "#fff", fontWeight: 900, fontSize: 34, margin: "0 0 10px", lineHeight: 1.1 }}>
            Get In Touch
          </h2>
          <div style={{ width: 48, height: 3, background: MOSQUE_GOLD, borderRadius: 99, margin: "0 auto 16px" }} />
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, margin: 0 }}>
            We'd love to hear from you
          </p>
        </div>

        {/* ── President card ── */}
        {president && (
          <div style={{
            background: "rgba(255,255,255,0.05)",
            border: `1.5px solid ${MOSQUE_GOLD}`,
            borderRadius: 20,
            padding: "28px 32px",
            display: "flex", alignItems: "center", gap: 24,
            marginBottom: otherMembers.length > 0 ? 16 : 40,
            flexWrap: "wrap"
          }}>
            <div style={{
              width: 88, height: 88, borderRadius: "50%", flexShrink: 0,
              border: `3px solid ${MOSQUE_GOLD}`,
              background: `linear-gradient(135deg, ${MOSQUE_GREEN}, #0d2118)`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" fill={MOSQUE_GOLD} opacity="0.9"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={MOSQUE_GOLD} strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.9"/>
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ color: MOSQUE_GOLD, fontWeight: 700, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", margin: "0 0 6px" }}>
                {president.role}
              </p>
              <h3 style={{ color: "#fff", fontWeight: 900, fontSize: 22, margin: "0 0 8px" }}>{president.name}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {president.number && (
                  <a href={`tel:${president.number}`} style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.8)",
                    padding: "6px 14px", borderRadius: 100, fontSize: 13, fontWeight: 500,
                    textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)"
                  }}>
                    📞 {president.number}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── Other team members ── */}
        {otherMembers.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 40 }}>
            {otherMembers.map(person => (
              <div key={person.name} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,168,76,0.18)",
                borderRadius: 14, padding: "16px 18px",
                display: "flex", alignItems: "center", gap: 14
              }}>
                <img src={person.image_url} alt={person.name}
                  style={{ width: 50, height: 50, borderRadius: "50%", objectFit: "cover", border: `2px solid ${MOSQUE_GOLD}`, flexShrink: 0 }} />
                <div>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 14, margin: "0 0 3px" }}>{person.name}</h3>
                  <p style={{ color: MOSQUE_GOLD, fontSize: 11, margin: "0 0 4px" }}>{person.role}</p>
                  {person.number && <a href={`tel:${person.number}`} style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, textDecoration: "none" }}>📞 {person.number}</a>}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Wide divider ── */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "0 0 36px" }} />

        {/* ── Footer bottom row ── */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "flex-start" }}>

          {/* Left: logo + name + social links */}
          <div style={{ flex: "1 1 240px", minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <img
                src={data?.branding?.logo_url}
                alt={data?.name}
                style={{
                  height: 48, width: 48, borderRadius: "50%",
                  objectFit: "cover",
                  border: `2px solid ${MOSQUE_GOLD}`,
                }}
              />
              <div>
                <p style={{ color: "#fff", fontWeight: 800, fontSize: 15, margin: 0 }}>
                  {data?.name || "Al Zahrah Islamic Center"}
                </p>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, margin: 0 }}>
                  Established 1996 · Louisville, KY
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
              <a href={`mailto:${email}`}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  background: `linear-gradient(135deg, ${MOSQUE_GOLD}, #e8c96a)`,
                  color: MOSQUE_GREEN, fontWeight: 700,
                  fontSize: 13, padding: "8px 16px", borderRadius: 100, textDecoration: "none"
                }}>
                ✉️ {email}
              </a>
              <a href="https://www.facebook.com/Alzaharah/" target="_blank" rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  background: "#1877f2", color: "#fff", fontWeight: 600,
                  fontSize: 13, padding: "8px 16px", borderRadius: 100, textDecoration: "none"
                }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>

          {/* Right: address + map */}
          <div style={{ flex: "1 1 240px", minWidth: 0 }}>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, margin: "0 0 10px", display: "flex", alignItems: "center", gap: 6 }}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=4010+Bishop+Lane+Louisville+KY+40218"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}
              >
                <span>📍</span> 4010 Bishop Lane, Louisville, KY 40218 ↗
              </a>
            </p>
            <iframe
              title="Mosque Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.5!2d-85.6602!3d38.1782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886972c4e1e1e1e1%3A0x1!2s4010+Bishop+Ln%2C+Louisville%2C+KY+40218!5e0!3m2!1sen!2sus!4v1"
              width="100%" height="140"
              style={{ borderRadius: 12, border: "none", display: "block", opacity: 0.85 }}
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* ── Copyright ── */}
        <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${MOSQUE_GOLD}40, transparent)`, margin: "28px 0 20px" }} />
        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 11, margin: "0 0 28px", textAlign: "center", letterSpacing: 0.5 }}>
          © 1996 {data?.name}. All rights reserved.
        </p>

      </div>
      {/* ── Bottom gold shimmer line ── */}
      <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${MOSQUE_GOLD}, transparent)` }} />
    </footer>
  );
}
