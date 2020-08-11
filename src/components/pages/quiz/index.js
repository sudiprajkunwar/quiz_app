import React, { useEffect, useState } from "react";
import "./style.scss";
import QuestionList from "../../molecules/questionList";
import { Score } from "../../molecules";

const URL =
  "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  // const [end, setEnd] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(questions);
      });
  }, []);

  const handleNextClick = () => {
    setShowAnswer(false);
    setCurrentIndex(currentIndex + 1);
  };
  const handleAnswerClick = (answer) => {
    if (!showAnswer) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }

    setShowAnswer(true);
  };

  return questions.length > 0 ? (
    currentIndex >= questions.length ? (
      <Score score={score} />
    ) : (
      <QuestionList
        handleNextClick={handleNextClick}
        showAnswer={showAnswer}
        data={questions[currentIndex]}
        handleAnswerClick={handleAnswerClick}
      />
    )
  ) : (
    <h2 className="loading position">loading</h2>
  );
}

export default Quiz;
