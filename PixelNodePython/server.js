var express = require('express');
var PythonShell = require('python-shell');
var http = require('http');

var app = express();

app.get('/dalembert', callD_alembert);

function callD_alembert(req, res) {
    var options = {
        args: [
            req.query.funds, // starting funds
            req.query.size, // (initial) wager size
            req.query.count, // wager count - number of wagers per sim
            req.query.sims // number of simulations
        ]
    }

    PythonShell.run('./d_alembert.py', options, function(err, data) {
        console.log("err", err)
        console.log("data", data)
        if (err) res.send(err);

        else res.send(data.toString())
    });
}
app.listen(3000, function() {
    console.log('server running on port 3000');
})