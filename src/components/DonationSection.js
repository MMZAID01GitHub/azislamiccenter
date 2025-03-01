import ReactMarkdown from 'react-markdown';

export default function DonationSection(props) {
  return (
    <>
      {props.data.donation && (
        <div className="bg-white">
          <div id="donate" className="mx-auto py-5 px-4 max-w-7xl sm:px-6 lg:px-8 md:py-16 lg:py-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">{props.data.donation.title}</span>
              <span className="block mosque-website__text--brand">{props.data.donation.subtitle}</span>
            </h2>
            <div className="mt-6 text-gray-700 markdown max-w-3xl">
              <ReactMarkdown>
                {props.data.donation.description}
              </ReactMarkdown>
            </div>
            <div className="mt-8 flex">
              <div className="inline-flex rounded-md shadow">
                {/* Updated PayPal Donation Button */}
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                  <input type="hidden" name="hosted_button_id" value="BW6N2G9DW6QDL" />
                  <input
                    type="image"
                    src="https://pics.paypal.com/00/s/ZjllMWNmYjAtNDUzZS00ZTM2LWFjYTQtYTMyYTYzYzUwZDdm/file.PNG" 
                    border="0"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Donate with PayPal button"
                  />
                  <img
                    alt=""
                    border="0"
                    src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                    width="1"
                    height="1"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
