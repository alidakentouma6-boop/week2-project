const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

let events = [
  { id: 1, title: "Coding Night", date: "2026-11-20" },
  { id: 2, title: "Career Talk", date: "2026-11-27" }
];
app.get("/api/events", (req, res) => {
  res.json(events);
});
app.get("/api/events/:id", (req, res) => {
  const id = Number(req.params.id);
  const event = events.find(e => e.id === id);
  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }
  res.json(event);
});
app.post("/api/events", (req, res) => {
  const { title, date } = req.body;
  if (!title || !date) {
    return res.status(400)
      .json({ error: "title and date are required" });
  }
  const event = { id: Date.now(), title, date };
  events.push(event);
  res.status(201).json(event);
});
app.put("/api/events/:id", (req, res) => {
  const event = events.find(e => e.id === Number(req.params.id));
  if (!event)
    return res.status(404).json({ error: "Event not found" });
  event.title = req.body.title ?? event.title;
  event.date = req.body.date ?? event.date;
  res.json(event);
});
app.delete("/api/events/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!events.some(e => e.id === id))
    return res.status(404).json({ error: "Event not found" });
  events = events.filter(e => e.id !== id);
  res.status(204).end();
});
app.listen(3000, () =>
  console.log("Server on http://localhost:3000"));