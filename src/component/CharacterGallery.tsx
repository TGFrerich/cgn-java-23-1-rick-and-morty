import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import "./CharacterGallery.css"

export type CharacterGalleryProps = {
    characters: Character[],
    searchText: string
}

export default function CharacterGallery(props: CharacterGalleryProps) {

    const characterCard = props.characters.filter((character) => character.name.toLowerCase().includes(props.searchText.toLowerCase())).map((character) => {
        return (
            <CharacterCard character={character} key={character.id + " " + character.name}/>
        );
    });

    return (
        <div className={"character-gallery"}>
            {characterCard}
        </div>
    );

}