import { useDispatch } from "react-redux";
import { playPause } from "../store/gameReducer";
export function PlayPauseButton() {
    const dispatch = useDispatch();
    return (
    <button onClick={()=> dispatch(playPause())} className="button"  > Pause / Reprendre </button>
    );
    }
    export default PlayPauseButton;