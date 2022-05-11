import LetterGrid from "./lettergrid"
import ButtonGrid from "./buttongrid"

export default function GameBoard({secretWord}) {
    
    return (
        <div>
            <LetterGrid 
                secretWord={secretWord}
                guessedLetters={['e', 'd']} />
            <ButtonGrid />
        </div>
    )
}