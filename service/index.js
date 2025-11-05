const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

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

apiRouter.get('/games', verifyAuth, (_req, res) => {
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
});

function addGame(newGame) {
    games.push(newGame);
    if (games.length > 10) {
        games.length = 10;
    }
    return games;
}


async function findUser(field, value) {
    if (!value) return null;
    return users.find((u) => u[field] === value);
}

async function createUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        username: username,
        password: passwordHash,
        token: uuid.v4(),
    };
    users.push(user);

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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
