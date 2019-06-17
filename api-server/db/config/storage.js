const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
})

const accepted_extensions = ['jpg', 'png', 'gif'];
exports.upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,  // 5 MB upload limit
    files: 1                    // 1 file
  },
  fileFilter: (req, file, cb) => {
    // if the file extension is in our accepted list
    if (accepted_extensions.some(ext => file.originalname.endsWith("." + ext))) {
      return cb(null, true);
    }

    // otherwise, return error
    return cb(new Error('Only ' + accepted_extensions.join(", ") + ' files are allowed!'));
  }
});