import StartScreen from './Components/StartScreen'
import Quiz from './Components/Quiz'
import './App.css';

function App() {  
  return (
    <div className="App overflow-hidden">
      <header className="bg-primary h-3/6">
        <h1 className ='py-6 text-5xl text-white font-serif'>Capital Conqueror</h1>
      </header>
      <StartScreen />
      <Quiz />
    </div>
  );
}

export default App;
