const mongoose = require ("mongoose")

const organiserSchema = mongoose.Schema(
    {
        organisername:{
            type: String,
            required: true,
        },
        organiserdescription:{
            type: String,
            required: true,
        },
        phonenumber:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        twitter:{
            type: String,
            required: true,
        },
        instagram:{
            type: String,
            required: true,
        },
        facebook:{
            type: String,
            required: true,
        }
    }
)

const Organiser = mongoose.model("Organiser", organiserSchema)

module.exports = Organiser