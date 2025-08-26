import React, { useState } from "react"
import { Card } from "./Card"

const icons = [
    '😑', '👍', '😎', '🤩',
    '😖', '😈', '🤓', '🫣'
]

function getCards() {
    return [...icons, ...icons]
        .sort(() => Math.random() - 0.5)
        .map((icon, index) => ({
            index,
            icon,
            showing: false,
            selected: false,
            matched: false
        }))

}

export function Board() {
    const [ cards, setCards ] = useState(getCards)
    
    return (
        <div style={style}>
            {cards.map((card, index) => (
                <Card key={index} card={card} />))}
        </div>
    )
}

const style = {
    backgroundColor: '#464646ff',
    flexGrow: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    gap: '1em',
    padding: '1em'
}