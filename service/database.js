const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
// const db = client.db('connect4');
// const userCollection = db.collection('users');
// const gameCollection = db.collection('games');

let db, userCollection, gameCollection;

(async function testConnection() {
    console.log("in testConnection");
    try {
        await client.connect();
        db = client.db('connect4');
        userCollection = db.collection('users');
        gameCollection = db.collection('games');
        await db.command({ ping: 1 });
        console.log("Connected successfully to MongoDB server");
    } catch (err) {
        console.error("Failed to connect to MongoDB server:", err);
        process.exit(1)
    }
})();

async function getUser(userName) {
    let retUser = await userCollection.findOne({ username: userName });
    return retUser
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function addUser(user) {
    await userCollection.insertOne(user);
}

async function updateUser(user) {
    const { _id, ...rest } = user;
    await userCollection.updateOne(
        { userName: user.userName },
        { $set: rest }
    );
}

async function addGame(game) {
    return gameCollection.insertOne(game);
}

async function getGames() {
    gamesArray = await cursor.toArray();
    if (gamesArray.length > 10) {
        gamesArray = gamesArray.slice(gamesArray.length - 10);
    }
    return gamesArray;
}

module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
    addGame,
    getGames,
};