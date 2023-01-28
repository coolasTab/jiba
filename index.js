import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();

import cityRoute from "./routes/city.js";
import carsRoute from "./routes/cars.js";

dotenv.config();

mongoose.set("strictQuery", true);
const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
}catch(err){
    throw error;
}
};

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
});

//middleware

app.use(express.json());

app.use("/api/city", cityRoute);
app.use("/api/cars", carsRoute);

app.listen(process.env.PORT || 8800,() => {
    connect();
    console.log("connected to server");
});