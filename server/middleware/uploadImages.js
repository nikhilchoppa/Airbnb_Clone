// middleware to handle file uploads, like multer.
const multer = require('multer');
const path = require('path');

// Set up storage with multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')  // images will be saved in the 'uploads' directory of your project root folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)  // saved images will have a unique filename with a timestamp
  }
});

const upload = multer({ storage: storage });

// middleware function
const uploadImages = upload.array('images');

module.exports = { uploadImages };
