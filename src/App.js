import logo from './logo.svg';
import './App.css';
import Congats from './Congats';
import GuessWords from './GuessWords';
import Input from './input_func/Input';
function App() {
  const success=false;
  const secretWord='party';
  const guessedWords=[];
  return (
    <div className="container" data-test="component-App">
      Jotto App
      <Congats success={success}/>
      <Input success={success} secretWord={secretWord} />
    <GuessWords guessedWords={[{guessedWord:'train',letterMatchCount:3}]}/>
    </div>
  );
}

export default App;
