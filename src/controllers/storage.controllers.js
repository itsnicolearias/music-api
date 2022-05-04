const Storage = require('../models/storage')

const PUBLIC_URL = process.env.PUBLIC_URL

const getAllItems = (req, res) => {

}

const getItemsById = (req, res) => {

}

const createItems = async (req, res) => {
    try {
        const { file } = req;
        const body = {
          url: `${URL_PUBLIC}/${file.filename}`,
          filename: file.filename,
        };
        const response = await Storage.create(body);
        res.send({ response });
      } catch (e) {
        handleHttpError(res, e);
      }
}

const uploadItems = (req, res) => {

}

const deleteItems = (req, res) => {

}

module.exports = { getAllItems, getItemsById, createItems, uploadItems, deleteItems}