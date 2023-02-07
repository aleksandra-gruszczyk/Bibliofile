const multer = require('multer')

const maxSize = 4 * 1024 * 1024

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + '/bookCovers')
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now()
    console.log(file.name)
    cb(null, file.name + uniqueSuffix)
  },
})

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
})

module.exports = { uploadFileMiddleware: uploadFile.single('image') }
