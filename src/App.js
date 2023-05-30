import './App.css';
import Header from './components/Header';
import Cronometro from './components/Cronometro';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? 'darkMode' : 'lightMode'}>
      <Header />
      <Cronometro />
      <button
        onClick={toggleDarkMode}
      >
        {isDarkMode ? 'Modo Claro' : 'Modo Noturno'}
      </button>

    </div>
  );
}

export default App;
