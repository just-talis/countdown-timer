import { useEffect, useState } from "react";
import {getRemainingTimeUtils} from './Utils/CountdownTimerUtils'
import "./CountdownTimer.css";

const defaultRemainingTime = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

const CountdownTimer = ({countdownMs}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownMs]);

  function updateRemainingTime(countdown) {
   setRemainingTime(getRemainingTimeUtils(countdown));
  }
  return (
    <main className="countdown">
        <div>
        <span>{remainingTime.days}</span>
      <span>Days</span>
        </div>
    <div>
    <span>{remainingTime.hours}</span>
      <span>Hours</span>
    </div>
     <div>
     <span>{remainingTime.minutes}</span>
      <span>Minutes</span>
     </div>
      <div>
      <span>{remainingTime.seconds}</span>
      <span>Seconds</span>
      </div>
      
    </main>
  );
};

export default CountdownTimer;
