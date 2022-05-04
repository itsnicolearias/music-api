const express = require('express')
const { upload } = require('../utils/handleStorage')
const { getAllItems, getItemsById, createItems, uploadItems, deleteItems} = require('../controllers/storage.controllers')

const router = express.Router()

router.post('/', upload.single("file"), createItems)

module.exports = router