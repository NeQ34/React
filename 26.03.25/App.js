import './App.css';
import Header from './components/12.03.25/Header';
import GameList from './components/12.03.25/GameList';
import GamesData from './components/12.03.25/GamesData';
import LoadMore from './components/12.03.25/LoadMore';
import LoadFavouritesGames from './components/12.03.25/LoadFavouritesGames';
import FavoriteGameForm from './components/19.03.25/FavoriteGameForm';
import ClassComponent from './components/19.03.25/ClassComponent';
import ChangeStyle from './components/19.03.25/ChangeStyle';
import GameDescription from './components/19.03.25/GameDescription';
import GameDescriptionWithStyleChange from './components/19.03.25/GameDescriptionWithStyleChange';
import WelcomeForm from './components/19.03.25/WelcomeForm';
import GameOfMonth from './components/26.03.25/GameOfMonth';
import TopGamesListToggler from './components/26.03.25/TopGamesListToggler';

function App() {
  
  return (
    <div>
      <Header />
      <GameList gamesData={GamesData} />
      <LoadMore />
      <LoadFavouritesGames />
      <ChangeStyle />
      <ClassComponent />
      <FavoriteGameForm />
      <GameDescription />
      <GameDescriptionWithStyleChange />
      <WelcomeForm />
      <TopGamesListToggler />
      <GameOfMonth />
    </div>
  );
}

export default App;
