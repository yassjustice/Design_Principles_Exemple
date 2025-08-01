import React, { useState } from 'react';

const CodeBox = ({ 
  children, 
  language = 'javascript', 
  title = '', 
  className = '',
  showLanguageTag = true,
  theme = 'dark' // 'dark' or 'light'
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      // Extract text content from children if it's a React element
      const textContent = typeof children === 'string' 
        ? children 
        : children?.toString() || '';
      
      await navigator.clipboard.writeText(textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const themeClasses = {
    dark: {
      header: 'bg-gradient-to-r from-slate-700 to-slate-800 text-white border-slate-600',
      body: 'bg-slate-900',
      text: 'text-slate-200',
      button: 'bg-slate-700 hover:bg-slate-600 text-white',
      tag: 'bg-slate-600'
    },
    light: {
      header: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border-gray-300',
      body: 'bg-gray-50',
      text: 'text-gray-800',
      button: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
      tag: 'bg-gray-300'
    }
  };

  const currentTheme = themeClasses[theme];

  return (
    <div className={`relative group mb-6 ${className}`}>
      {title && (
        <div className={`flex items-center justify-between ${currentTheme.header} px-6 py-3 rounded-t-2xl border-b`}>
          <span className="font-semibold text-sm">{title}</span>
          {showLanguageTag && (
            <span className={`text-xs ${currentTheme.tag} px-2 py-1 rounded-md`}>
              {language}
            </span>
          )}
        </div>
      )}
      <div className={`relative ${currentTheme.body} ${title ? 'rounded-b-2xl' : 'rounded-2xl'} overflow-hidden`}>
        <pre className={`p-6 text-sm ${currentTheme.text} overflow-x-auto`}>
          <code className={`language-${language}`}>{children}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className={`absolute top-4 right-4 ${currentTheme.button} px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 opacity-0 group-hover:opacity-100 flex items-center gap-2`}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeBox;
