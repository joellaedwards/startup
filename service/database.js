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
        await db.command({ ping: 1});
        console.log("Connected successfully to MongoDB server");
    } catch (err) {
        console.error("Failed to connect to MongoDB server:", err);
        process.exit(1)
    }
})();

function getUser(userName) {
    console.log("in getUser:", userName);
    return userCollection.findOne({ userName: userName });
}

function getUserByToken(token) {
    console.log("in getUserByToken:", token);
    return userCollection.findOne({ token: token });
}

async function addUser(user) {
    console.log("in addUser:", user.userName);
    await userCollection.insertOne(user);
}

async function updateUser(user) {
    console.log("in updateUser:", user.userName);
    await userCollection.updateOne(
        { userName: user.userName },
        { $set: user }
    );
}

async function addGame(game) {
    console.log("in addGame:", game);
    return gameCollection.insertOne(game);
}

async function getGames() {
    console.log("in getGames");

    const cursor = gameCollection.find();
    gamesArray = await cursor.toArray();
    if (gamesArray.length > 10) {
        gamesArray = gamesArray.slice(gamesArray.length - 10);
    }
    console.log("Found games:");
    console.log(gamesArray);
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