const express = require('express')
const multer  = require('multer')
const router = express.Router()

const upload = multer()

const controller = require('../../controllers/admin/accounts.controller')

const validate = require("../../validates/admin/accounts.validates")

const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware")

router.get('/', controller.index)

router.get('/create', controller.create)

router.post('/create',
    upload.single('thumbnail'),
    uploadCloud.upload, 
    validate.createPost, 
    controller.createPost
)

router.get('/edit/:id', controller.edit)

router.patch('/edit/:id',
    upload.single('thumbnail'),
    uploadCloud.upload, 
    validate.editPatch, 
    controller.editPatch
)

module.exports = router