
import { useSelector } from "react-redux";
function Display() {
    const gameIsPlaying = useSelector((state) => state.playing);
    const playerOneScore = useSelector((state)=>state.player1)
    const playertwoScore = useSelector((state)=>state.player2)
    const winner = useSelector((state) => state.winner);
    const advantage = useSelector((state) => state.advantage);

    
    if (winner) {
        if (winner === "player1") {
        return <p className="display">Joueur 1 gagne</p>;
        } else {
        return <p className="display">Joueur 2 gagne</p>;
        }
    } 
    if (advantage) {
        if (advantage === "player1") {
        return <p className="display">avantage joueur 1</p>
        } else {
            return <p className="display">avantage joueur 2</p>
        }
        }
    if (gameIsPlaying === false) {
        return <p className="display">C'est la pause</p>;
        } else {
    return <p className="display">Le score est: {playerOneScore} - {playertwoScore}</p>
        }
}

export default Display;