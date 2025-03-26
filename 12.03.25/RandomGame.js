import { useState } from "react";

const games = ["The Witcher 3", "Cyberpunk 2077", "Dark Souls 3", "Elden Ring", "Minecraft", "S.T.A.L.K.E.R"];
const RandomGame = () => {
    const [randomGame, setRandomGame] = useState("");
    const getRandomGame = () => {
        const randomIndex = Math.floor(Math.random() * games.length);
        setRandomGame(games[randomIndex]);
    };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black transition-colors duration-300">
      <button onClick={getRandomGame} className="p-4 rounded-lg shadow-lg mb-4">
        Wylosuj grę
      </button>
      {randomGame && <p className="text-xl font-bold">{randomGame}</p>}
    </div>
  );
}
export default RandomGame;