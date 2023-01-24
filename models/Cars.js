import mongoose from "mongoose";

const CarsSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    carname: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    priceWithAc: {
        type: Number,
        required: true,
    },
    priceWithoutAc: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    maxPeople: {
        type: Number,
        required: true,
    },
    numberofCars: { 
        type: Number,
        required : true
    },
     dates: [],
     nightCharge: {
        type: Number,
        required: true
     },
     dayCharge: {
        type: Number,
        required: true
     }
},{timestamps: true});

export default mongoose.model("cars", CarsSchema);