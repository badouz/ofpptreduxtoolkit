
import './App.css';
import Display from './components/Display';
import PointScoredButton from './components/PointScoredButton';
import PlayPauseButton from './components/PlayPauseButton';
import ResetButton from './components/ResetButton';
function App() {
  return (
    <div>
      <Display />
      <div className="buttons-row">
        <PointScoredButton playerId="player1">Point Joueur  1</PointScoredButton>
        <PointScoredButton playerId="player2">Point Joueur  2</PointScoredButton>
      </div>
      <div className="buttons-row">
        <ResetButton />
        <PlayPauseButton />
      </div>
    </div>
  );
}

export default App;
