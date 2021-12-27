const mongoose = require("mongoose");
express = require("express");
cors = require("cors");
const User = require("./models/userModel");
const app = express();
app.use(cors());
app.use(express.json());

const CONNECTION_URL =
  "mongodb+srv://munkhdorj:munkhdorj123@cluster0.candl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL);

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate Email" });
  }
});

app.post("/api/login", async (req, res) => {
  console.log(req.body);

  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    res.json({ status: "ok", user: true });
  } else {
    res.json({ status: "error", user: false });
  }
});

app.listen(2000, () => {
  console.log("server started on 2000");
});
