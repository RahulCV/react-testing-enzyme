import logo from './logo.svg';
import './App.css';
import Congats from './Congats';
import GuessWords from './GuessWords';
function App() {
  return (
    <div className="App">
      <Congats success={false}/>
    <GuessWords guessedWords={[]}/>
    </div>
  );
}

export default App;
