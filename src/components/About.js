const GOLD = "#c9a84c";
const GREEN = "#1a3a2a";

export default function About(props) {
  return (
    <>
      {props.data.about && (
        <div id="about" style={{ background:"#f5f5f0", padding:"40px 16px" }}>
          <div style={{ maxWidth:760, margin:"0 auto" }}>

            {/* English block */}
            <p style={{ color:"#111827", fontSize:15.5, lineHeight:1.85, margin:"0 0 12px", textAlign:"center" }}>
              <strong style={{ color:GREEN }}>Al Zahrah Islamic Center of Louisville</strong> was established
              in <strong style={{ color:GREEN }}>1996</strong> to serve the growing community of followers
              of the Ahlul Bayt in Louisville, Kentucky. Since its founding, the center has been dedicated
              to providing religious, educational, and community programs for individuals and families.
            </p>
            <p style={{ color:"#374151", fontSize:14, lineHeight:1.7, margin:"0 0 28px", textAlign:"center" }}>
              For more information about our regular programs and events, please visit our{" "}
              <a
                href="https://www.facebook.com/Alzaharah/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color:GREEN, fontWeight:700, textDecoration:"none", borderBottom:`1.5px solid ${GOLD}` }}
              >Facebook page ↗</a>
            </p>

            {/* Divider */}
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24 }}>
              <div style={{ flex:1, height:1, background:`linear-gradient(to right, transparent, ${GOLD}90)` }} />
              <div style={{ flex:1, height:1, background:`linear-gradient(to left, transparent, ${GOLD}90)` }} />
            </div>

            {/* Arabic block */}
            <p style={{
              color:"#1a1a1a", fontSize:16, lineHeight:2.1, margin:0,
              fontFamily:"'Georgia','Times New Roman',serif",
              direction:"rtl", textAlign:"right",
            }}>
              تأسس <strong style={{ color:GREEN }}>مركز الزهراء الإسلامي</strong> في لويفيل عام{" "}
              <strong style={{ color:GREEN }}>١٩٩٦</strong> لخدمة المجتمع المتنامي من أتباع أهل البيت
              (عليهم السلام) في مدينة لويفيل، ولاية كنتاكي. ومنذ تأسيسه، يحرص المركز على تقديم البرامج
              الدينية والتعليمية والاجتماعية لخدمة الأفراد والعوائل.
            </p>

          </div>
        </div>
      )}
    </>
  );
}
