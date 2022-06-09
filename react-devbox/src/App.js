import { Link, Outlet } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>
          My React Daily Journal
        </h1>
      </header>
      <ol className="nav-content">
        <li>
          <Link to="day1">Day 1</Link>
        </li>
        <li>
          <Link to="day2">Day 2</Link>
        </li>
      </ol>
      <Outlet />
    </div>
  );
}

export default App;
