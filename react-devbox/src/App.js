import { Link, Outlet } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App({days}) {
  const NavList = ()=>{
    const navList = []
    for(let i=1;i<=days;i++){
      navList.push(<li><Link to={`day${i}`}>{`Day ${i}`}</Link></li>)
    }
    return navList
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>
          My React Daily Journal
        </h1>
      </header>
      <ol className="nav-content">
        <NavList />
      </ol>
      <div style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
