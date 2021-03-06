const express = require('express');
const server = express();
server.use(express.json());
var cors = require('cors');
const { application } = require('express');
server.use(cors())
const Postgres = require('pg-promise')();
const serverlessExpress = require('@vendia/serverless-express')

const dbServer = process.env.DB_HOSTNAME || '127.0.0.1'
const dbPassword = process.env.DB_PASSWORD


const db = Postgres({
    host: process.env.DB_HOSTNAME || dbServer ,
    database: process.env.DB_NAME || 'gigstr' ,
    user: process.env.DB_USER || 'gigstr',
    password: process.env.DB_PASSWORD || dbPassword ,
    port: 5432, //what about this one? i think leave it? lets flag it for later
})

const venueInfo = []


server.get('/api/venue_info/:id', async (req, res) => {
    const storeVenue = await db.query(
        `   SELECT venue_id, 
            venue_name, 
            venue_capacity, 
            venue_address, 
            venue_geolocation, 
            venue_owner_email, 
            venue_start_date, 
            venue_end_date, 
            venue_image,
            FROM Listed_Venues 
            where venue_id=${req.params.id}`)
    res.send(storeVenue)
    // res.json(venueInfo)
})


server.get('/api/venue_info', async (req, res) => {
    const getVenues = await db.query(`SELECT * FROM Listed_Venues`)    
    res.send(getVenues)
    //res.json(storeVenue)
})

// insert user input field data as new info in the database
server.post('/api/venue_info', (req, res) => {
   /* if (typeof req.body != 'object' || req.body.venueID === undefined){ 
        res.status(400)
        res.send('Error')
        return
    } */ 
    const venue_name  = req.body.venue
    const venue_capacity = req.body.capacity
    const venue_address = req.body.address
    const venue_geolocation = req.body.geolocation
    const venue_owner_email = req.body.email 
    const venue_start_date = req.body.startDate 
    const venue_end_date = req.body.endDate 
    const venue_image = req.body.venueImage
    
    try {
        db.query(
        'INSERT INTO Listed_Venues (venue_name, venue_capacity, venue_address, venue_geolocation, venue_owner_email, venue_start_date, venue_end_date, venue_image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING venue_id',
        [venue_name, venue_capacity, venue_address, venue_geolocation, venue_owner_email, venue_start_date, venue_end_date, venue_image]      
        )
        res.status(200)
        return res.send('ok')
    }


    catch (error) { 
        res.status(503)
        return res.send(error)
    }
    //venueInfo.push(req.body)
})






// server.listen(3000, () => {
//    console.log('server is running');
// })

exports.handler = serverlessExpress({app: server })