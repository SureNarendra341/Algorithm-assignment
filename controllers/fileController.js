import fs from "fs";
import path from "path";
import multer from "multer";
import File from "../models/File.js";

const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

export const upload = multer({ storage });

// Upload file
export const uploadFile = async (req, res) => {
  try {
    const { userId } = req.body;
    const file = new File({
      fileName: req.file.filename,
      filePath: req.file.path,
      uploadedBy: userId,
    });
    await file.save();
    res.status(201).json({ message: "File uploaded successfully", file });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Download file
export const downloadFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: "File not found" });

    const filePath = path.resolve(file.filePath);
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
