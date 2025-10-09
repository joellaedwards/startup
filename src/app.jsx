import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { GameList } from './gameList/gameList';

export default function App() {
  return (
  
    <BrowserRouter>
  
  <div className="body bg-dark text-light">
        <header>
            <nav class="navbar">
                <img src="connectimage.png" alt="connect4" class="nav-logo"/>
                <ul class="navbar-nav">
                    <li className="nav-item me-3">
                        <NavLink className="nav-link" to="">Home</NavLink>
                    </li>
                    <li className="nav-item me-3">
                        <NavLink className="nav-link" to="play">Play</NavLink>
                    </li>
                    <li className="nav-item me-3">
                        <NavLink className="nav-link" to="gameList">Game List</NavLink>
                    </li>
                </ul>
            </nav>
        </header>

  
<Routes>
  <Route path='/' element={<Login />} exact />
  <Route path='/play' element={<Play />} />
  <Route path='/gameList' element={<GameList />} />
  <Route path='*' element={<NotFound />} />
</Routes>

      <footer>
      <hr />
      <span className="text-reset">Created by Jo'ella Edwards</span>
      <br />
      <a href="https://github.com/joellaedwards/startup">Startup Github</a>
    </footer>
  </div>
  </BrowserRouter>
);

}


function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}