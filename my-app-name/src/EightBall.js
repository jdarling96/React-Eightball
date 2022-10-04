import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const getRand = () => {
    const answer = Math.floor(Math.random() * answers.length);
    return answers[answer];
  };
  const changeBall = () => {
    const { msg, color } = getRand();

    if (color === "green") {
      currGreenCount(countGreen + 1);
    } else if (color === "red") {
      currRedCount(countRed + 1);
    } else {
      currGoldenCount(countGolden + 1);
    }

    setColor(color);
    setMsg(msg);
  };
  const reset = () => {
    setColor("black");
    setMsg("Without a doubt.");
  };

  const [currColor, setColor] = useState("Black");
  const [currMsg, setMsg] = useState("Without a doubt.");
  const [countGreen, currGreenCount] = useState(0);
  const [countRed, currRedCount] = useState(0);
  const [countGolden, currGoldenCount] = useState(0);

  return (
    <div className="eightBallParent">
      <div
        className="eightBallCircle"
        onClick={changeBall}
        style={{ backgroundColor: currColor }}
      >
        <p className="eightBallMsg">{currMsg}</p>
      </div>
      <button className="resetButton" onClick={reset}>
        Reset
      </button>
      <div>
        <p>Green: {countGreen}</p>

        <p>Red: {countRed}</p>

        <p>Golden: {countGolden}</p>
      </div>
    </div>
  );
};

export default EightBall;
