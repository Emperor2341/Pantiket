const express = require("express");
const mongoose = require("mongoose");

const {CreateOrganiser, getOrganiser, getOrganiserid, updateOrganiser, deleteOrganiser } = require("./controller/organiser.controller");
const { CreateTicket, getTicket, getTicketid, updateTicket, deleteTicket } = require("./controller/ticket.controller");
const { CreateEvent, getEvent, getEventid } = require("./controller/event.controller")

const server = express()
const PORT = 1000

server.use(express.json())

server.post("/organiser", CreateOrganiser)

server.get("/organiser", getOrganiser)

server.get("/organiser/:id", getOrganiserid)

server.put("/organiser/:id", updateOrganiser)

server.delete("/organiser/:id", deleteOrganiser)

server.post("/ticket", CreateTicket)

server.get("/ticket", getTicket)

server.get("/ticket/:id", getTicketid)

server.put("/ticket/:id", updateTicket)

server.delete("/ticket/:id", deleteTicket)

server.post("/event", CreateEvent)

server.get("/event", getEvent)

server.get("/event/:id", getEventid)

server.all("*", (req, res) => {
    res.status(404).json({
      message: "Route not found",
    });
  });
  
  async function main() {
    await mongoose.connect("mongodb://localhost:27017/pann");
    console.log("DB connected");
  }
  
  server.listen(PORT, () => {
    main().catch((err) => console.log(err));
    console.log("Server listening on port 1000");
  });
  