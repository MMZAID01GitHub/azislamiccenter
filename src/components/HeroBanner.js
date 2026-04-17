export default function HeroBanner(props) {
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2" style={{ overflow: "hidden" }}>
      <img
        className="w-full object-cover h-96 lg:w-full lg:h-full"
        src={props.data.branding.banner_image_url}
        alt=""
        loading="eager"
        style={{ filter: "brightness(0.85) saturate(0.9)" }}
      />
    </div>
  );
}