import Anthropic from '@anthropic-ai/sdk';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY || process.env.ANTHROPIC_API_KEY,
});

// Middleware
app.use(cors());
app.use(express.json());

// System prompt for the chatbot
const SYSTEM_PROMPT = `You are a helpful HVAC assistant for AMW Cooling & Heating, LLC, a veteran-owned HVAC company serving Conroe, TX and surrounding areas.

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

Answer questions about HVAC services, help schedule appointments, provide general advice, and direct urgent matters to call (936) 331-1339. Be helpful, professional, and knowledgeable about HVAC systems and Conroe's climate.`;

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'AMW Chatbot Server - Claude API' });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { history, userMessage } = req.body;

    if (!userMessage || !history) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Convert history to Claude format
    const messages = history.map(msg => ({
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      content: msg.content
    }));

    // Call Claude API
    const response = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages,
    });

    // Extract response text
    const botReply = response.content[0].text;

    res.json({ message: botReply });
  } catch (error) {
    console.error('Claude API Error:', error);
    res.status(500).json({
      error: 'Failed to get response from chatbot',
      message: 'Please try again or call us at (936) 331-1339 for immediate assistance.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`🤖 AMW Chatbot server running on port ${PORT}`);
  console.log(`📡 Using Claude API (claude-3-haiku-20240307)`);
});
