import { useEffect, useState } from "react";
import { useQuiz } from "../Context/QuizContext";

export default function StartScreen() {
  const { fetchQuizData, setShowQuiz } = useQuiz();
  const [ isOpen, setIsOpen ] = useState(true)

  const handleStart = async () => {
    await fetchQuizData();
    setShowQuiz(true);
    setIsOpen(false)
  };

  return (
    <div>
     {isOpen && ( 
     <dialog open className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Welcome to <b className="text-primary">Capital Conqueror</b>! Get
            ready to embark on a thrilling adventure across the globe. Your
            mission: Match each country to its rightful capital from the choices
            given. When you’re ready to test your global savvy and conquer the
            world of capitals, hit that Start button and let the challenge
            begin!
          </p>
          <div className="modal-action justify-center">
            <form method="dialog">
              <button
                className="btn btn-lg bg-primary text-white"
                onClick={handleStart}
              >
                START
              </button>
            </form>
          </div>
        </div>
      </dialog>
     )} 
    </div>
  );
}
