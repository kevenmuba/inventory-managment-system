import mongoose from "mongoose";

export const db = async () => {
  try {
    const link =
      process.env.MONGO_URI || "mongodb://localhost:27017/udemy-inventory";

    // console.log(`Db connected Succesfuly ${link.connection.host}`);
    console.log("mongodb connected with udemy inventory database");
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};
