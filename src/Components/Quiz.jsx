import { useState } from "react";
import { useQuiz } from "../Context/QuizContext";

export default function Quiz() {
  const { fetchQuizData, showQuiz, country, correctCapital, shuffledCapitals } =
    useQuiz();

  // Added a new state variable here to track if answer is correct 
  const [isCorrect, setIsCorrect] = useState('')
  // track if user has made a choice and disable button if true
  const [selected, setSelected] = useState(false);


  const handleResponse = (selectedResponse) => {
    setIsCorrect(correctCapital === selectedResponse)
    setSelected(true);
  };

  const handleNextCountry = () => {
    setIsCorrect('')
    setSelected(false);
    fetchQuizData();
  };

  return (
    <div className="mt-10 py-4 w-3/4 mx-auto backdrop-opacity-5">
      {showQuiz && (
        <>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-warning">
              {country.toUpperCase()}
            </h2>
            <ul className="mt-4">
              {shuffledCapitals.map((capital, index) => (
                <li key={index}>
                  <button
                    className="btn btn-lg mt-2 w-3/4 bg-secondary text-white"
                    onClick={() => handleResponse(capital)}
                    disabled={selected}
                  >
                    {capital}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="btn btn-md mx-auto mt-5 w-2/4 bg-primary text-white"
            onClick={handleNextCountry}
          >
            Next Country
          </button>

          {selected && (
            <p className={`mt-5 text-3xl ${isCorrect ? "text-accent" : "text-error"}`}>
              {isCorrect ? 'Congrats, that is correct!' : `Wrong! The correct answer is ${correctCapital.toUpperCase()}`}
            </p>
          )}
        </>
      )}
    </div>
  );
}
