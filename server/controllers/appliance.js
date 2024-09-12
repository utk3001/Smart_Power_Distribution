
const Appliance = require("../models/appliance.js");

const add = async (req, res) => {
    try {
        const {
            name,
            powerRating,
            numberOfAppliances,
            typeOfAppliance,
            iconName
        } = req.body;
        const ifExist = await Appliance.findOne({ name: name })
        if (ifExist) {
            throw new Error("Appliance already added")
        }
        const newAppliance = await Appliance.create({
            name: name,
            powerRating: powerRating,
            numberOfAppliances: numberOfAppliances,
            typeOfAppliance: typeOfAppliance,
            iconName: iconName
        })
        const savedAppliance = await newAppliance.save();
        res.status(201).json(savedAppliance);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const edit = async (req, res) => {
    try {
        const {
            name,
            powerRating,
            numberOfAppliances,
            typeOfAppliance
        } = req.body;
        const appliance = await Appliance.findOneAndUpdate({ name: name }, req.body, { new: true });
        if (!appliance) {
            throw new Error("Appliance not added");
        } else {
            res.status(200).json(appliance);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getAll = async (req, res) => {
    try {
        Appliance.find({}).then((data) => {
            res.send({ status: "200", data: data })
        });
    } catch (error) {
        res.json(404);
    }
}

module.exports = {
    add,
    edit,
    getAll
}

// const path = require("path");
// var fs = require('fs');
// fs.readFileSync
// const iconName = req.file.filename;