// use multer and GridFS for storing files in a MongoDB database.
// Multer is a Node.js middleware for handling multipart/form-data,which is primarily used for uploading files.
// GridFS is a specification for storing and retrieving files that exceed the BSON-document size limit of 16MB,
// instead of storing the file in a single document, GridFS divides the file into parts, or chunks, and stores each chunk as a separate document.

require("dotenv").config();
const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");

const Storage = new GridFsStorage({
    url : process.env.DB_URL+process.env.DB_NAME,
    file : (req, file ) => {
        return {
            bucketName : process.env.DB_PROFILE_PIC_COLLECTION,
            filename : `${Date.now()}_${file.originalname}`
        }
    }
})

const upload = multer({
    storage : Storage
});

module.exports = upload;