import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css';
export function ChatInput({ chatMessages, setChatMessages }) {
  let [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];

    setChatMessages(newChatMessages);

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);
    setInputText('');
  }
  return (
    <div className="chat-input-container">
      <input placeholder="Send a message to Chatbot" size="30" onChange={saveInputText} value={inputText} className="chat-input"
        onKeyDown={(event) => {
          event.key == 'Enter' && sendMessage();
          event.key == 'Escape' && setInputText('');
        }} />
      <button onClick={sendMessage} className="send-button">Send</button>
    </div>
  );
}