var express = require('express');
var server = express();
//http://localhost:3000/hello
server.get('/', (request, response)=>{
    response.send('Hello world');
});
server.listen(3000);
