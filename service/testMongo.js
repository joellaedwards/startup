const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('testDb');
const collection = db.collection('house');
// const gameCollection = db.collection('games');

async function main() {
    console.log("in testConnection");
    try {
        await db.command({ ping: 1});
        console.log("Connected successfully to MongoDB server");
    } catch (err) {
        console.error("Failed to connect to MongoDB server:", err);
        process.exit(1)
    }

    try {
        const house = {
        name: 'Beachfront views',
        summary: 'From your bedroom to the beach, no shoes required',
        property_type: 'Condo',
        beds: 1,
        };
        await collection.insertOne(house);

        const query = { property_type: 'Condo', beds: { $lt: 2 } };
        const options = {
        sort: { name: -1 },
        limit: 10,
        };
        const cursor = collection.find(query, options);
        const rentals = await cursor.toArray();
        rentals.forEach((i) => console.log(i));

        await collection.deleteMany(query);
    } catch (err) {
        console.error("Error during operations:", err);
    } finally {
        await client.close();
    }
};

main();