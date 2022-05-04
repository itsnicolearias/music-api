const express = require('express')
const { getAllTracks, getTracksById, createTracks, updateTracks, deleteTracks} = require('../controllers/tracks.controller')

const router = express.Router()

router.get('/', getAllTracks)

router.get('/:id', getTracksById)

router.post('/', createTracks)
module.exports = router