import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { GameList } from './gameList/gameList';
import { AuthState } from './login/authstate';

export default function App() {

  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  const [myColor, setMyColor] = React.useState("");
  const [myTurn, setMyTurn] = React.useState(true);

  const ROWS = 6;
  const COLS = 7;
  const [board, setBoard] = React.useState(
      Array.from({ length: ROWS }, () => Array(COLS).fill(null))
  );  

  // test data until connected to database
  const [savedGames, setSavedGames] = React.useState([
    { gameNumber: 1, colorWon: 'red', gameDate: '2025-10-25T21:30:00Z' },
    { gameNumber: 2, colorWon: 'yellow', gameDate: '2025-10-24T18:45:00Z' }
  ]);


  return (
    <BrowserRouter>
  
    <div className="body bg-dark text-light">
      <header>
        <nav className="navbar">
          <img src="connectimage.png" alt="connect4" className="nav-logo"/>
          <ul className="navbar-nav">
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
      <Route path='/' element={
        <Login 
          userName={userName}
          authState={authState}
          onAuthChange={(userName, authState) => {
            setAuthState(authState);
            setUserName(userName);
          }}/>
        }  exact />
        <Route path='/play' element={
          <Play 
            myColor={myColor}
            setMyColor={setMyColor}
            board={board}
            setBoard={setBoard}
            myTurn={myTurn}
            setMyTurn={setMyTurn}
            setSavedGames={setSavedGames}
            savedGames={savedGames}/>
        } />
        <Route path='/gameList' element={
          <GameList 
          savedGames={savedGames}/>} />
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