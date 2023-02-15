import React from 'react';
import './App.css';
import {Character} from "./model/Character";
import Characters from "./characters.json"
import CharacterGallery from "./component/CharacterGallery";

function App() {

  const characters: Character[] = Characters;

  return (
    <div className="App">
      <CharacterGallery characters={characters} />
    </div>
  );
}

export default App;
