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
    <div
      style={{
        marginTop: '10px'
      }}
    >
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
              marginRight: '10px',
              marginLeft: '10px',
              border: '1px solid #e0e0e0',
              display: 'flex',
              alignItems: 'center',
              transition: 'transform 0.2s',
              minWidth: '250px',

            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'scale(1.01)';
              e.currentTarget.style.border = '1px solid grey';
              e.currentTarget.style.zIndex = '9999'
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.border = '1px solid #e0e0e0';
            }}
          >
            <div style={{
              fontSize: '19px',
              minWidth: '150px'
            }}>
              {user
                .filter(user => user.id === email.user)
                .map(user => (
                  <div
                    style={{
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      maxWidth: '130px'
                    }}
                    key={user.id}
                  >
                    <a

                    >
                      {user.title}
                    </a>
                  </div>
                ))
              }
            </div>
            <div
              style={{
                fontSize: '17px',
                lineHeight: '1.5',
                marginLeft: '20px',

              }}
            >
              {email.assunto}:
              <a
                style={{
                  fontSize: '15px'
                }}
              >
                {shortenContent(email.body, 50)}
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TaskCard;
