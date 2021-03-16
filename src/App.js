import logo from './logo.svg';
import './App.css';
import Congats from './Congats';
import GuessWords from './GuessWords';
function App() {
  return (
    <div className="container">
      Jotto App
      <Congats success={true}/>
    <GuessWords guessedWords={[{guessedWord:'train',letterMatchCount:3}]}/>
    </div>
  );
}

export default App;
