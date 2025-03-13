import Header from './components/Header';
import GameList from './components/GameList';
import gamesData from './components/GamesData';
import LoadMore from './components/LoadMore';
import LoadFavouritegames from './components/LoadFavouritesgames';
import ThemeToggle from './components/ThemeToggle';
import RandomGame from './components/RandomGame';

function App() {
  return (
    <div>
      <Header />
      <GameList gamesData={gamesData} />
      <LoadMore />
      <LoadFavouritegames />
      <ThemeToggle />
      <RandomGame />
    </div>
  );
}

export default App;
