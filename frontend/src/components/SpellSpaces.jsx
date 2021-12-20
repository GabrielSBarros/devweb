import React from 'react';

function SpellSpaces({level, maxSpaces, availableSpaces}) {
  return <div style={{width: '200px'}}>
    <p>Level {level}</p>

    <div style={{display: 'flex'}}>
    {Array.from({length: maxSpaces}).map((_, index) =>
    <div style={{borderRadius: '50%',
    
      width: '20px',
      height: '20px',
      marginLeft: '8px',
  
      backgroundColor: index + 1<= availableSpaces ? '#f1c40f': '#34495e'}} />

    )}
    </div>

  </div>
}

export default SpellSpaces;