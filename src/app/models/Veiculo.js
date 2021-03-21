const Sequelize = require("sequelize");

class Veiculo extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        placa: Sequelize.STRING,
        chassi: Sequelize.STRING,
        renavam: Sequelize.STRING,
        modelo: Sequelize.STRING,
        marca: Sequelize.STRING,
        ano: Sequelize.INTEGER,
        cor: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "Veiculos",
      }
    );
    return this;
  }
}

module.exports = Veiculo;
