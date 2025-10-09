import React from 'react';
import './gameList.css';

export function GameList() {
  return (
  <main>
    <h2>Previous Games</h2>
    <table>
        <thead>
        <tr>
            <th>Game #</th>
            <th>Game Name</th>
            <th>Date</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>My Game</td>
            <td>September 17, 2025</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Great Game</td>
            <td>August 3, 2021</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Fav Game</td>
            <td>July 3, 2020</td>
        </tr>
        </tbody>
      </table>
    </main>
  );
}