const Organiser = require("../model/organiser.model")

//create new organiser
async function CreateOrganiser(req, res) {
    try {
        const organiser = new Organiser(req.body)

        await organiser.save()

        res.status(201).json({
            message: " Organiser created successfully",
            organiser: organiser,
        })
    } catch (error) {
        console.log(error)
    }
}

async function getOrganiser(req, res) {
    try {
        const organiser = await Organiser.find({})

        res.status(201).json({
            message: "Organiser detials gotten successfully",
            organiser: organiser,
        })
    } catch (error) {
        console.log(error)
    }
}

async function getOrganiserid(req, res) {
        const organiser = await Organiser.findById(req.params.id)
         
        if(organiser) {
            res.status(200).json({
                message: "Organiser detials retrieved all successfully",
                organiser: organiser,
            });
        } else {
            res.status(404).json({
                message: "organiser detials not found",
            });
        }
}

async function updateOrganiser(req, res) {
    const organiser = await Organiser.findByIdAndUpdate(req.params.id, {
        returnDocument: "after",
    })
    if (organiser) {
        res.status(200).json({
            message: "Organiser detials updated successfully",
            organiser: organiser,
        })
    } else {
        res.status(404).json({
            message: "Organiser detials not found",
        })
    }
}

async function deleteOrganiser(req, res) {
    const organiser = await Organiser.findByIdAndDelete(req.params.id)
    if (organiser) {
        res.status(200).json({
            message: "Organiser detials deleted successfully",
        })
    } else {
        res.status(404).json({
            message: "Organiser detials not found",
        })
    }
} 
module.exports = { CreateOrganiser, getOrganiser, getOrganiserid, updateOrganiser, deleteOrganiser }