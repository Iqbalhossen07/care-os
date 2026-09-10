"use client";

import React, { useState } from 'react';

export function FloatingSupport() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50 items-end">
        
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/447000000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all duration-300 relative"
          aria-label="Contact us on WhatsApp"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825.001 6.938 3.113 6.939 6.938-.001 3.825-3.114 6.938-6.939 6.942z"/>
          </svg>
          <span className="absolute right-full mr-4 whitespace-nowrap bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-700">
            WhatsApp Us
          </span>
        </a>

        {/* Chatbot Button */}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="group flex items-center justify-center w-14 h-14 bg-brand text-background rounded-full shadow-[0_4px_20px_rgba(0,210,170,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(0,210,170,0.6)] transition-all duration-300 relative"
          aria-label="Open support chat"
        >
          {isChatOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
            </svg>
          )}
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 whitespace-nowrap bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-700">
            {isChatOpen ? 'Close Chat' : 'Chat with Support'}
          </span>
        </button>

      </div>

      {/* Fake Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-card-dark border border-border-dark shadow-2xl rounded-2xl z-50 overflow-hidden flex flex-col animate-[slideIn_0.3s_ease-out]">
          <div className="bg-brand px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">CareStaff Assistant</div>
                <div className="text-white/80 text-xs">Typically replies instantly</div>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-white/80 hover:text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          
          <div className="p-4 h-64 overflow-y-auto bg-background/50 flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center shrink-0 mt-1">
                <span className="text-brand text-xs">AI</span>
              </div>
              <div className="bg-card-dark border border-border-dark p-3 rounded-2xl rounded-tl-sm text-sm text-gray-300">
                Hi there! Welcome to CareStaff OS. How can I help you manage your care home today?
              </div>
            </div>
          </div>

          <div className="p-3 border-t border-border-dark bg-card-dark">
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 bg-background border border-border-dark rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-brand"
              />
              <button type="submit" className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center hover:bg-brand-hover transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
