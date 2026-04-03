const MOSQUE_GREEN = "#1a3a2a";
const MOSQUE_GOLD = "#c9a84c";

export default function HeroText(props) {
  return (
    <main style={{ padding: "clamp(28px, 5vw, 48px) clamp(20px, 5vw, 40px) 40px" }}>
      <div>
        {/* Eyebrow label */}
        <p style={{
          color: MOSQUE_GOLD,
          fontWeight: 800,
          fontSize: 11,
          letterSpacing: 4,
          textTransform: "uppercase",
          margin: "0 0 16px",
          opacity: 0.9
        }}>
          Est. 1996 · Louisville, KY
        </p>

        {/* Heading */}
        <h1 style={{
          fontSize: "clamp(28px, 4vw, 52px)",
          fontWeight: 900,
          lineHeight: 1.1,
          margin: "0 0 20px",
          color: "#fff"
        }}>
          <span style={{ display: "block", fontWeight: 400, fontSize: "0.55em", color: "rgba(255,255,255,0.6)", letterSpacing: 1, marginBottom: 6 }}>
            Welcome to
          </span>
          <span style={{ color: "#fff" }}>{props.data.name}</span>
        </h1>

        {/* Divider */}
        <div style={{ width: 56, height: 3, background: MOSQUE_GOLD, borderRadius: 99, margin: "0 0 22px" }} />

        {/* Description */}
        <p style={{
          color: "rgba(255,255,255,0.75)",
          fontSize: 16,
          lineHeight: 1.8,
          maxWidth: 420,
          margin: "0 0 32px"
        }}>
          {props.data.description}
        </p>

        {/* PayPal donation */}
        {props.data.donation && (
          <div>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
              <input type="hidden" name="hosted_button_id" value="BW6N2G9DW6QDL" />
              <input
                type="image"
                src="https://pics.paypal.com/00/s/ZDJkZTE0Y2EtOWZjNi00ODg0LTlmNmYtZjdmZjAzYzU5NTk5/file.PNG"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
                style={{ height: 44 }}
              />
              <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
