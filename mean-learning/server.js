// imports
const http = require('http');
const app = require('./backend/app');

const port = proccess.env.PORT || 3000;

app.set('port', port)

const server = http.createServer((req,res)=>{
    res.end('This is my first respond')
});

//if injected by runtime using ENV (production) / else use 3000 (development)
server.listen(port);