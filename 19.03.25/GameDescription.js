import React, { useState } from 'react';

const GameDescription = () => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const gameDescription = `
    "Minecraft jest grą o charakterze survivalowym. Dysponuje otwartym światem, w którym możesz budować i niszczyć elementy znajdujące się w wybranej lokalizacji. Gracze mogą atakować się wzajemnie, a dzięki zbieraniu surowców, mogą wytwarzać przedmioty i wznosić budowle."
  `;

  const handleClick = () => {
    setIsDescriptionVisible(true);
    setIsButtonDisabled(true);
  };

  return (
    <div>
      <h1>Informacje o grze</h1>
      <button onClick={handleClick} disabled={isButtonDisabled}>
        Pokaż opis gry
      </button>
      
      {isDescriptionVisible && (
        <div>
          <h2>Opis gry:</h2>
          <p>{gameDescription}</p>
        </div>
      )}
    </div>
  );
};

export default GameDescription;
