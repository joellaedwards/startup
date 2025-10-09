import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
  
  
  <div className="body bg-dark text-light">App will display here
      <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <ul className="navbar-nav">
                <li className="nav-item me-3"><a className="nav-link" href="index.html">Home</a></li>
                <li className="nav-item me-3"><a className="nav-link" href="play.html">Play</a></li>
                <li className="nav-item me-3"><a className="nav-link" href="gameList.html">Game List</a></li>
            </ul>
        </div>
    </nav>
</header>
  
  <main>App components go here</main>
      <footer>
      <hr />
      <span className="text-reset">Created by Jo Edwards</span>
      <br />
      <a href="https://github.com/joellaedwards/startup">Startup Github</a>
    </footer>
  </div>
);

}