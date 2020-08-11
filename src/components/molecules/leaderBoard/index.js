import React from "react";
import { Button } from "../../atoms";
import "./style.scss";
function LeaderBoard() {
  // usename start
  const admin = JSON.parse(localStorage.getItem("admin"));
  // end

  // recent use score
  const recentScore = localStorage.getItem("recent_score");
  //end

  // highscore
  let highScore = JSON.parse(localStorage.getItem("highScores")) || [];
  console.log(highScore);
  // end

  //   function handleBoard() {
  const score = {
    score: recentScore,
    name: admin,
  };

  highScore.push(score);
  highScore.sort((a, b) => b.score - a.score);
  highScore.splice(10);

  localStorage.setItem("highScores", JSON.stringify(highScore));
  console.log(highScore);
  const board = highScore.map((score, idx) => {
    console.log(score.score);
    // });
    return (
      <>
        <tr key={idx}>
          <td></td>
          <td>{score.name}</td>
          <td>{score.score}</td>
        </tr>
      </>
    );
  });

  const leader = "leader";
  return (
    <>
      <Button btnName="leaderboard" color={leader} />
      <table>
        <tbody>
          <tr>
            <th>SN.</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
          {board}
        </tbody>
      </table>{" "}
    </>
  );
}

export default LeaderBoard;
