const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './public/uploads/');
  },
  filename: function(req, file, cb) {
      const now = new Date().toISOString();
      const date = now.replace(/:/g, '-'); cb(null, date + file.originalname); // thay thế : của ngày tháng để ngăn chặn lỗi ENOENT: no such file or directory
  }
});

const filterFile = (req, file, cb) => {
  if(file.mimetype === 'image/ipeg' || file.mimetype === 'image/png'){
    cb(null, true)
  } else {
    cb(null, false)
  }
} 

const upload = multer({
  storage,
  limits: { 
    fileSize: 1024 * 1024 * 5 
  },
  filterFile
});

module.exports = upload;