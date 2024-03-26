const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const adminRoute = require("./routes/adminRoutes");
const bodyParser = require("body-parser");
const connectDB = require("./db/db");
const cookieParser = require("cookie-parser");

connectDB();
dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true,
  }),
);
app.use(bodyParser.json());
app.use(cookieParser());

const port = process.env.PORT || 8080;

app.use("/api", adminRoute);

app.listen(port, () => {
  console.log(`Running on PORT ${port}`);
});
