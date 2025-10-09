import React from 'react';

export function Login() {
  return (
    <main>
      <h1>Welcome to Just4Fun!</h1>
      <form method="get" action="play.html">
        <div>
          <input type="text" placeholder="username"/>
        </div>
        <div>
          <input type="password" placeholder="password"/>
        </div>
        <button type="submit">Login</button>
        <button type="submit">Create Account</button>
      </form>
    </main>
  );
}