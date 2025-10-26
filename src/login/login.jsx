import React from 'react';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated'
import { AuthState } from './authstate';


export function Login({ userName, authState, onAuthChange }) {

  return (
    <main>
        <div>
          {authState !== AuthState.Unknown && <h1>Welcome to Just4Fun!</h1>} 
          {authState === AuthState.Authenticated && (
            <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
          )}
          {authState === AuthState.Unauthenticated && (
            <Unauthenticated
              userName={userName}
              onLogin={(loginUserName) => {
                onAuthChange(loginUserName, AuthState.Authenticated)
              }}
              />
          )}
        </div>
      </main>
  )
}



