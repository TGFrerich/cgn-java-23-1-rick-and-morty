import React, {useState} from 'react';
import './App.css';
import {Character} from "./model/Character";
import Characters from "./characters.json"
import CharacterGallery from "./component/CharacterGallery";
import UserInput from "./component/UserInput";

function App() {

    const characters: Character[] = Characters;
    const [text, setText] = useState<string>("")

    function handleText(text:string) {
        setText(text)
    }

    return (

        <div className="App">
            <header>
                <h1>The one and only Rick and Morty Gallery</h1>
                <h2> Search for a character</h2>

            </header>
            <UserInput deliveredMessage={handleText}/>
            <CharacterGallery characters={characters} searchText={text}/>
            
        </div>
    );
}

export default App;
