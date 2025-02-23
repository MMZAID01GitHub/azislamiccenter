export default function OtherBanners (props) {
    return (
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="w-full object-cover h-96 lg:w-full lg:h-full blur-xs"
          src={props.data.branding.banner_image_url}
          alt=""
        />
      </div>
    )
}