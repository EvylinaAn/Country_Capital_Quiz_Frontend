import StartScreen from './Components/StartScreen'
import Quiz from './Components/Quiz'
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [country, setCountry] = useState('')
  const [correctCapital, setCorrectCapital] = useState ('')
  const [otherCapitals, setOtherCapitals] = useState([])

  const fetchCountriesData = async() => {
      try {
          const response = await axios.get(
              `${process.env.REACT_APP_BACKEND_URL}/quiz`
          )
          const result = response.data
          console.log(result)
          setCountry(result.randomCountry)
          setCorrectCapital(result.countryCapital)
          setOtherCapitals(result.falseCapitals)
      } catch (error) {
          console.error("Couldn't fetch Country", error)
      }
  }

  useEffect(() => {
    fetchCountriesData()
  },[])

  return (
    <div className="App">
      <header className="bg-white h-3/6">
        <h1 class ='py-6 text-7xl text-black'>Capital Conqueror</h1>
      </header>
      <StartScreen />
      <Quiz />
    </div>
  );
}

export default App;
