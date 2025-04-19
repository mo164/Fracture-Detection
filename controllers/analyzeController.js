const axios = require("axios");
const fs = require("fs");

const ROBOFLOW_API_KEY = "R8o1uR0Vs0jSrR2cFtok";
const MODEL_URL = `https://detect.roboflow.com/bone-fracture-7fylg/1?api_key=${ROBOFLOW_API_KEY}`;

exports.analyzeImage = async (req, res) => {
  try {
    // Read the image file and convert to base64
    const base64Image = fs.readFileSync(req.file.path, { encoding: "base64" });

    // Send to Roboflow API
    const response = await axios.post(MODEL_URL, base64Image, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    // Delete temp file
    fs.unlinkSync(req.file.path);

    // Send back the response
    res.json(response.data);
    console.log("done")
  } catch (err) {
    console.error("Error analyzing image:", err.message);
    res.status(500).json({ error: "Error analyzing image" });
  }
};
