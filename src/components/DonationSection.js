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
                {/* PayPal Donation Button */}
                <form
                  action="https://www.paypal.com/ncp/payment/LF9FC4RQ5C3MJ"
                  method="post"
                  target="_blank"
                  style={{
                    display: 'inline-grid',
                    justifyItems: 'center',
                    alignContent: 'start',
                    gap: '0.5rem',
                  }}
                >
                  <input
                    type="submit"
                    value="Donate Now - تبرع ال"
                    style={{
                      textAlign: 'center',
                      border: 'none',
                      borderRadius: '0.25rem',
                      minWidth: '11.625rem',
                      padding: '0 2rem',
                      height: '2.625rem',
                      fontWeight: 'bold',
                      backgroundColor: '#FFD140',
                      color: '#000000',
                      fontFamily: '"Helvetica Neue", Arial, sans-serif',
                      fontSize: '1rem',
                      lineHeight: '1.25rem',
                      cursor: 'pointer',
                    }}
                  />
                  <img
                    src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg"
                    alt="cards"
                  />
                  <section>
                    Powered by{' '}
                    <img
                      src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
                      alt="paypal"
                      style={{ height: '0.875rem', verticalAlign: 'middle' }}
                    />
                  </section>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
