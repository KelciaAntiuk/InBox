
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
 


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const redirect = () => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };




  return (
    <div className="Home"
    style={{
      backgroundColor:'rgba(111, 205, 163, 0.4)',
      minHeight: '100vh'
    }}>
      <div
        className={`sidebar ${menuOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "250px",
          backgroundColor: "#3a9c74",
          color: "#fff",
          transition: "transform 0.3s ease-in-out",
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {/* Conteúdo do menu */}
        <ul
          style={{
            listStyle: "none",
            padding: 0
          }}
        >
          <li
            style={{
              borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
              transition: 'border-color 0.3s ease'
            }}
          >
          
          </li>
          <li
            style={{
              borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
              transition: 'border-color 0.3s ease'
            }}
          >
           
          </li>
        </ul>
      </div>

      <div
        style={{
          marginLeft: menuOpen ? "250px" : "0",
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        <div
          className="nav"
          style={{
            backgroundColor: "#3a9c74",
            display: "flex",
            padding: "10px",
            color: "#fff",
            borderBottom: "2px solid #fff",
          }}
        >
          <button
            onClick={toggleMenu}
            style={{
              backgroundColor: "transparent",
              color: 'white',
              border: "none",
              fontSize: "34px",
              cursor: "pointer",
              marginTop: '-5px'
            }}
          >
            {menuOpen ? "✕" : "≡"}
          </button>
          <div
            className="logo"
            style={{
              fontWeight: "bold",
              fontSize: "40px",
              fontFamily: "Abril Fatface",
              marginLeft: "10px",

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
          >
          </div>

          
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
              fontFamily: 'Rajdhani, sans-serif', // Adicionando a fonte fornecida
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          // onClick={()}
          >
            <p
              style={{
                color: 'black',
                fontSize: '16px',
                fontWeight: '500',
                margin: 0,
                color: '#20835d' // Removendo margem padrão do parágrafo
              }}
              onClick={() => redirect()}
            >
              Logout
            </p>


          </div>
        </div>

      </div>
   

    </div >
  );
}

export default Home;