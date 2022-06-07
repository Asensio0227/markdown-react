import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import Navbar from './Navbar';

const App = () => {
  const [markdown, setMarkdown] = useState('markdown');
  return (
    <>
      <Navbar />
      <main>
        <section>
          <div className="section-title">
            <h2>markdown</h2>
            <div className="underline"></div>
          </div>
          <textarea
            className='input'
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
          <article className="result">
            <ReactMarkdown>
              {markdown}
            </ReactMarkdown>
          </article>
        </section>
      </main>
    </>
  );
};

export default App
