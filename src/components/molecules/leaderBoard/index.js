import React from "react";
import { Button } from "../../atoms";
import "./style.scss";
function LeaderBoard() {
  // usename start
  let myData = localStorage.getItem("userData");
  myData = JSON.parse(myData);
  // end

  // recent use score
  const recentScore = localStorage.getItem("recent_score");
  //end

  // highscore
  const highScore = JSON.parse(localStorage.getItem("highScore")) || [];
  console.log(highScore);
  // end

  //   function handleBoard() {
  const score = {
    score: recentScore,
    name: myData.name,
  };
  highScore.push(score);
  highScore.sort((a, b) => b.score - a.score);
  highScore.splice(5);
  console.log(highScore);

  localStorage.setItem("highScores", JSON.stringify(highScore));

  return (
    <>
      <Button
        btnName="leaderboard"
        //   onClick={handleBoard}
      />
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
          </tr>
        </tbody>
      </table>{" "}
    </>
  );
}

export default LeaderBoard;
