const MOSQUE_GOLD = "#c9a84c";

export default function HeroText(props) {
  return (
    <main style={{ padding: "clamp(28px, 5vw, 48px) clamp(20px, 5vw, 40px) 40px" }}>
      <div>
        {/* Eyebrow label */}
        <p style={{
          color: "rgba(255,255,255,0.93)",
          fontWeight: 600,
          fontSize: 9,
          letterSpacing: 3,
          textTransform: "uppercase",
          margin: "0 0 16px",
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
          <span style={{
            display: "block",
            fontWeight: 500, fontSize: "0.48em",
            color: "#c9a84c",
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 10,
            paddingBottom: 8,
          }}>
            Welcome to
          </span>
          <span style={{ display: "block", color: "#fff" }}>{props.data.name}</span>
        </h1>

        {/* Divider */}
        <div style={{ width: 90, height: 3, background: `linear-gradient(to right, ${MOSQUE_GOLD}, transparent)`, borderRadius: 99, margin: "0 0 22px" }} />

        {/* Description — English */}
        <p style={{
          color: "rgba(255,255,255,0.93)",
          fontSize: 15,
          lineHeight: 1.8,
          maxWidth: 420,
          margin: "0 0 14px"
        }}>
          <strong style={{ color: "#fff" }}>Al Zahrah Islamic Center of Louisville, Kentucky</strong> is an
          Islamic center dedicated to serving the Muslim community in Louisville and the surrounding area.
          We offer a variety of services including <strong style={{ color: MOSQUE_GOLD }}>Jumu'ah prayers</strong>.
          We also host community events and activities throughout the year in service of the{" "}
          <strong style={{ color: MOSQUE_GOLD }}>Quran and the Ahlul Bayt</strong>.
        </p>

        {/* Mini gold divider */}
        <div style={{ width: 120, height: 1, background: `linear-gradient(to right, ${MOSQUE_GOLD}, transparent)`, margin: "0 0 14px" }} />

        {/* Description — Arabic */}
        <p style={{
          color: "rgba(255,255,255,0.88)",
          fontSize: 14,
          lineHeight: 1.9,
          maxWidth: 420,
          margin: "0 0 28px",
          direction: "rtl",
          textAlign: "right",
          fontFamily: "'Georgia','Times New Roman',serif",
        }}>
          <strong style={{ color: "rgba(255,255,255,0.85)" }}>مركز الزهراء الإسلامي</strong> في لويفيل،
          كنتاكي، يخدم المجتمع المسلم في المنطقة. نقدم{" "}
          <strong style={{ color: MOSQUE_GOLD }}>صلاة الجمعة</strong>{" "}
          وننظم فعاليات وأنشطة دينية على مدار العام خدمةً للقرآن وأهل البيت.
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
