const express = require("express");
const cors = require("cors");
const path = require("path");
const analyzeRoutes = require("./routes/analyzeRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// mounting route
app.use("/analyze", analyzeRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
