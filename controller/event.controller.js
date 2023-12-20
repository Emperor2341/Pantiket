const Event = require('../model/event.model')

async function CreateEvent(req, res) {
    try {
        const event = new Event(req.body)
        await event.save()
        
        res.status(201).json({
            message: "Event created successfully",
            event,
        })
    } catch (error) {
        console.log(error)
    }
}

async function getEvent(req, res) {
    try {
      const event = await Event.find({})
      
      res.status(201).json({
        message: "Events gotten sucessfully",
        event,
      })
    } catch (error) {
        console.log(error)
    }
}

async function getEventid(req, res) {
    const event = await Event.findById(req.params.id)
    .populate("Ticket")
    .populate("Organiser")
    .exec()
    
    if(event) {
      res.status(200).json({
        message: "Event detials gotten successfully",
        event,
      })
    } else {
      res.status(404).json({
        message: "Event detials not found",
    })
    }
  }
  async function updateEvent(req, res) {
    const event = await EVENT.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    if (event) {
      res.status(200).json({
        messaage: "Event updated successfully",
        user,
      });
    } else {
      res.status(404).json({
        message: "Event not found",
      });
    }
  }
  async function deleteEvent(req, res) {
    const event = await EVENT.findByIdAndDelete(req.params.id);
    if (event) {
      res.status(200).json({
        message: "Event deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "Event not found",
      });
    }
  }
  module.exports = { CreateEvent, getEvent, getEventid, updateEvent, deleteEvent }