import { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! Ask me anything about Kiruthik.' }
  ]);
  const [input, setInput] = useState('');

  function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: 'bot', text: "I'm just a demo bot for now!" }]);
    }, 700);
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50">
      <div className="font-bold mb-2">Ask Me Anything</div>
      <div className="h-40 overflow-y-auto mb-2 bg-gray-50 dark:bg-gray-900 rounded p-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.from === 'bot' ? 'text-left' : 'text-right'}>
            <span
              className={`inline-block px-2 py-1 rounded mb-1 ${msg.from === 'bot' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'}`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Type your question..."
        />
        <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">Send</button>
      </form>
    </div>
  );
} 