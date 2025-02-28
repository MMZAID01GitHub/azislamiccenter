export default function HeroBanner (props) {
    return (
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="w-full object-cover h-96 lg:w-full lg:h-full hover:opacity-40 transition duration-300 ease-in-out bg-white"
          src={props.data.branding.banner_image_url}
          alt=""
        />
      </div>
    )
}