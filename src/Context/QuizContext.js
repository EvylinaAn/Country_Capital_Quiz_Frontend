import { useContext, useState, createContext } from "react";
import axios from "axios"

export const QuizContext = createContext()

export function useQuiz() {
    return useContext(QuizContext)
}

export function QuizProvider({ children }) {
    const [country, setCountry] = useState('')
    const [correctCapital, setCorrectCapital] = useState ('')
    const [otherCapitals, setOtherCapitals] = useState([])
    const [showQuiz, setShowQuiz] = useState(false);

    const fetchCountriesData = async() => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BACKEND_URL}/quiz`
            )
            const result = response.data
            setCountry(result.randomCountry)
            setCorrectCapital(result.countryCapital)
            setOtherCapitals(result.falseCapitals)
        } catch (error) {
            console.error("Couldn't fetch Country", error)
        }
    }

    return(
        <QuizContext.Provider
            value={{
                fetchCountriesData,
                country,
                correctCapital,
                otherCapitals,
                showQuiz,
                setShowQuiz,
                
            }}
        >
            {children}
        </QuizContext.Provider>
    )
}