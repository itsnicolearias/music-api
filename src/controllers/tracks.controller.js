const Track = require('../models/tracks')


const getAllTracks = async (req, res) => {
   const data = await Track.find({})
   res.send({ data })

}

const getTracksById = (req, res) => {

}

const createTracks = async (req, res) => {

    const body = req.body
    console.log(body)

    const data = await Track.create(body)
    res.send(data)
}

const updateTracks = (req, res) => {

}

const deleteTracks = (req, res) => {

}

module.exports = { getAllTracks, getTracksById, createTracks, updateTracks, deleteTracks}