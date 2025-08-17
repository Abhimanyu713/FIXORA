const multer = require("multer");
const path = require("path");

// set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});


// File filter for images only
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedTypes.test(file.mimetype);
  
    if (extName && mimeType) {
      return cb(null, true);
    } else {
      cb(new Error("Only images are allowed"));
    }
  };


  const upload = multer({
    storage:storage,
    fileFilter: fileFilter
  });

  module.exports = upload;