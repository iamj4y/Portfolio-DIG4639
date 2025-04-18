import "./App.css";
import { Link } from "react-router-dom";
import Home from "./Home";

export function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <h1 className="logo"> jason phan</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/Projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export function Footer() {
  return (
  <footer className="footer d-flex justify-content-center align-items-center text-center py-4 mt-auto">
      <p>Jason Phan 2025</p>
  </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
