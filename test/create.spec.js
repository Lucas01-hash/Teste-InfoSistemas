const request = require("supertest");
const app = require("../src/app");

describe("GET /veiculo/:id", function () {
  it("return list of car", function () {
    return request(app)
      .get("/veiculo/5")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(
        '{"id":5,"placa":"hfg-2369","chassi":"9BWZZZ377VT004451","renavam":"17435314859","modelo":"355 GTS Targa","marca":"Ferrari","ano":1995,"cor":"Cinza","createdAt":"2021-03-19T23:39:26.242Z","updatedAt":"2021-03-19T23:39:26.242Z"}'
      );
  });
});
