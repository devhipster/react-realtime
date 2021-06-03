const express  = require('express'); // eslint-disable-line
const mongoose = require('mongoose'); // eslint-disable-line
const app = express();

const server  = require('http').createServer(app);
const io = require('socket.io')(server)
//dynamic import let objs = awit import('module');
// const server  = () => import (http).then(obj => obj.createServer(app))
const {
  APP_PORT = 5000,
  NODE_ENV = 'devlopment'
} = process.env;

const IN_PROD = NODE_ENV !== 'production';


app.get('/home',(req,res)=>{
  res.send('home is working perfeclty')
})
server.listen(5000,()=>{
  console.log(' listening on port 5000')
})

io.on('connection',(conn)=>{
  console.log('someone is connected = ',conn);
})
