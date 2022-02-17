const express = require('express');
const server = express();
server.use(express.json());
var cors = require('cors');
const { application } = require('express');
server.use(cors())
const Postgres = require('pg-promise')();
//const serverlessExpress = require('@vendia/serverless-express')

const dbServer = process.env.DB_HOSTNAME || '127.0.0.1'
const dbPassword = process.env.DB_PASSWORD


const db = Postgres({
    host: dbServer,
    database: 'postgres',
    user: 'postgres',
    password: dbPassword,
    port: 5432,
})

const venueInfo = []


server.get('/venue_info/:id', async (req, res) => {
    const storeVenue = await db.query(`SELECT venue_id, venue_name FROM Listed_Venues where venue_id=${req.params.id}`)
    res.send(storeVenue)
    // res.json(venueInfo)
})


server.get('/venue_info', async (req, res) => {
    const storeVenue = await db.query(`SELECT venue_id, venue_name FROM Listed_Venues`)
    res.send(storeVenue)
    // res.json(venueInfo)
})

// insert user input field data as new info in the database
server.post('/venue_info', (req, res) => {
   /* if (typeof req.body != 'object' || req.body.venueID === undefined){ 
        res.status(400)
        res.send('Error')
        return
    } */ 
    const venue_name  = req.body.venue
    
    db.query(
        'INSERT INTO listed_venues (venue_name) VALUES ($1) RETURNING venue_id',
        [venue_name]
    )
    //venueInfo.push(req.body)
    console.log(req.body)
    res.status(200)
    return res.send('ok')
})


//exports.handler = serverlessExpress({ server });

server.listen(3000, () => {
    console.log('server is running');
})