import logo from './logo.svg';
import './App.css';
import { Micomponente } from './components/Micomponente';

function App() {
  
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear()
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Micomponente year={currentYear}/>
      </header>
    </div>
  );
}

export default App;
