const {Schema, model } = require('mongoose');

const MensagemSchema = new Schema({
      nome: {
        type: String,
      },
      msg: {
        type: String,
      },
      data_comentario: {
        type: Date,
        default: new Date(),
      },
})

const modelo = model("mensagens", MensagemSchema);

module.exports = modelo;