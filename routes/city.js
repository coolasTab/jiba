import express from "express";
import City from "../models/City.js";

const router = express.Router();

//create
router.post("/", async(req, res, next) => {
    
    const newCity = new City(req.body)

    try{
        const savedCity = await newCity.save()
        res.status(200).json(savedCity)
    }catch(err){
        res.status(500).json(err);
    }
});

//update

router.put("/:id", async(req, res) => {

    try{
        const updatedCity = await City.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true })
        res.status(200).json(updatedCity)
    }catch(err){
        res.status(500).json(err);
    }
});

//delete

router.delete("/:id", async(req, res) => {

    try{
        await City.findByIdAndDelete(
            req.params.id)
        res.status(200).json("city deleted")
    }catch(err){
        res.status(500).json(err);
    }
});


//get

router.get("/:id", async(req, res) => {

    try{
        const city = await City.findById(
            req.params.id);
        res.status(200).json(city)
    }catch(err){
        res.status(500).json(err);
    }
});

//get all

router.get("/", async(req, res) => {

    try{
        const cities = await City.find(
            req.params.id);
        res.status(200).json(cities)
    }catch(err){
        res.status(500).json(err);
    }
});


export default router;