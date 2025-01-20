// Import the express module
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"; // Import mongoose here
import { db } from "./db/db.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const port = process.env.PORT || 5000;

// Load environment variables from .env file
dotenv.config();

// Connect to the database
db();

// Test database connection
const testDbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected successfully to MongoDB!");
    //  mongoose.connection.close(); // Close connection after test
  } catch (error) {
    console.error(`Connection error: ${error.message}`);
  }
};

// Call the test function to check the database connection
testDbConnection();

// Create an instance of an Express application
const app = express();
// console.log(process.env.MONGO_URI);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS for requests only from http://localhost:5173
app.use(cors({
  origin: 'http://localhost:5173', // Allow only this origin
}));

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send(`<h1>WELCOME TO INventory Managment System </h1>`);
});

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

// Set the server to listen on port 5000
app.listen(port, () => {
  console.log(`Dev app listening on port ${port}!`);
});
