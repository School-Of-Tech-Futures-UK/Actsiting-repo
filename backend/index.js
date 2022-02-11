const express = require('express');
const server = express();
server.use(express.json());
var cors = require('cors');
server.use(cors())
const serverlessExpress = require('@vendia/serverless-express')


const venueInfo = []

server.get('/get_venue_info', (req, res) => {
    res.json(venueInfo)
})

server.post('/venue_info', (req, res) => {
    if (typeof req.body != 'object' || req.body.venueID === undefined){ 
        res.status(400)
        res.send('Error')
        return
    } 
    venueInfo.push(req.body)
    console.log(req.body)
    res.status(200)
    res.send('ok')
})

exports.handler = serverlessExpress({ server });