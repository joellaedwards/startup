import React from 'react';
import './gameList.css';

export function GameList({}) {

  const [games, setGames] = React.useState([]);

    React.useEffect(() => {
    fetch('/api/games')
      .then((response) => response.json())
      .then((games) => {
        setGames(games);
      });
  }, []);

  const gameRows = [];

  if (games.length) {
    for (const [i, game] of games.entries()) {
      gameRows.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{game.colorWon}</td>
          <td>{new Date(game.gameDate).toLocaleString()}</td>
        </tr>
      );
    }
  } else {
    gameRows.push(
      <tr key='0'>
        <td colSpan='3'>No games saved</td>
      </tr>
    );
  }

  return (
  <main>
    <h2>Saved Games</h2>
    <table>
        <thead>
        <tr>
            <th>Game #</th>
            <th>Game Name</th>
            <th>Date</th>
        </tr>
        </thead>
          <tbody id='scores'>{gameRows}</tbody>
      </table>
    </main>
  );
}