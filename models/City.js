import mongoose from "mongoose";

const CitySchema = new mongoose.Schema({
    cityname: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
},{timestamps: true});

export default mongoose.model("city", CitySchema);