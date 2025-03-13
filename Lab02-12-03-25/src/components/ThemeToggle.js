import React, {useState} from "react";

const ThemeToggle = () =>{
    const[darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(!darkMode);
    return(
        <div className={`${darkMode ? document.body.style = 'background: black' : document.body.style = 'background: white'}`}>
            <button onClick={toggleDarkMode} className="p-4 rounded-lg shadow-lg">
                {darkMode ? 'Jasny motyw' : 'Ciemny motyw'}
            </button>
        </div>
    );
};

export default ThemeToggle;