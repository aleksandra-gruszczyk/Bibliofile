const multer = require('multer')

const maxSize = 4 * 1024 * 1024

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + '/../public/bookCovers')
  },
  filename: (req, file, cb) => {
    const uniquePreffix = `${Date.now()}`
    cb(null, uniquePreffix + file.originalname)
  },
})

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
})

module.exports = { uploadFileMiddleware: uploadFile.single('image') }
