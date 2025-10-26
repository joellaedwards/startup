import React from 'react';
import './gameList.css';

export function GameList({savedGames}) {
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
          <tbody>
            {savedGames.map(game => (
              <tr key={game.gameNumber}>
                <td>{game.gameNumber}</td>
                <td>{game.colorWon}</td>
                <td>{new Date(game.gameDate).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
      </table>
    </main>
  );
}