import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App({days}) {
  const [selectedDay,setSelectedDay] = useState(1)

  const handleClickNav=(e)=>{
    setSelectedDay(e.target.innerText)
  }

  const NavList = ()=>{
    const navList = []
    for(let i=1;i<=days;i++){
      navList.push(<li><Link onClick={handleClickNav} to={`day${i}`}>{`Day ${i}`}</Link></li>)
    }
    return navList
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>
          Coding React Journal
        </h1>
        <nav className="nav-content">
          <NavList />
        </nav>
      </header>
      <main style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
        <h2>{selectedDay}</h2>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
