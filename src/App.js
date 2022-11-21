import './App.css';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';

function App() {
  return (
    <div className="App">
      <CountdownTimer
      countdownMs={1693526400}
      />
    </div>
  );
}

export default App;
