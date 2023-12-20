const TICKET = require("../model/ticket.model")

async function CreateTicket(req, res) {
    try {
        const ticket = new TICKET(req.body)
        await ticket.save()

        res.status(201).json({
            message: "Ticket created successfully",
            ticket,
        })
    } catch (error) {
        console.log(error)
    }
}

async function getTicket(req, res) {
    try {
        const ticket = await TICKET.find({})

        res.status(201).json({
            message: "Tickets gotten successfully",
            ticket,
        })
    } catch (error) {
        console.log(error)
    }
}

async function getTicketid(req, res) {
  const ticket = await TICKET.findById(req.params.id)
    
  if(ticket) {
    res.status(200).json({
      message: "Ticket gotten successfully",
      ticket,
    })
  } else {
    res.status(404).json({
      message: "Ticket not found",
  })
  }
}

async function updateTicket(req, res) {
    const ticket = await TICKET.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    if (user) {
      res.status(200).json({
        messaage: "Ticket updated successfully",
        user,
      });
    } else {
      res.status(404).json({
        message: "Ticket not found",
      });
    }
  }

  async function deleteTicket(req, res) {
    const ticket = await TICKET.findByIdAndDelete(req.params.id);
    if (ticket) {
      res.status(200).json({
        message: "Ticket deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "Ticket not found",
      });
    }
  }
module.exports = { CreateTicket, getTicket, getTicketid, updateTicket, deleteTicket }