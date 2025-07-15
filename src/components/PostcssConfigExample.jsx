import React, { useState } from 'react';

const code = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;

const PostcssConfigExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="border rounded-lg p-4 mb-4">
      <button className="text-blue-500 mb-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide' : 'Show'} postcss.config.js Example
      </button>
      {isOpen && (
        <div>
          <pre className="mt-2 bg-gray-100 p-2 rounded overflow-x-auto text-sm">
            {code}
          </pre>
          <button className="flex items-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200 mt-2" onClick={copyToClipboard}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V3a1 1 0 011-1h6a1 1 0 011 1v8m-6 0h6m-6 0v8a1 1 0 001 1h6a1 1 0 001-1v-8" />
            </svg>
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </div>
      )}
    </div>
  );
};

export default PostcssConfigExample;
