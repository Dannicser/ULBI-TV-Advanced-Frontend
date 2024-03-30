const path = require("path");
const fs = require("fs");

(function clearCash() {
  const pathCashe = path.resolve(__dirname, "..", "..", "node_modules", ".cache");

  fs.rmdirSync(pathCashe, { recursive: true });
})();
