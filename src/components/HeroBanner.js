export default function HeroBanner(props) {
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2" style={{ overflow: "hidden" }}>
      {/* Dark overlay for blend */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(to right, #1a3a2a 0%, transparent 35%)"
      }} />
      <img
        className="w-full object-cover h-96 lg:w-full lg:h-full"
        src={props.data.branding.banner_image_url}
        alt=""
        style={{ filter: "brightness(0.75) saturate(0.9)" }}
      />
    </div>
  );
}