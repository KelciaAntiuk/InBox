import React, { useState } from 'react';

function EmailCard({ onSend }) {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSend = () => {
    // Verifica se o assunto e o corpo do e-mail não estão vazios antes de enviar
    if (subject.trim() !== '' && body.trim() !== '') {
      // Chama a função onSend passada como propriedade com os dados do e-mail
      onSend({ subject, body });
      // Limpa os campos após o envio
      setSubject('');
      setBody('');
    } else {
      // Exibe uma mensagem de erro se o assunto ou o corpo do e-mail estiverem vazios
      alert('Por favor, preencha o assunto e o corpo do e-mail.');
    }
  };

  return (
    <div style={styles.card}>
      <input
        type="text"
        placeholder="Assunto"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        style={styles.input}
      />
      <textarea
        placeholder="Escreva seu e-mail aqui..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={styles.textarea}
      />
      <button onClick={handleSend} style={styles.button}>Enviar</button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: 'auto',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    height: '150px',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#3a9c74',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default EmailCard;
