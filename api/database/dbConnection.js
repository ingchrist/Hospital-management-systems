import mongoose from "mongoose";
import express from "express";

// Initializing Express app
const app = express();

export const dbConnection = async () => { // Using async/await for cleaner error handling
  try {
    await mongoose.connect("mongodb+srv://ingchrist:AZERTYUbibles12@hospitaldb.khppm08.mongodb.net/", {
      dbName: "hospitaldb",
    });
    console.log("Connected to database!");

    // Listen to requests only after successful connection
    app.listen(4000, "localhost", () => console.log("Listening to port 4000"));
  } catch (err) {
    console.error(err); // Use console.error for error messages
  }
};

