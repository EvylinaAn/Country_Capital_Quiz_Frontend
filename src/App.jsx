import StartScreen from './Components/StartScreen'
import Quiz from './Components/Quiz'
import './App.css';

function App() {
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
