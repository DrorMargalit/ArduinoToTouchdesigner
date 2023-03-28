var express = require("express");
const bodyParser = require('body-parser');
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const data = [{sensorCount: '-9999', sensorValue: '-9999'}]

app.get('/data/:sensorCount', (req, res) => {
    const { sensorCount } = req.params;
    const count = data.filter((count) => count.sensorCount === sensorCount)[0];
    res.json({ ok: true, count})
});

app.get('/getdata', (_, res) => {
    res.json({ ok: true, data})
});

app.post('/adddata', (req, res) => {
    const { sensorCount, sensorValue } = req.body;
    if (sensorCount && sensorValue) {
        data.push({ sensorCount, sensorValue });
        res.json({ ok: true, data });
    }
})


