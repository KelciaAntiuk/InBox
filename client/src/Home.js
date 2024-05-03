import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from './components/Card';
import CardEmail from './components/CardEmail';

function Home() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [card, setCard] = useState(true);
  const [email, setEmail] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state && location.state.userName;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sendEmail = () => {
    setEmail(true);
  };

  const redirect = () => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div
      className="Home"
      style={{
        backgroundColor: 'rgba(111, 205, 163, 0.4)',
        minHeight: '100vh',
        position: 'relative', // Adicionando posição relativa para garantir o empilhamento correto dos componentes
      }}
    >
      <div
        className={`sidebar ${menuOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100%',
          width: '250px',
          backgroundColor: '#3a9c74',
          color: '#fff',
          transition: 'transform 0.3s ease-in-out',
          transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
          zIndex: 999, // Definindo um z-index alto para garantir que o menu esteja por cima de outros elementos
        }}
      >
        {/* Conteúdo do menu */}
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li
            style={{
              borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
              transition: 'border-color 0.3s ease',
            }}
          ></li>
          <li
            style={{
              borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
              transition: 'border-color 0.3s ease',
            }}
          ></li>
        </ul>
      </div>

      <div
        style={{
          marginLeft: menuOpen ? '250px' : '0',
          transition: 'margin-left 0.3s ease-in-out',
        }}
      >
        <div
          className="nav"
          style={{
            backgroundColor: '#3a9c74',
            display: 'flex',
            padding: '10px',
            color: '#fff',
            borderBottom: '2px solid #fff',
          }}
        >
          <button
            onClick={toggleMenu}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: 'none',
              fontSize: '34px',
              cursor: 'pointer',
              marginTop: '-5px',
            }}
          >
            {menuOpen ? '✕' : '≡'}
          </button>
          <div
            className="logo"
            style={{
              fontWeight: 'bold',
              fontSize: '40px',
              fontFamily: 'Abril Fatface',
              marginLeft: '10px',
            }}
          >
            InBox
          </div>

          <div
            className="button-container"
            style={{
              display: 'flex',
              marginLeft: 'auto',
              marginRight: '20px',
            }}
          ></div>

          <div
            className="perfil"
            style={{
              position: 'relative',
              height: '50px',
              width: '120px',
              backgroundColor: 'white',
              borderRadius: '30px',
              marginLeft: '10px',
              cursor: 'pointer',
              fontFamily: 'Rajdhani, sans-serif',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <p
              style={{
                color: 'black',
                fontSize: '16px',
                fontWeight: '500',
                margin: 0,
                color: '#20835d',
              }}
              onClick={() => redirect()}
            >
              Logout
            </p>
          </div>
        </div>
      </div>

      {card && 
      <Card 
      userName={userName} 
      />
      }
      {email && (
        <div
          style={{
            position: 'fixed',
            top: '66%',
            left: '50%',
            right: '-30%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
          }}
        >
          <CardEmail
            onClose={() => setEmail(false)}
            onSend={() => {
              setEmail(false);
              setShowSuccessMessage(true)
              setTimeout(() => {
                setShowSuccessMessage(false)

              }, 4000)
            }}
            userName={userName}
          />
        </div>
      )}

      {showSuccessMessage && (
        <div style={{
          position: 'absolute',
          top: '90px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#3a9c74',
          color: '#fff',
          padding: '10px',
          borderRadius: '4px',
          zIndex: '9999'
        }}
        >
          E-mail enviado com sucesso!
        </div>
      )}

      <button
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#3a9c74',
          color: '#fff',
          border: 'none',
          borderRadius: '14px',
          height: '50px',
          fontSize: '15px',
          cursor: 'pointer',
          zIndex: 999,
        }}
        onClick={() => sendEmail()}
      >
        Send Email
      </button>
    </div>
  );
}

export default Home;
