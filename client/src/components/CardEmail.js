import React, { useState, useEffect } from 'react';

function EmailCard({ onSend, userName, onClose }) {
  const [assunto, setAssunto] = useState('');
  const [body, setBody] = useState('');
  const [selectedReceiver, setSelectedReceiver] = useState(0);
  const [receivers, setReceivers] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3333/user');
      const userData = await response.json();
      setReceivers(userData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const selectReceiver = (e) => {
    const selectedUserId = parseInt(e.target.value, 10);
    setSelectedReceiver(selectedUserId);
  };

  const handleSend = async (event) => {
    event.preventDefault();

    try {
      const email = {
        assunto: assunto,
        body: body,
        receiver: selectedReceiver,
        user: userName
      };

      const response = await fetch('http://localhost:3333/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(email),
      });

      if (response.ok) {
        onSend(email);
        // Limpar os campos do formulário
        setAssunto('');
        setBody('');
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
          onClose();
        }, 3000); // Fechar o card após 3 segundos
      } else {
        console.error('Failed to create email');
      }

    } catch (error) {
      console.error('Error creating email:', error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        padding: '40px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '70%',
        margin: 'auto',
        position: 'relative',
        zindex:'9999'
        
        
      }}
    >
      <div
        style={{
          marginRight: '2px',
          position:'absolute',
          top:'20px'

        }}
      >
        <a>
          Send Message
        </a>

      </div>
      <div
        style={{
          marginBottom: '1em'
        }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: '#ccc',
            color: '#333',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginBottom: '10px'
          }}
        >
          X
        </button>
      </div>
      <select
        id="receiverSelect"
        value={selectedReceiver}
        onChange={selectReceiver}
        required
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          marginBottom: '20px',
          boxSizing: 'border-box',
          fontSize: '16px',
        }}
      >
        {receivers.map((receiver) => (
          <option
            key={receiver.id}
            value={receiver.id}
          >
            {receiver.email}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Assunto"
        value={assunto}
        onChange={(e) => setAssunto(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '16px',
        }}
      />
      <textarea
        placeholder="Escreva seu e-mail aqui..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={{
          width: '100%',
          height: '150px',
          padding: '10px',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '16px',
        }}
      />
      <button
        onClick={handleSend}
        style={{
          backgroundColor: '#3a9c74',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          marginRight: '10px',
        }}
      >
        Enviar
      </button>
      {showSuccessMessage && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 10px)',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#3a9c74',
          color: '#fff',
          padding: '10px',
          borderRadius: '4px',
        }}
        >
          E-mail enviado com sucesso!
        </div>
      )}

    </div>
  );
}








export default EmailCard;
