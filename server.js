/**
 * Created by jamie on 2016-09-21.
 */
//link to connect and url module
var connect = require('connect');
var url = require('url');

//create new connect application object
var app = connect();

//method to determine which math operation to use and perform the calculation
var calculate = function(req, res, next){
    //get the url variables
    var qs = url.parse(req.url, true).query;

    var method = qs.method;
    var x = qs.x;
    var y = qs.y;

    if (method === "add"){
        var solution = parseInt(x) + parseInt(y);
        res.end(x + ' + ' + y + ' = ' + solution);
    }
    else if (method === "subtract"){
        var solution = x - y;
        res.end(x + ' - ' + y + ' = ' + solution);
    }
    else if (method === "multiply"){
        var solution = x * y;
        res.end(x + ' * ' + y + ' = ' + solution);
    }
    else if (method === "divide"){
        var solution = x / y;
        res.end(x + ' / ' + y + ' = ' + solution);
    }
    else {
        res.end("That is not a valid method. Input a different method.");
    }
};

//route /lab3 requests
app.use('/lab3', calculate);

//listen for events on port 3000
app.listen(3000);