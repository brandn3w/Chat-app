const express = require('express');
const path = require('path');

const app = express();

const socket = require('socket.io');
const io = socket(server);

const messages = [];


const root = path.join(__dirname, 'client');



    app.use(express.static(path.join(__dirname + '/client')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/client/index.html'));
    });

    app.listen(8000, () => {
        console.log('Server is running on port: 8000');
    });
    const io = socket(server);