import React, { useState } from 'react';

const ChatInput = ({ number }) => {
  const [message, setMessage] = useState('');
  const [height, setHeight] = useState('40px'); // Initial height of the text area

  // Function to handle sending the message to the server
  const onSendMessage = async (message) => {
    const messagePayload = {
      number: number,
      message: message,
    };

    try {
      const response = await fetch(
        'https://discrete-deer-obliging.ngrok-free.app/send_message',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(messagePayload),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log('Message sent successfully:', data);
      } else {
        console.log('Failed to send message:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // Handle the send button click
  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message); // Send the message
      setMessage(''); // Clear the input field
    }
  };

  // Handle changes in the text area and adjust its height
  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);

    // Dynamically adjust the height of the textarea
    const newHeight = `${Math.max(40, value.split('\n').length * 20)}px`;
    setHeight(newHeight);
  };

  return (
    <div style={styles.container}>
      {/* Textarea with dynamic height */}
      <textarea
        style={{ ...styles.textInput, height }}
        value={message}
        onChange={handleChange}
        placeholder="Type your message"
      />

      {/* Send Button */}
      <button
        style={styles.sendButton}
        onClick={handleSend}
        disabled={!message.trim()} // Disable button if no input
      >
        Send
      </button>
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: '1px',
    borderRadius: '20px',
    padding: '10px',
    resize: 'none', // Prevent resizing of the textarea
    textAlign: 'top', // Ensure the text aligns at the top
    fontSize: '16px',
    marginBottom: '10px',
    width: '100%',
  },
  sendButton: {
    backgroundColor: '#007bff',
    padding: '10px 20px',
    borderRadius: '20px',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ChatInput;
