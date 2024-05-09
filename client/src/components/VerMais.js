import React, { useState, useEffect } from 'react';

function VerMais({ email, onClose }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAssunto, setEditedAssunto] = useState(email.assunto);
  const [editedBody, setEditedBody] = useState(email.body);

  

  const deleteEmail = async (id) => {
    try {
      await fetch(`http://localhost:3333/email/${id}`, {
        method: 'DELETE',
      });

      onClose();
    } catch (error) {
      console.error('Error deleting email:', error);
    }
  };
   

  return (
    <div
      className="modal-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: '9999',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}  
    >
      <div
        className="modal"
        style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(60,64,67,.3), 0 4px 8px 3px rgba(60,64,67,.15)',
          padding: '20px',
          width: '50%',
          maxWidth: '800px',
        }}
        onClick={(e) => e.stopPropagation()}
      >

        <div style={{ 
          textAlign: 'right', 
          marginBottom: '10px',
          fontSize: '24px',
          cursor: 'pointer' 
          }}
          onClick={onClose}
          >
          &times;
        </div>
        <h2
          style={{
            textAlign: 'left',
            marginBottom: '20px',
            fontFamily: 'Arial, sans-serif',
            color: '#202124',
            fontSize: '24px',
          }}
        >
          {isEditing ? (
            <input
              type="text"
              value={editedAssunto}
              onChange={(e) => setEditedAssunto(e.target.value)}
              style={{
                width: '100%',
                fontSize: '24px',
                border: 'none',
                outline: 'none',
                borderBottom: '2px solid #1a73e8',
                paddingBottom: '8px',
                marginBottom: '10px',
              }}
            />
          ) : (
            email.assunto
          )}
        </h2>
        <p
          style={{
            textAlign: 'left',
            margin: '10px 0',
            fontFamily: 'Arial, sans-serif',
            color: '#5f6368',
            whiteSpace: 'pre-wrap',
            fontSize: '16px',
            lineHeight: '1.6',
          }}
        >
          {isEditing ? (
            <textarea
              value={editedBody}
              onChange={(e) => setEditedBody(e.target.value)}
              style={{
                width: '100%',
                minHeight: '200px',
                fontSize: '16px',
                border: '2px solid #1a73e8',
                padding: '8px',
                marginBottom: '20px',
              }}
            />
          ) : (
            email.body
          )}
        </p>
        <div
          style={{
            textAlign: 'right',
            marginTop: '20px'
          }}
        >
          {isEditing ? (
            <>
             
            </>
          ) : (
            <>
             
              
              <button
                onClick={() => deleteEmail(email.id)}
                style={{
                  marginLeft: '10px',
                  padding: '8px 16px',
                  backgroundColor: '#db4437',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                Excluir
              </button>
             
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default VerMais;
