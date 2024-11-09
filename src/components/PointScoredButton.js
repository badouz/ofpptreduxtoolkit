import { useDispatch } from "react-redux";
import { pointScored } from "../store/gameReducer";
function PointScoredButton({ playerId, children }) {
    const dispatch =useDispatch();

    return (
    <button onClick={()=>dispatch(pointScored(playerId))}
    className="button"
    > {children}
    </button>
    );
    }
    
export default PointScoredButton;
