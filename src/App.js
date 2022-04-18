
import './App.css';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <h1 className='text-3xl font-bolde underline'> BIENVENIDOS</h1>
        {/* todo lo que esta dentro del header se puede eliminar y trabajar dentro 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
    </div>
  );
}

export default App;
