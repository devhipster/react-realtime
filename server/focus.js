import express from 'express'; // eslint-disable-line
import {Socket as io} from 'socket.io';
import mongoose  from 'mongoose';

const app = express();
const server  = () => import (http).then(obj => obj.createServer(app))
.catch(console.error);

const {
  APP_PORT = 5000,
  NODE_ENV = 'devlopment'
} = process.env;

const IN_PROD = NODE_ENV !== 'production';

app.listen(5000,()=>{
  console.log(' listening on port 5000')
})
