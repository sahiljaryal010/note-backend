const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); 

const app = express();
app.use(cors({
  origin: "https://note-app.netlify.app",
  methods: ["GET", "POST", "DELETE"]
}));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Atlas connected");
    console.log("DB HOST:", mongoose.connection.host);
    console.log("DB NAME:", mongoose.connection.name);
  })
  .catch((err) => console.error(err));

app.use("/note", require("./routes/noteRoutes"));

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

const PORT = process.env.PORT || 3400;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});