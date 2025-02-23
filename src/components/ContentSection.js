import ReactMarkdown from 'react-markdown'

export default function ContentSection(props) {
  return (<>
    {props.data && props.data.map( section => (
      <div className="mx-auto py-5 px-4 max-w-7xl sm:px-6 lg:px-8" key={`section_${section.title}`}>
        <div className="text-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{section.title}</h2>
          <div className="mt-6 text-gray-700 markdown">
          <div class="max-w-md mx-auto" >
            {
              section.image ?
              <img
              className="hover:opacity-40 transition duration-300 ease-in-out bg-white"
              src={section.image ? section.image : ''}
              alt=""
            />
            : <div></div>
            }

          </div>
            <ReactMarkdown>
              {section.body}
            </ReactMarkdown>

          </div>
        </div>
      </div>
    ))}
    </>
  )
}
