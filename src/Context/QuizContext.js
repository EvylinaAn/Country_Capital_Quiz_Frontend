import { useContext, useState, createContext } from "react";
import axios from "axios";

export const QuizContext = createContext();

export function useQuiz() {
  return useContext(QuizContext);
}

export function QuizProvider({ children }) {
  const [country, setCountry] = useState("");
  const [correctCapital, setCorrectCapital] = useState("");
  const [otherCapitals, setOtherCapitals] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [shuffledCapitals, setShuffledCapitals] = useState([]);

  const shuffleCapitals = (correct, others) => {
    const allCapitals = [correct, ...others];
    for (let i = allCapitals.length - 1; i > 0; i--) {
      const randNum = Math.floor(Math.random() * (i + 1));
      [allCapitals[i], allCapitals[randNum]] = [allCapitals[randNum], allCapitals[i]];
    }
    setShuffledCapitals(allCapitals);
  };

  const fetchQuizData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/quiz`
      );
      const result = response.data;
      setCountry(result.randomCountry);
      setCorrectCapital(result.countryCapital);
      setOtherCapitals(result.falseCapitals);
      shuffleCapitals(result.countryCapital, result.falseCapitals);
    } catch (error) {
      console.error("Couldn't fetch Country", error);
    }
  };

  console.log(country, correctCapital, otherCapitals)

  return (
    <QuizContext.Provider
      value={{
        fetchQuizData,
        shuffleCapitals,
        setShowQuiz,
        country,
        correctCapital,
        otherCapitals,
        showQuiz,
        shuffledCapitals,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}


// import { useContext, useState, createContext } from "react";
// import axios from "axios";

// export const QuizContext = createContext();

// export function useQuiz() {
//   return useContext(QuizContext);
// }

// export function QuizProvider({ children }) {
//   const [country, setCountry] = useState("");
//   const [countryCapital, setCountryCapital] = useState();
//   const [otherCapitals, setOtherCapitals] = useState([]);
//   const [showQuiz, setShowQuiz] = useState(false);
//   const [shuffledCapitals, setShuffledCapitals] = useState([]);

//   const shuffleCapitals = (correct, others) => {
//     const allCapitals = [correct, ...others];
//     for (let i = allCapitals.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [allCapitals[i], allCapitals[j]] = [allCapitals[j], allCapitals[i]];
//     }
//     setShuffledCapitals(allCapitals);
//   };

//   const fetchQuizData = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_BACKEND_URL}/quiz`
//       );
//       const result = response.data;
//       setCountry(result.randomCountry);
//       setCountryCapital(result.countryCapital);
//       setOtherCapitals(result.falseCapitals);
//       shuffleCapitals(result.countryCapital, result.otherCapitals);
//       console.log(result);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   console.log(country, countryCapital, otherCapitals)
//   return (
//     <QuizContext.Provider
//       value={{
//         fetchQuizData,
//         shuffleCapitals,
//         setShowQuiz,
//         country,
//         countryCapital,
//         otherCapitals,
//         showQuiz,
//         shuffledCapitals,
//       }}
//     >
//       {children}
//     </QuizContext.Provider>
//   );
// }
