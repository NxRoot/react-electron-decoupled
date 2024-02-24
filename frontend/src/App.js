import {useEffect} from "react"
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    window.api.setTitle("Hey bro")
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
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
        </a>
        <br></br>
        <button onClick={()=>window.api.notify("Hey bro")}>Send Notification</button>
      </header>
    </div>
  );
}

export default App;
