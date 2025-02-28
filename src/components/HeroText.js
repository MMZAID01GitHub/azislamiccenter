export default function HeroText(props) {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Welcome to</span>{' '}
          <span className="block mosque-website__text--brand">{props.data.name}</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {props.data.description}
        </p>
        {props.data.donation && (
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
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
        )}
      </div>
    </main>
  );
}
