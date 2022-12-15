const model = require("../config/model");
const { Op } = require('sequelize')
const controller = {};

controller.getAll = async (req, res) => {
  try {
    const searched = req.body.searched
    const hargaMin = req.body.hargaMin
    const hargaMax = req.body.hargaMax
    const seri = req.body.seri
    const brand = req.body.brand
    const toko = req.body.toko

    console.log('ini searched', searched)
    const data = await model.harga.findAll({
      where: {
        ...(hargaMin && hargaMax) && {
          harga: {
            [Op.between]: [hargaMin, hargaMax]
          }
        }
      },
      group: 'id_handphone',
      include: [
        {
          model: model.handphone,
          where: {
            ...(searched) && {
              nama_hp: { [Op.substring]: searched }
            }
          },
          include: [
            {
              model: model.seri,
              where: {
                ...(seri && brand) && {
                  nama: seri
                }
              },
              include: [{
                model: model.brand, where: {
                  ...(brand) && {
                    nama: brand
                  }
                },
              }]
            }]
        },
        {
          model: model.toko, where: {
            ...(toko) && {
              nama: toko
            }
          },
        }
      ]
    })

    res.status(200).json({
      message: "Data Handphones",
      data,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
}

controller.getHargaByToko = async (req,res) => {
  try {
    const idHandphone = req.body.idHandphone

    const data = await await model.harga.findAll({
      where: {
        id_handphone: idHandphone
      },
      include: [{model: model.toko}]
    })
    res.status(200).json({
      message: "Data Handphones",
      data,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
} 

module.exports = controller;
