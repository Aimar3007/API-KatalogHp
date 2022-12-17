const model = require("../config/model");
const controller = {};

controller.getAll = async (req, res) => {
  try {
    const data = await model.brand.findAll()
    res.status(200).json({
      message: "Data Users",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
}


module.exports = controller;
