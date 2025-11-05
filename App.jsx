// App.jsx
import { useState } from 'react';

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const askAI = async () => {
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });
    const data = await res.json();
    setResponse(data.answer);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>O/L & A/L Support Website</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="ප්‍රශ්නය මෙහි ලියන්න..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <br />
      <button onClick={askAI}>ඇසන්න</button>
      <h2>පිළිතුර:</h2>
      <p>{response}</p>
    </div>
  );
}

export default App;
