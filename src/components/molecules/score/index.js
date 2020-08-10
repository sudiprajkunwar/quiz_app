import React from "react";
import { Button } from "../../atoms";
import { Link } from "react-router-dom";
import LeaderBoard from "../leaderBoard";

function Score({ score }) {
  function handleStart() {
    window.location.reload(true);
  }

  // save score
  localStorage.setItem("recent_score", score);

  return (
    <div className="position">
      <h2 className="score">Your score is {score}</h2>
      <Button btnName="Restart Quiz" onClick={handleStart} />
      <Link to="/welcome">
        <Button btnName="Home" />
      </Link>
      <LeaderBoard />
    </div>
  );
}

export default Score;
