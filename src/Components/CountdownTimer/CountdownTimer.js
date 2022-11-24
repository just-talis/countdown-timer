import { useEffect, useState } from "react";
import { getRemainingTimeUtils } from "./Utils/CountdownTimerUtils";
import "./CountdownTimer.css";
import FbIcon from '../../images/icon-facebook.svg'
import PiIcon from '../../images/icon-pinterest.svg'
import IgIcon from '../../images/icon-instagram.svg'

const defaultRemainingTime = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

const CountdownTimer = ({ countdownMs }) => {
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
    <main className="container">
      <div className="stars"></div>
      <div className="hills"></div>
      <h1>we're launching soon</h1>
      <div className="countdown">
        <div>
          <p id="days">{remainingTime.days}</p>
          <span>Days</span>
        </div>
        <div>
          <p id="hours">{remainingTime.hours}</p>
          <span>Hours</span>
        </div>
        <div>
          <p id="minutes">{remainingTime.minutes}</p>
          <span>Minutes</span>
        </div>
        <div>
          <p id="seconds">{remainingTime.seconds}</p>
          <span>Seconds</span>
        </div>
      </div>

      <div className="socials">
        <ul>
          <li>
            <img src={FbIcon} alt=""></img>
          </li>
          <li>
            <img src={PiIcon} alt=""></img>
          </li>
          <li>
            <img src={IgIcon} alt=""></img>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default CountdownTimer;
