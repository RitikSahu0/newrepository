import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Benifits of using React...</h1>

          <ol>
            <li> component based Architecture </li>
            <li>virtual Dom for effective updates  </li>
            <li>Rich ecosystem andcommunity</li>
            <li>Cross platform development</li>
            <li>Strong community support</li>

          </ol>

        </div>
        <button>Get Started</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >


        </a>
      </header>
    </div>
  );
}

export default App;
