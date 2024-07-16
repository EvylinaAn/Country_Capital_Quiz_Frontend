import { useState } from "react";
import { useQuiz } from "../Context/QuizContext";

export default function Quiz() {
  const { fetchQuizData, showQuiz, country, correctCapital, shuffledCapitals } =
    useQuiz();

  const [result, setResult] = useState("");
  const [selected, setSelected] = useState(false)

  const handleResponse = (selectedResponse) => {
    setSelected(true)
    if (selectedResponse === correctCapital) {
      setResult("CORRECT!");
    } else {
      setResult(`Wrong! The correct answer is ${correctCapital.toUpperCase()}`);
    }
  };

  const handleNextCountry = () => {
    setResult("");
    setSelected(false)
    fetchQuizData();
  };

  

  return (
    <div className="mt-10 py-4 w-3/4 mx-auto backdrop-opacity-5">
      {showQuiz && (
        <>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-warning">{country.toUpperCase()}</h2>
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

      {result && (
        <p
          className={`mt-5 text-3xl ${
            result.includes("CORRECT!") ? "text-accent" : "text-error"
          }`}
        >
          {result}
        </p>
      )}
      </>
      )}
    </div>
  );
}
