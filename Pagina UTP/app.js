const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require('fs');
const app = express();

if (!fs.existsSync('upload_photo')) {
  fs.mkdirSync('upload_photo');
}

app.use(express.static(path.join(__dirname)));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload_photo/"); 
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname; 
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("photo"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  res.json({
    message: "Photo uploaded successfully!",
    filePath: `/upload_photo/${req.file.filename}`,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});