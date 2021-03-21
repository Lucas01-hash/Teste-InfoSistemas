const Sequelize = require("sequelize");

// Importar todos os models utilizados
const Veiculo = require("../models/Veiculo");

// importar a config do banco de dados
const databaseConfig = require("../../config/database");

// inserir no array todos os models importados
const models = [Veiculo];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    if (this.connection) {
      console.log("conectado ao banco de dados!");
    }

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

module.exports = new Database();
