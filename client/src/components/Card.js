import React, { useState, useEffect } from 'react';


function TaskCard({ userName }) {


  return (
    <div className="task-card">
      <div style={{
        borderRadius: '5px',
        margin: '1rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '-20px', // Para centralizar verticalmente as informações
      }}>
        <div
            
            style={{
              border: '1px solid black',
              borderRadius: '5px',
              margin: '1rem',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              height:'9px',
              width:'100%'
            }}
            
          >
            
          </div>
       </div>

     
    </div >

  );
}

export default TaskCard;
