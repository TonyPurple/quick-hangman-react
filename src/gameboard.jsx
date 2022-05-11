import LetterGrid from "./lettergrid"

export default function GameBoard({secretWord}) {
    
    return (
        <div>
            <LetterGrid secretWord={secretWord} />
        </div>
    )
}