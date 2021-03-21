const Veiculo = require("../models/Veiculo");

module.exports = async (req, res, next) => {
  const { placa, chassi, renavam, ano } = req.body;

  const placaDb = await Veiculo.findOne({ where: { placa } });
  const chassiDb = await Veiculo.findOne({ where: { chassi } });
  const renavamDb = await Veiculo.findOne({ where: { renavam } });

  if (placa.length > 8 || placa.length < 7) {
    return res
      .status(400)
      .json({ error: "Quantidade de caracteres da placa é inválido " });
  }

  if (chassi.length > 17 || chassi.length < 17) {
    return res
      .status(400)
      .json({ error: "Quantidade de caracteres da chassi é inválido " });
  }

  if (renavam.length > 11 || renavam.length < 11) {
    return res
      .status(400)
      .json({ error: "Quantidade de caracteres do renavam é inválido " });
  }
  if (ano.length > 4 || ano.length < 4) {
    return res.status(400).json({
      error: "Quantidade de caracteres do ano do veiculo é inválido ",
    });
  }

  if (placaDb) {
    return res
      .status(400)
      .json({ error: "Já existe um veiculo cadastrado com esta placa!" });
  }

  if (chassiDb) {
    return res
      .status(400)
      .json({ error: "Já existe um veiculo cadastrado com este chassi!" });
  }

  if (renavamDb) {
    return res
      .status(400)
      .json({ error: "Já existe um veiculo cadastrado com este renavam!" });
  }

  return next();
};
