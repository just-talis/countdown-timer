import './App.css';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';

function App() {
  return (
    <div className="App">
      <CountdownTimer
      countdownMs={'2022-12-10'}
      />
    </div>
  );
}

export default App;
