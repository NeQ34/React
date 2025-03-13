import React, {useState} from "react";
import GameList from "./GameList";

const favouriteGames = [
    {id: 6, title: "Minecraft", genre: "RPG"},
    {id: 7, title: "S.T.A.L.K.E.R", genre: "Action RPG"},
    {id: 7, title: "Krunker.io", genre: "Action RPG"}
];

const LoadFavouritegames = () =>{
    const[loaded, setLoaded] = useState(false);
    const loadMoreGames = () => {setLoaded(!loaded);};
    return(
        <div>
            <button onClick={loadMoreGames}>
                {loaded ? 'Schowaj' : 'Załaduj ulubione gry'}
            </button>
            {loaded ? <GameList gamesData={favouriteGames}/>: ''};
        </div>
    );
};

export default LoadFavouritegames;