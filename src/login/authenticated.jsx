import React from 'react';
import {useNavigate} from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Authenticated(props) {
    const navigate = useNavigate();

    function logout() {
      fetch(`api/auth/logout`, {
        method: 'delete',
      })
        .catch(() => {
          // Logout failed. Assuming offline
        })
        .finally(() => {
          localStorage.removeItem('userName');
          props.onLogout();
        });
    }

    async function createNewGame() {
      console.log("creating new game!")

      const res = await fetch('api/new-game', { method: 'POST' });
      const data = await res.json();
      console.log("id in createNewGame: " + data.gameId)

      navigate(`/play/${data.gameId}`);
    }

  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <Button variant='primary' onClick={() => createNewGame()}>
        Play
      </Button>
      <Button variant='primary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );


}