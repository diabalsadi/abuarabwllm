
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { getAiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useLanguage } from './LanguageContext';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: 'model', text: t('ai.welcome') }]);
  }, [language]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getAiResponse(`${userMsg} (Please answer in ${language === 'en' ? 'English' : 'Arabic'})`);
    
    setMessages(prev => [...prev, { role: 'model', text: response || (language === 'en' ? "I'm sorry, I couldn't process that request." : "عذراً، لم أتمكن من معالجة هذا الطلب.") }]);
    setIsLoading(false);
  };

  return (
    <div className={`fixed bottom-6 ${language === 'en' ? 'right-6' : 'left-6'} z-[60]`}>
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 overflow-hidden border border-gray-100 flex flex-col h-[500px] animate-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="bg-blue-900 p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold">{t('ai.header')}</h3>
                <p className="text-xs text-blue-200">{t('ai.sub')}</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-amber-500 transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] space-x-2 rtl:space-x-reverse ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse rtl:flex-row rtl:space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-amber-500 text-white rounded-tr-none' : 'bg-white shadow-sm border border-gray-100 text-gray-700 rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white shadow-sm border border-gray-100 p-3 rounded-2xl rounded-tl-none flex space-x-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex space-x-2 rtl:space-x-reverse">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('ai.placeholder')}
                className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-blue-900 text-white p-2 rounded-full hover:bg-amber-500 transition-colors disabled:opacity-50"
              >
                <Send size={20} className="rtl:rotate-180" />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-2 uppercase tracking-widest font-bold">{t('ai.powered')}</p>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-900 text-white p-4 rounded-full shadow-2xl hover:bg-amber-500 transition-all transform hover:scale-110 flex items-center justify-center group"
        >
          <MessageSquare size={28} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 group-hover:ms-2 font-bold whitespace-nowrap">
            {language === 'en' ? 'MEP ASSISTANT' : 'مساعد MEP'}
          </span>
        </button>
      )}
    </div>
  );
};

export default AiAssistant;
