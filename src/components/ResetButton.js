import { useDispatch } from "react-redux";
import { resetGame } from "../store/gameReducer";
export function ResetButton() {
    const dispatch = useDispatch();
    return (
    <button onClick={()=>dispatch(resetGame())}
    className="button"
    > Remettre à zéro
    </button>
    );
    }
export default  ResetButton;   