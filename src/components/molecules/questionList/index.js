import React from "react";
import { Button } from "../../atoms";
import "./style.scss";
function QuestionList({
  handleNextClick,
  showAnswer,
  handleAnswerClick,
  data: { question, correct_answer, answers },
}) {
  // const randomAnswers = [correct_answer, ...incorrect_answers].sort(
  //   () => Math.random() - 0.5
  // );
  return (
    <div className="quiz position">
      <div className="question">
        <h2 dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <div className="answer">
        {answers.map((answer, idx) => {
          const bgColor = showAnswer
            ? answer === correct_answer
              ? "green"
              : "red"
            : "white";
          return (
            <Button
              key={idx}
              color={`${bgColor}`}
              btnName={answer}
              onClick={() => handleAnswerClick(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>
      {showAnswer && (
        <button className="next" onClick={handleNextClick}>
          next
        </button>
      )}
    </div>
  );
}

export default QuestionList;
