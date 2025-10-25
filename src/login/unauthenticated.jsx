import React from 'react';

import Button from 'react-bootstrap/Button';
// import { MessageDialog } from './messageDialog';

// React.useState means use what the prop was from last rendering
// so it sets userName using the props.userName from last time

export function Unauthenticated(props) {

    console.log("in unauthenticated.. ")

    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState(''); // dont want to save a password
    const [displayError, setDisplayError] = React.useState(null)
    

    async function loginUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    async function createUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    return (
        <>
            <div>
                <div>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="username"/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
                </div>
                <Button variant="primary" onClick={() => loginUser()} disabled={!userName || !password}>
                    Login
                </Button>
                <Button variant="primary" onClick={() => createUser()} disabled={!userName || !password}>
                    Create
                </Button>
            </div>
            
            
            </>

    )








}