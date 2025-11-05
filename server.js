// server.js
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.post('/api/ask', async (req, res) => {
  const { question } = req.body;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: question }],
    }),
  });

  const data = await response.json();
  res.json({ answer: data.choices[0].message.content });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
