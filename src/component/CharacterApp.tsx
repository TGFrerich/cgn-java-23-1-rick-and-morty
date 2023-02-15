import {Character} from "../model/Character";
import CharacterGallery from "./CharacterGallery";

type CharacterAppProps = {
    characters: Character[],
}

export default function CharacterApp(props: CharacterAppProps) {
    return (
        <div>
            <h1>The one and only Rick and Morty Gallery</h1>
            <CharacterGallery characters={props.characters}/>
        </div>
    );
}