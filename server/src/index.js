require("dotenv").config();

var data = require("./data");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("../routes/authRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const dbURI = process.env.DBURI;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(3001, () => console.log("connected")))
  .catch((err) => console.log(err));

app.get("/product", (req, res) => {
  res.json(data.products);
});

app.use(authRoutes);
