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
    <>
    <main className="container">
    <h1>we're launching soon</h1>

      <div className="countdown">
        <section className="countdown_item">
          <div className="countdown_box">
            <span data-attribute={ remainingTime.days} className="top">
            {Number(remainingTime.days) + 1}
            </span>
            <span data-attribute={remainingTime.days} className="bottom">
            {Number(remainingTime.days) + 1}
            </span>
          </div>
          <span className="countdown_label">Days</span>
        </section>
        <section className="countdown_item">
            <div className="countdown_box">
          <span data-attribute={remainingTime.hours} className="top">
          </span>
          <span data-attribute={remainingTime.hours} className="bottom">
            </span>
            </div>
          <span className="countdown_label">Hours</span>
        </section>
        <section className="countdown_item">
        <div className="countdown_box">
          <span data-attribute={remainingTime.minutes} className="top">
          </span>
          <span data-attribute={remainingTime.minutes} className="bottom">
            </span>
          </div>
          <span className="countdown_label">Minutes</span>
        </section>
        <section className="countdown_item">
        <div className="countdown_box">
          <span data-attribute={remainingTime.seconds} className="top">
          </span>
          <span data-attribute={remainingTime.seconds} className="bottom">
            </span>
          </div>
          <span className="countdown_label">Seconds</span>
        </section>
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
    </>
  );
};

export default CountdownTimer;
