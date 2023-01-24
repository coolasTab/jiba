import express from "express";
import Cars from "../models/Cars.js";
import City from "../models/City.js";

const router = express.Router();

//create
router.post("/", async(req, res) => {
    
    const newCar = new Cars(req.body)

    try{
        const savedCars = await newCar.save()
        res.status(200).json(savedCars)
    }catch(err){
        res.status(500).json(err);
    }
});

//update

router.put("/:id", async(req, res) => {

    try{
        const updatedCar = await Cars.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true })
        res.status(200).json(updatedCar)
    }catch(err){
        res.status(500).json(err);
    }
});

//delete

router.delete("/:id", async(req, res) => {

    try{
        await Cars.findByIdAndDelete(
            req.params.id)
        res.status(200).json("car deleted")
    }catch(err){
        res.status(500).json(err);
    }
});


//get

router.get("/:id", async(req, res) => {

    try{
        const car = await Cars.findById(
            req.params.id);
        res.status(200).json(car)
    }catch(err){
        res.status(500).json(err);
    }
});

//get all cars of a location

router.get("/search/:key", async(req, res) => {
    try{
        console.log(req.params.key)
        let cars = await Cars.find(
            {
                "$or":[
                    {userId:{$regex:req.params.key}},
                ]
            }
        )
        res.send(cars);
       }catch(err){
        res.status(500).json(err);
    }
})


export default router;