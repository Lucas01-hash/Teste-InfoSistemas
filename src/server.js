const app = require("./app");
const PORT = 3000;

try {
  app.listen(PORT);
  console.log("Test InfoSistemas está online na porta: " + PORT);
} catch (err) {
  console.log("Houve um erro na Test InfoSistemas , segue o erro: " + err);
}
