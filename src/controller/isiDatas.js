const model = require("../config/model");
const { Op } = require('sequelize');
const dataSeri = require("../data/seri");
const controller = {};

controller.addSeri = async (req, res) => {
  try {
    const data = await model.seri.bulkCreate(dataSeri.map(d => d))
    res.status(200).json({
      message: "Berhasil Insert",
      data,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
}

controller.addBrands = async (req, res) => {
  try {
    const data = await model.seri.bulkCreate(dataSeri.map(d => d))
    res.status(200).json({
      message: "Berhasil Insert",
      data,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
}


module.exports = controller;
