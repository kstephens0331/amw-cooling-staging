import React, { useState } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import axios from 'axios';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi there! I'm the AMW Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const newUserMessage = { from: 'user', text: input };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);

    try {
      // Call Claude API directly from frontend
      const response = await axios.post(
        'https://api.anthropic.com/v1/messages',
        {
          model: 'claude-3-haiku-20240307',
          max_tokens: 1024,
          system: `You are a helpful HVAC assistant for AMW Cooling & Heating, LLC, a veteran-owned HVAC company serving Conroe, TX and surrounding areas.

Company Information:
- Phone: (936) 331-1339
- Email: admin@amwairconditioning.com
- Service Area: Conroe, The Woodlands, Montgomery, Willis, Spring, Magnolia, and surrounding Montgomery County areas
- Website: https://amwairconditioning.com

Services Offered:
- AC Repair & Installation
- Heating Repair & Installation (furnaces, heat pumps)
- HVAC Maintenance & Tune-ups
- Indoor Air Quality Solutions (HEPA filtration, UV purification, dehumidifiers)
- Smart Thermostat Installation (Nest, Ecobee, Honeywell)
- Dryer Vent Cleaning
- 24/7 Emergency Services (5pm-9pm and weekends, additional charges apply)
- New HVAC Installations
- System Replacements

Key Features:
- Veteran-owned and operated
- Licensed and insured
- Same-day service available
- Transparent pricing
- 100% satisfaction guaranteed
- Financing options available

Answer questions about HVAC services, help schedule appointments, provide general advice, and direct urgent matters to call (936) 331-1339. Be helpful, professional, and knowledgeable about HVAC systems and Conroe's climate.`,
          messages: updatedMessages.map((m) => ({
            role: m.from === 'bot' ? 'assistant' : 'user',
            content: m.text,
          })),
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.REACT_APP_CLAUDE_API_KEY,
            'anthropic-version': '2023-06-01',
          },
        }
      );

      const botReply = response.data.content[0].text;
      setMessages((prev) => [...prev, { from: 'bot', text: botReply }]);
    } catch (error) {
      console.error('Claude API Error:', error);
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: "Oops! Something went wrong. Please try again or call us at (936) 331-1339 for immediate assistance." },
      ]);
    }

    setInput('');
  };

  return (
    <div className="fixed bottom-6 left-6 z-60 flex flex-col items-start">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition flex items-center gap-2"
      >
        {isOpen ? (
          <>
            <FaTimes />
            <span>Close</span>
          </>
        ) : (
          <>
            <FaRobot />
            <span>Chat Now</span>
          </>
        )}
      </button>

      {isOpen && (
        <div className="mt-2 w-72 max-h-[80vh] bg-white border border-gray-300 rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <div className="bg-blue-600 text-white px-4 py-2 flex items-center space-x-2">
            <img src="/assets/logo.png" alt="AMW Logo" className="w-6 h-6 rounded-full" />
            <h2 className="text-sm font-semibold">AMW Assistant</h2>
          </div>

          <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-700 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={
                  msg.from === 'bot'
                    ? 'text-left bg-gray-100 p-2 rounded shadow-sm'
                    : 'text-right bg-blue-100 text-blue-800 p-2 rounded shadow-sm'
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="border-t p-2 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 p-2 text-sm border border-gray-300 rounded"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
