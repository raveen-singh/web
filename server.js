const express = require("express");
const app = express();
const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

const projectId = 'usober-221401';
const location = 'us-central1';
const modelId = 'ICN1919291792004788168';
const scoreThreshold = '0.5';