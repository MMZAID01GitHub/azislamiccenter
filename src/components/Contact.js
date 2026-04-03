/* This example requires Tailwind CSS v2.0+ */
import { HomeIcon, PhoneIcon, MailIcon } from '@heroicons/react/outline'

const MOSQUE_GREEN = "#1a3a2a";
const MOSQUE_GOLD = "#c9a84c";

export default function Contact(props) {
  return (
    <div id="contact" style={{
      background: `linear-gradient(135deg, ${MOSQUE_GREEN} 0%, #0d2118 100%)`,
      borderRadius: 20,
      padding: "48px 40px",
      width: "100%",
      boxSizing: "border-box"
    }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <p style={{ color: MOSQUE_GOLD, fontWeight: 800, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", margin: "0 0 10px" }}>
          Get In Touch
        </p>
        <h2 style={{ color: "#fff", fontWeight: 900, fontSize: 32, margin: "0 0 10px" }}>
          Contact Information
        </h2>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, margin: 0 }}>
          We'd love to hear from you — reach out anytime
        </p>
      </div>

      {/* Cards row */}
      {props.data.contact && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
          maxWidth: 800,
          margin: "0 auto"
        }}>

          {/* Address cards */}
          {props.data.contact.addresses && props.data.contact.addresses.map((address) => (
            <div key={address} style={{
              background: "rgba(255,255,255,0.06)",
              border: `1px solid rgba(201,168,76,0.25)`,
              borderRadius: 16, padding: "24px 20px",
              display: "flex", alignItems: "flex-start", gap: 16
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: `rgba(201,168,76,0.15)`,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
              }}>
                <HomeIcon style={{ width: 22, height: 22, color: MOSQUE_GOLD }} />
              </div>
              <div>
                <p style={{ color: MOSQUE_GOLD, fontWeight: 700, fontSize: 12, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 6px" }}>Address</p>
                <address style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, fontStyle: "normal", lineHeight: 1.6 }}>{address}</address>
              </div>
            </div>
          ))}

          {/* Phone cards */}
          {props.data.contact.phone_numbers && props.data.contact.phone_numbers.map((phone) => (
            <div key={phone.number} style={{
              background: "rgba(255,255,255,0.06)",
              border: `1px solid rgba(201,168,76,0.25)`,
              borderRadius: 16, padding: "24px 20px",
              display: "flex", alignItems: "flex-start", gap: 16
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: `rgba(201,168,76,0.15)`,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
              }}>
                <PhoneIcon style={{ width: 22, height: 22, color: MOSQUE_GOLD }} />
              </div>
              <div>
                <p style={{ color: MOSQUE_GOLD, fontWeight: 700, fontSize: 12, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 6px" }}>Phone</p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, margin: "0 0 4px" }}>{phone.name}</p>
                <a href={`tel:${phone.number}`} style={{ color: "#fff", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>{phone.number}</a>
              </div>
            </div>
          ))}

          {/* Email cards */}
          {props.data.contact.email_addresses && props.data.contact.email_addresses.map((email) => (
            <div key={email.address} style={{
              background: "rgba(255,255,255,0.06)",
              border: `1px solid rgba(201,168,76,0.25)`,
              borderRadius: 16, padding: "24px 20px",
              display: "flex", alignItems: "flex-start", gap: 16
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: `rgba(201,168,76,0.15)`,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
              }}>
                <MailIcon style={{ width: 22, height: 22, color: MOSQUE_GOLD }} />
              </div>
              <div>
                <p style={{ color: MOSQUE_GOLD, fontWeight: 700, fontSize: 12, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 6px" }}>Email</p>
                {email.name && <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, margin: "0 0 4px" }}>{email.name}</p>}
                <a href={`mailto:${email.address}`} style={{ color: "#fff", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>{email.address}</a>
              </div>
            </div>
          ))}

        </div>
      )}

      {/* Charity info */}
      {props.data.charity_information && (
        <div style={{ maxWidth: 800, margin: "32px auto 0", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 28 }}>
          <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 20, margin: "0 0 16px", textAlign: "center" }}>Charity Information</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {props.data.charity_information.map((info) => (
              <div key={info.label} style={{
                background: "rgba(255,255,255,0.06)", borderRadius: 12,
                padding: "12px 20px", display: "flex", gap: 10, alignItems: "center"
              }}>
                <span style={{ color: MOSQUE_GOLD, fontWeight: 700, fontSize: 13 }}>{info.label}:</span>
                <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 13 }}>{info.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

