import React, { useState } from 'react';

const GameDescriptionWithStyleChange = () => {
  const [bgColor, setBgColor] = useState('white');
  const [textColor, setTextColor] = useState('black');

  const gameDescription = `
    "Minecraft jest grą o charakterze survivalowym. Dysponuje otwartym światem, w którym możesz budować i niszczyć elementy znajdujące się w wybranej lokalizacji. Gracze mogą atakować się wzajemnie, a dzięki zbieraniu surowców, mogą wytwarzać przedmioty i wznosić budowle."
  `;

  const handleBgColorChange = (color) => {
    setBgColor(color);
  };

  const handleTextColorChange = (color) => {
    setTextColor(color);
  };

  return (
    <div>
      <h1>Opis gry</h1>
      <div>
        <button onClick={() => handleBgColorChange('lightblue')}>Zmien tło na niebieskie</button>
        <button onClick={() => handleBgColorChange('lightgreen')}>Zmien tło na zielone</button>
        <button onClick={() => handleBgColorChange('lightyellow')}>Zmien tło na żółte</button>
      </div>
      <div>
        <button onClick={() => handleTextColorChange('red')}>Zmien tekst na czerwony</button>
        <button onClick={() => handleTextColorChange('blue')}>Zmien tekst na niebieski</button>
        <button onClick={() => handleTextColorChange('green')}>Zmien tekst na zielony</button>
      </div>

      <div 
        style={{ 
          backgroundColor: bgColor, 
          color: textColor, 
          padding: '20px', 
          marginTop: '20px', 
          borderRadius: '8px', 
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}
      >
        <h2>Opis gry:</h2>
        <p>{gameDescription}</p>
      </div>
    </div>
  );
};

export default GameDescriptionWithStyleChange;
