const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const { nanoid } = require('nanoid');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js')

const authCookieName = 'token';

let users = [];
let games = [];


const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('./public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async(req, res) => {
    if (await findUser('username', req.body.username)) {
        res.status(409).send({msg: 'Existing user'});
    } else {
        const user = await createUser(req.body.username, req.body.password);

        setAuthCookie(res, user.token);
        res.send({ username: user.username });
    }
});

apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUser('username', req.body.username);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            user.token = uuid.v4();
            await DB.updateUser(user);
            setAuthCookie(res, user.token);
            res.send({username: user.username});
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized'});
});

apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
        await DB.updateUser(user);
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

// TODO put this back in and make it work somehow
const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({msg: 'Unauthorized'});
    }
};

apiRouter.post('/new-game', async (_req, res) => {
    console.log("calling new-game")
    const id = nanoid(10);
    console.log("uuid here: ", id)
    res.json({ gameId: id });
})

apiRouter.get('/games', verifyAuth, async (_req, res) => {
    const games = await DB.getGames();
    console.log("games retrieved!!!!", games);
    res.send(games)
})

apiRouter.post('/game', (req, res) => {
    games = addGame(req.body);
    res.send(games);
});

apiRouter.get('/mathfact', async (_req, res) => {
    try {
        const response = await fetch(`https://dogapi.dog/api/v2/facts`, {
            method: 'GET'
        });
        if (!response.ok) {
            return res.status(500).send({ msg: "Error calling Math Tools API" });
        }

        const data = await response.json()
        fact = data.data[0].attributes.body

        res.send({ fact });
    } catch (err) {
        res.status(500).send({ msg: "Failed to fetch math fact" })
    }
    
})

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
// ^^ for deploying 

//   for local testing     
//   res.sendFile('index.html', { root: '../' });
});

async function addGame(newGame) {
    await DB.addGame(newGame);
    return await DB.getGames();
}


async function findUser(field, value) {
    if (!value) return null;
    if  (field === 'token') {
        return DB.getUserByToken(value);
    }
    return DB.getUser(value);
}

async function createUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        username: username,
        password: passwordHash,
        token: uuid.v4(),
    };
    await DB.addUser(user);

    return user;
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

peerProxy(httpService);



// const express = require('express');
// const { peerProxy } = require('./peerProxy');

// const app = express();
// const port = 4000;

// // Simple HTTP route so server is alive
// app.get('/', (_req, res) => res.send('Hello World!'));

// const server = app.listen(port, () => console.log(`HTTP server running on http://localhost:${port}`));

// // Attach WebSocket server
// peerProxy(server);
