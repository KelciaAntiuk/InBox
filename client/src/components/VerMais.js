import React, { useState } from 'react';

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
      console.error('Error deleting task:', error);
    }
  };

  const updateEmail = async () => {
    try {
      await fetch(`http://localhost:3333/email/${email.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...email}),
      });
      onClose();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedAssunto(email.assunto);
    setEditedBody(email.body);
  };

  const handleSaveEdit = async () => {
    try {
      await fetch(`http://localhost:3333/email/${email.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...email, assunto: editedAssunto, body: editedBody }),
      });

      setIsEditing(false);
    } catch (error) {
      console.error('Error updating task:', error);
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
      onClick={onClose}
    >
      <div
        className="modal"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          padding: '20px',
          width: '50%',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ 
          textAlign: 'right', 
          marginBottom: '10px'
           }}
           >
          <span
            className="close"
            onClick={onClose}
            style={{ 
              cursor: 'pointer', 
              fontSize: '24px' 
            }}
          >
            &times;
          </span>
        </div>
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '20px',
            fontFamily: 'Arial, sans-serif',
            color: '#333'
          }}
        >
          Email
        </h2>
        {isEditing ? (
          <form>
            <div 
            style={{ 
              marginBottom: '10px' 
              }}
              >
              <label>Title:</label>
              <input
                type="text"
                value={editedAssunto}
                onChange={(e) => setEditedAssunto(e.target.value)}
                style={{ 
                  width: '100%', 
                  marginTop: '5px' 
                  }} 
                  />
            </div>
            <div 
            style={{ 
              marginBottom: '10px' 
              }}
              >
              <label>Description:</label>
              <textarea
                value={editedBody}
                onChange={(e) => setEditedBody(e.target.value)}
                style={{ 
                  width: '100%', 
                  marginTop: '5px'
                   }} 
                   />
            </div>
            <div
             style={{ 
              textAlign: 'center' 
              }}
              >
              <button
                onClick={handleSaveEdit}
                style={{
                  marginRight: '10px'
                }}
              >
                Save
              </button>
              <button
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <p
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                margin: '10px 0',
                fontFamily: 'Arial, sans-serif',
                color: '#555'
              }}
            >
              {email.assunto}
            </p>
            <p
              style={{
                textAlign: 'center',
                margin: '10px 0',
                fontFamily: 'Arial, sans-serif',
                color: '#555'
              }}
            >
              Descrição: {email.body}
            </p>
            <hr />
           
            

            <div
              style={{
                textAlign: 'center',
                marginTop: '20px'
              }}
            >
              <button
                onClick={updateEmail}
                style={{
                  marginRight: '10px',
                  fontFamily: 'Arial, sans-serif',
                  backgroundColor: '#f44336',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Fechar
              </button>
              <button
                onClick={handleEditClick}
                style={{
                  marginRight: '10px',
                  fontFamily: 'Arial, sans-serif',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Editar
              </button>
            </div>
            <div>
              <p
                style={{
                  marginRight: '65em',
                  marginTop: '-1.2em',
                  fontFamily: 'Material Symbols Outlined',
                  fontSize: '30px',
                  cursor: 'pointer'

                }}
                onClick={() => deleteEmail(email.id)}
              >
                delete
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default VerMais;
