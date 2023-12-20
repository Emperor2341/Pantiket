const mongoose = require ("mongoose")
const { Schema } = require("mongoose")

const eventSchema = mongoose.Schema(
    {
        Eventname:{
            type: String,
            required: true,
        },
        Eventdescription:{
            type: String,
            required: true,
        },
        Dateandtime:{
            type: String,
            required: true,
        },
        Venue:{
            type: String,
            required: true,
        },
        Price:{
            type: String,
            required: true,
        },
        Caption:{
            type: String,
            required: true,
        },
        Featuredevents:{
            type: Boolean,
            required: true,
        },
        Ticket: [{type: Schema.Types.ObjectId, ref:"Ticket", required: true,}],
        Organiser: {type: Schema.Types.ObjectId, ref:"Organiser", required: true}
    }
)




const Event = mongoose.model("Event", eventSchema)

module.exports = Event