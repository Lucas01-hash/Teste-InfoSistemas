const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./routes");

class App {
  constructor() {
    this.server = express();
    this.server.use(morgan("dev"));
    require("./app/database");

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(bodyParser.json({ limit: "50mb", extended: true }));
    this.server.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
