const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'contact-avatars',
  allowFormats: ['jpg', 'png'],
  filename: (req, file, next) => {
    next(null, `${Date.now()}${file.originalname}`)
  }
})

module.exports = multer({ storage });