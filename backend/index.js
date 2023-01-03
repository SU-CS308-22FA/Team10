const bodyParser = require('body-parser')
require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const playerRoutes = require("./routes/player");

const verifyRoutes = require("./routes/verifyRequest");

const matchRoutes = require("./routes/match");
const path = require('path');
const refereeRoutes = require("./routes/referee");

const driveRoutes = require("./routes/drive")


// database connection
connection();

// middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/player", playerRoutes);
app.use("/api/match", matchRoutes);

app.use("/api/verify", verifyRoutes);

app.use("/api/match", matchRoutes);
app.use("/api/drive", driveRoutes);

app.use("/api/referee", refereeRoutes);



const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });
}
