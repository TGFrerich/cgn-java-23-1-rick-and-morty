import React from 'react';
import './App.css';
import {Character} from "./model/Character";
import Characters from "./characters.json"
import CharacterApp from "./component/CharacterApp";

function App() {

  const characters: Character[] = Characters;

  return (
    <div className="App">
      <CharacterApp characters={characters} />
    </div>
  );
}

export default App;
