import React, {ChangeEvent} from "react";

type UserInputProps = {
    deliveredMessage(text: string) : void
}

export default function UserInput(props: UserInputProps){
    function handleInput(event: ChangeEvent<HTMLInputElement>){
        console.log(event.target.value)
        props.deliveredMessage(event.target.value)
    }
    return (
        <input onChange={handleInput}/>
    )
}