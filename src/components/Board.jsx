import React from "react"
import { Card } from "./Card"

const icons = [
    '🎶', '👍', '😎', '🤩',
    '😖', '😈', '🤓', '🫣'
]
export function Board() {
    return (
        <div style={style}>
            {[...icons, ...icons].map((icon, index) => (<Card key={index}>{icon}</Card>))}
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