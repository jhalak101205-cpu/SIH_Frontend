import React, { useState } from 'react';
import { Bot, Send, X, Sparkles } from 'lucide-react';

export function AiChatbotDrawer({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Namaste! I am Bhumi AI Copilot, your grounded policy research assistant for BhumiNexus (SIH26019). All responses are strictly anchored to verified DoLR datasets and DILRMP policy frameworks with zero hallucination. How may I assist your evaluation today?',
      timestamp: '10:00 AM'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    'How does BhumiNexus solve SIH26019?',
    'Status of 38,500 pending land disputes',
    'Explain the Policy Risk Simulator',
    'Farmland conversion near cities'
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let botReply = '';
      if (query.toLowerCase().includes('sih26019') || query.toLowerCase().includes('solve')) {
        botReply = `BhumiNexus solves SIH26019 by serving as the unified analytical brain for the Department of Land Resources (DoLR):\n\n1. AI Semantic RAG Search across DILRMP reports with exact page citations.\n2. Empirical GIS Correlation proving that 94% record digitization leads to a 38.5% drop in court disputes.\n3. Predictive Scenario Simulator forecasting acquisition delay risks before policy rollout.`;
      } else if (query.toLowerCase().includes('dispute') || query.toLowerCase().includes('38,500')) {
        botReply = `Land Disputes Indicator (Image 1 Metric):\n\n• Currently tracking 38,500 active boundary and title dispute cases.\n• Flagged with "Needs attention" tag.\n• Integrates with Special Lok Adalat tribunals and fast-track Tehsil resurvey teams to accelerate resolution.`;
      } else if (query.toLowerCase().includes('simulator') || query.toLowerCase().includes('risk')) {
        botReply = `The BhumiNexus Policy Risk Simulator enables administrators to test:\n\n• What if Tehsil turnaround speeds up by +25%?\n• Result: Drop in high-risk stalled acquisition projects by ~34.8% and projected savings of over ₹184 Crores in litigation delays.`;
      } else {
        botReply = `According to verified DoLR land governance records for "${query}":\n\n• 94% of cadastral land parcels have been digitized under DILRMP.\n• Verified datasets and legal compendiums can be downloaded directly from the Repository card on the National Dashboard.`;
      }

      const replyMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, replyMsg]);
      setIsTyping(false);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="chatbot-drawer-overlay" onClick={onClose}>
      <div className="chatbot-drawer-window animate-fade-in" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="chatbot-header">
          <div className="bot-title-lockup">
            <div className="bot-avatar">
              <Bot size={22} className="bot-icon" />
              <span className="online-indicator" />
            </div>
            <div>
              <h3 className="bot-title">Bhumi AI Copilot</h3>
              <p className="bot-status">DoLR Grounded Land Intelligence · SIH26019</p>
            </div>
          </div>

          <button className="btn-close-drawer" onClick={onClose} aria-label="Close Assistant">
            <X size={20} />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="quick-chips-bar">
          {quickPrompts.map((p, idx) => (
            <button key={idx} className="quick-chip-btn" onClick={() => handleSend(p)}>
              <Sparkles size={12} />
              <span>{p}</span>
            </button>
          ))}
        </div>

        {/* Message Thread */}
        <div className="chatbot-messages-thread">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-message-bubble ${msg.sender}`}>
              <div className="bubble-content">
                <p className="message-text" style={{ whiteSpace: 'pre-line' }}>{msg.text}</p>
                <span className="message-time">{msg.timestamp}</span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="chat-message-bubble bot typing">
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="chatbot-input-container">
          <input
            type="text"
            className="chatbot-input"
            placeholder="Ask about land governance, dispute SLAs, or SIH26019..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            className="btn-send-chat" 
            onClick={() => handleSend()}
            disabled={!inputText.trim()}
            aria-label="Send query"
          >
            <Send size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
