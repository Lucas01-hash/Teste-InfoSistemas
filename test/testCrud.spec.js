const { agent } = require("supertest");

const request = agent("http://localhost:3000");

describe("test Crud infoSistemas", function () {
  it("GET /veiculo", async () => {
    request
      .get("/veiculo")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({
        id: 1,
        placa: "hfg-2366",
        chassi: "9BWZZZ377VT054451",
        renavam: "17485314859",
        modelo: "355 GTS Targa",
        marca: "Ferrari",
        ano: 1995,
        cor: "Cinza",
        createdAt: "2021-03-21T21:25:13.628Z",
        updatedAt: "2021-03-21T21:25:13.628Z",
      })
      .end((err, res) => {
        if (err) throw err;
      });
  });

  it("GET /veiculos", async () => {
    request
      .get("/veiculos")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
      });
  });

  it(" POST /", async () => {
    request
      .post("/veiculo")
      .send({
        placa: "PTQ-8087",
        chassi: "9BWZZZ379VT054451",
        renavam: "17485316159",
        modelo: "XRE 190",
        marca: "Honda",
        ano: "2020",
        cor: "Cinza",
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
      });
  });

  it(" PUT /veiculo", async () => {
    request
      .put("/veiculo/7")
      .send({
        placa: "PTQ-8087",
        chassi: "9BWZZZ327VT054451",
        renavam: "17485314959",
        modelo: "XRE 190",
        marca: "Honda",
        ano: "2020",
        cor: "roxo",
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
      });
  });

  it(" DELETE /veiculo", async () => {
    request
      .delete("/veiculo/1")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
      });
  });
});
