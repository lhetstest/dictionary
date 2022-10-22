import './App.css';
import Dictionary from "./components/Dictionary";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">
          Hello, this is Dictionary Application.
        </header>
        <main className="App-main">
          <Dictionary defaultKeyword="sunrise"/>
        </main>
        <footer className="App-footer">
          Coded by <a className="App-link" href="https://github.com/lhetstest/dictionary">LHEST</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
