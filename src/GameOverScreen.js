import React from "react";
import Card from "./Card";

export default function GameOverScreen({ finalCard }) {
    return (
        <div
            className="flex flex-col w-full h-screen justify-center items-center border- border-white py-2 
                    space-y-16 overflow-y-hidden"
        >
            <h1 className="text-white text-5xl">Your card is ...</h1>
            <Card
                card={finalCard}
                className={"w-1/4 border- border-blue-900 h-[200px] "}
            />
        </div>
    );
}
