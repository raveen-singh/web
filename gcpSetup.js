var fs = require("fs");
fs.writeFile(process.env.GCP_KEY_FILE, process.env.GOOGLE_CONFIG, (err) => {});