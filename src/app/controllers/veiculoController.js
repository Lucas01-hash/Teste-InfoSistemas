const Veiculo = require("../models/Veiculo");

class veiculoController {
  async store(req, res) {
    const { placa, chassi, renavam, modelo, marca, ano, cor } = req.body;
    const veiculo = await Veiculo.create({
      placa,
      chassi,
      renavam,
      modelo,
      marca,
      ano,
      cor,
    });

    return res.json(veiculo);
  }

  async show(req, res) {
    const veiculos = await Veiculo.findAll();

    return res.json(veiculos);
  }

  async index(req, res) {
    const { id } = req.params;
    const veiculo = await Veiculo.findByPk(id);
    if (!veiculo) {
      return res
        .status(404)
        .json({ error: "O veiculo não existe no banco de dados" });
    }

    return res.json(veiculo);
  }

  async update(req, res) {
    const { id } = req.params;
    const veiculo = await Veiculo.findByPk(id);

    const { placa, chassi, renavam, modelo, marca, ano, cor } = req.body;

    await veiculo.update(req.body);

    return res.json(veiculo);
  }

  async delete(req, res) {
    const { id } = req.params;

    const veiculo = await Veiculo.findByPk(id);
    if (!veiculo) {
      return res
        .status(404)
        .json({ error: "O veiculo não existe no banco de dados" });
    }

    await veiculo.destroy({ veiculo });

    return res.json({ message: "veiculo excluido com sucesso !", veiculo });
  }
}

module.exports = new veiculoController();
