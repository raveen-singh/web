const express = require("express");
const automl = require('@google-cloud/automl');
const bodyParser = require("body-parser");
const fs = require('fs');
const dotenv = require('dotenv');
const path = require("path");
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'client/build')));



const projectId = 'usober-221401';
const computeRegion = 'us-central1';
const modelId = 'ICN1919291792004788168';
const scoreThreshold = '0.5';


const client = new automl.PredictionServiceClient();
const modelFullId = client.modelPath(projectId, computeRegion, modelId);

// Read the file content for prediction.

const params = {};

if (scoreThreshold) {
    params.score_threshold = scoreThreshold;
}

// Set the payload by giving the content and type of the file.


// params is additional domain-specific parameters.
// currently there is no additional parameters supported.
async function grab(content) {
    const payload = {};
    payload.image = {
        imageBytes: content
    };
    const [response] = await client.predict({
        name: modelFullId,
        payload: payload,
        params: params,
    });
    console.log('Prediction results:');
    response.payload.forEach(result => {
        console.log(`Predicted class name: ${result.displayName}`);
        console.log(`Predicted class score: ${result.classification.score}`);
    });
    console.log(response);
    return response.payload;

}



app.post("/score", function (req, res) {
    (async function () {
        const val = await grab(req.body.uri.slice(22));
        console.log(val);
        res.send(val);
    })();

});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});