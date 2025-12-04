import React from 'react';
import Button from 'react-bootstrap/Button';


export function Unauthenticated(props) {

    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null)

    async function loginUser() {
        const result = await loginOrCreate(`/api/auth/login`)
        if (result === "Wrong username or password.") {
            console.log("setting display error")
            setDisplayError(result)
        } else {
            setDisplayError(null)
        }
    }

    async function createUser() {
        loginOrCreate(`/api/auth/create`)
    }



    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify({ username: userName, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (response?.status === 200) {
            localStorage.setItem('userName', userName);
            props.onLogin(userName);
        } else {
            const body = await response.json();
            return "Wrong username or password."
        }
    }



    return (
        <>
            <div>
                <div>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="username" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                </div>
                <Button variant="primary" onClick={() => loginUser()} disabled={!userName || !password}>
                    Login
                </Button>
                <Button variant="primary" onClick={() => createUser()} disabled={!userName || !password}>
                    Create
                </Button>
                {displayError && (<div style={{ color: 'red', marginTop: '10px' }}>{displayError}</div>)}
            </div>
        </>
    )

}