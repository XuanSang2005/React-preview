import './ChatMessage.css';
export function ChatMessage({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;
  // const {sender, message} = props

  return (
    <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
      {sender === 'robot' && <img src="robot.png" className="chat-message-profile" />}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === 'user' && <img src="user.png" className="chat-message-profile" />}
    </div>
  );
}