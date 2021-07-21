import { MongoClient } from "mongodb";

let client;

export const initializeDbConnection = async () => {
  try {
    client = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch {
    console.error();
  }
};

export const getDbConnection = (dbName) => {
  const db = client.db(dbName);
  return db;
};
