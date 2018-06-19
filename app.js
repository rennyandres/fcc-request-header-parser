// app.js

// IMPORTS --------------------------------------------------------------------
var express = require('express');
var app = express();


// CONFIG ---------------------------------------------------------------------
app.set('view engine', 'ejs');
app.use(express.static(process.cwd() + '/public'));


// ROUTES ---------------------------------------------------------------------
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/api/whoami', function(req, res) {
    res.json({
        "ipaddress" : req.headers["x-forwarded-for"],
        "language"  : req.headers["accept-language"],
        "software"  : req.headers["user-agent"]
    });
});


// LISTENING ------------------------------------------------------------------
app.listen(process.env.PORT, process.env.IP, function() {
    console.log('Serving on port ' + process.env.PORT);
});


