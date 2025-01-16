import React, { useState, useEffect } from 'react';
import '../assets/quiz.css';  
import { countriesData } from '../data';  

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizOver, setQuizOver] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState([]);

  // Function to get 5 random questions
  const getRandomQuestions = () => {
    const shuffled = [...countriesData].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  };

  // Initialize random questions when component mounts
  useEffect(() => {
    const selectedQuestions = getRandomQuestions();
    setRandomQuestions(selectedQuestions);
  }, []);

  const shuffleOptions = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  const getNextQuestion = () => {
    if (questionIndex < 5) {  // Changed from countriesData.length to 5
      const question = randomQuestions[questionIndex];
      setCurrentQuestion({
        ...question,
        options: shuffleOptions(question.options)
      });
    } else {
      setQuizOver(true);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === currentQuestion.currency) {
      setScore(score + 1);
      setFeedback('Correct!');
    } else {
      setFeedback(`Incorrect! The correct answer was ${currentQuestion.currency}`);
    }

    setTimeout(() => {
      setFeedback('');
      setSelectedAnswer(null);
      if (questionIndex + 1 < 5) {  // Changed from countriesData.length to 5
        setQuestionIndex(questionIndex + 1);
      } else {
        setQuizOver(true);  
      }
    }, 2000);
  };

  useEffect(() => {
    if (randomQuestions.length > 0) {
      getNextQuestion();
    }
  }, [questionIndex, randomQuestions]);

  return (
    <div className="quiz-container">
      <h1>Currency Quiz</h1>
      {quizOver ? (
        <>
          <h2>Quiz Over!</h2>
          <p>Your final score is: {score} out of 5</p>  {/* Changed from countriesData.length to 5 */}
        </>
      ) : (
        <>
          {currentQuestion ? (
            <>
              <p>What is the currency of {currentQuestion.country}?</p>
              <div className="options">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    className={selectedAnswer === option ? "selected" : ""}
                    onClick={() => setSelectedAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button className='button' onClick={handleSubmit}>Submit</button>
              <div className="feedback">{feedback}</div>
              <div className="score">Score: {score}</div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </>
      )}
    </div>
  );
}

export default QuizApp;