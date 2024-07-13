import { useEffect } from "react";
import { useQuiz } from "../Context/QuizContext";

export default function StartScreen() {
  const { fetchQuizData, setShowQuiz, country, correctCapital, otherCapitals } = useQuiz();

  useEffect(() => {
    document.getElementById("my_modal_1").showModal();
  }, []);

  const handleStart = async () => {
    await fetchQuizData();
    setShowQuiz(true);
    document.getElementById("my_modal_1").close();
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Welcome to Countries and Capital Brain Teezer Quiz where you will be
            given a country name, your job is to pick the right answer from the
            given options. Press Start when you're ready!
          </p>
          <div className="modal-action justify-center">
            <form method="dialog">
              <button className="btn btn-lg bg-primary text-white" onClick={handleStart}>
                START
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
