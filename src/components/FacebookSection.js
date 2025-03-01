import ReactMarkdown from 'react-markdown';

export default function FacebookSection(props) {
  return (
    <>
      <div id="FacebookSection" className="mx-auto py-5 px-4 max-w-7xl sm:px-6 lg:px-8">
        <div className="text-lg max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Facebook:</h2>
          <div className="mt-6 text-gray-700 markdown">
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAlzaharah%2F&tabs=timeline&width=370&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="370"
                height="600"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <ReactMarkdown>
              {/* {props.data.about} */}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}
