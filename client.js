var client = require('net').Socket();
var xbox = require("./main.js");

client.connect(8080, "localhost");

var test = new xbox('1bad', 'fa01');

test.on('a',function(){client.write("a\n");})
test.on('b',function(){client.write("b\n");})
test.on('x',function(){client.write("x\n");})
test.on('y',function(){client.write("y\n");})

client.on('data', function(d) {
    console.log(d.toString());
});

//client.end();
