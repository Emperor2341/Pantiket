const mongoose = require ("mongoose")

const ticketSchema = mongoose.Schema (
    {
        ticket: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        quantity: {
            type: String,
            required: true,
        }
    },
)

const TICKET = mongoose.model("Ticket", ticketSchema)

module.exports = TICKET