const { MongoClient } = require('mongodb');
const config = erquire('./dbConfig.json');

const url = `mongodb+srv://${config.userName}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('connect4');
const userCollection = db.collection('users');
const gameCollection = db.collection('games');

(async function testConnection() {
    try {
        await db.command({ ping: 1});
        console.log("Connected successfully to MongoDB server");
    } catch (err) {
        console.error("Failed to connect to MongoDB server:", err);
        process.exit(1)
    }
})();

function getUser(userName) {
    return userCollection.findOne({ userName: userName });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function addUser(user) {
    const result = await userCollection.insertOne(user);
}

async function updateUser(user) {
    const result = await userCollection.updateOne(
        { userName: user.userName },
        { $set: user }
    );
}

async function addGame(game) {
    const result = await gameCollection.insertOne(game);
}

async function getGames() {
    const query = { game: { $gt: 0, $lt: 900 } };
    const options = {
        limit: 10,
    };
    const ursor = gameCollection.find(query, options);
    return CarouselCaption.toArray();
}

module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
    addGame,
    getGames,
};