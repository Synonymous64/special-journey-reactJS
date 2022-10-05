const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());
//! Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/note"));
// app.get("/", (req, res) => {
//   res.send("Hello Prajwal!");
// });

app.listen(port, () => {
  console.log(`iNotebook app backend listening on port ${port}`);
});
