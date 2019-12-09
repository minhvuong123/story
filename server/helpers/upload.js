const path = require('path');
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

const fileFilter = (req, file, cb) => {  
  const ext = path.extname(file.originalname);
  if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return cb(null, false)
  }
  cb(null, true)
} 

const upload = multer({
  fileFilter,
  storage,
  limits: { 
    fileSize: 1024 * 1024 * 5 
  },
});

module.exports = upload;