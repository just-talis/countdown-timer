import './App.css';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';

function App() {
  return (
    <div className="App">
      <CountdownTimer
      countdownMs={'2023-03-11'}
      />
    </div>
  );
}

export default App;
