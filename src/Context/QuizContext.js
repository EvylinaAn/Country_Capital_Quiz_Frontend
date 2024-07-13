import { useContext, useState, createContext } from "react";
import axios from "axios"

export const QuizContext = createContext()

export function useQuiz() {
    return useContext(QuizContext)
}

export function QuizProvider({ children }) {


    return(
        <QuizContext.Provider
            value={{

            }}
        >
            {children}
        </QuizContext.Provider>
    )
}