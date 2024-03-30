const path = require("path");
const fs = require("fs");

(function clearCashe() {
  const pathCashe = path.resolve(__dirname, "..", "..", "node_modules", ".cache");
  const isThereFolder = fs.existsSync(pathCashe);

  if (isThereFolder) {
    fs.rmSync(pathCashe, { recursive: true });

    return;
  }

  console.error("Cashe has already been cleaned");
})();
