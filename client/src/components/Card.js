import React, { useState, useEffect } from 'react';

function TaskCard({ userName }) {
  const [content, setContent] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchEmails();
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3333/user');
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchEmails = async () => {
    try {
      const response = await fetch('http://localhost:3333/email');
      const emailData = await response.json();
      setContent(emailData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  const shortenContent = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div style={{
      marginTop:'10px'
    }}>
      {content
      .filter(content => content.receiver === userName)
      .map(email => (
        <div 
        key={email.id} 
        className="task-card" 
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          maxWidth: '100%',
          marginRight:'10px',
          marginLeft:'10px',
          border: '1px solid #e0e0e0',
          display: 'flex',
          //gap: '10%', // Definindo o espaçamento entre os elementos
          alignItems: 'center', // Alinhando verticalmente os elementos
        }}>
          <div style={{
            fontSize: '19px',
           
          }}>
            {user
              .filter(user => user.id === email.user)
              .map(user => (
                <div key={user.id}>
                  <a
               
                  >
                  {user.title}
                  </a>
                </div>
              ))
            }
          </div>
          <div style={{
            fontSize: '17px',
            lineHeight: '1.5',
            marginLeft:'20px'
            //flex: '1', // Ocupa todo o espaço disponível
          }}>
            {email.assunto}: 
            <a 
            style={{
              fontSize:'15px'
              }}
              >
                {shortenContent(email.body, 90)}
                </a>
          </div>
        
        </div>
      ))}
    </div>
  );
}

export default TaskCard;
