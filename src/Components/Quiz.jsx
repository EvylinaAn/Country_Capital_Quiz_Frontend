import { useState } from "react";
import { useQuiz } from "../Context/QuizContext";

export default function Quiz() {
  const { fetchQuizData, showQuiz, country, correctCapital, shuffledCapitals } =
    useQuiz();

  const [result, setResult] = useState("");

  const handleResponse = (selectedResponse) => {
    if (selectedResponse === correctCapital) {
      setResult("CORRECT!");
    } else {
      setResult(`Wrong! The correct answer is ${correctCapital.toUpperCase()}`);
    }
  };

  const handleNextCountry = () => {
    setResult("");
    fetchQuizData();
  };

  return (
    <div className="mt-10">
      {showQuiz && (
        <>
        <div className="text-center">
          <h2 className="text-2xl font-bold">{country}</h2>
          <ul className="mt-4">
            {shuffledCapitals.map((capital, index) => (
              <li key={index}>
                <button
                  className="btn btn-lg mt-2 w-3/4 "
                  onClick={() => handleResponse(capital)}
                >
                  {capital}
                </button>
              </li>
            ))}
          </ul>
        </div>
      
      {result && (
        <p
          className={`mt-4 text-lg ${
            result.includes("CORRECT!") ? "text-accent" : "text-error"
          }`}
        >
          {result}
        </p>
      )}
      <button
        className="btn btn-primary btn-sm mx-auto mt-10 w-2/4"
        onClick={handleNextCountry}
      >
        Next Country
      </button>
      </>
      )}
    </div>
  );
}
