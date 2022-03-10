const supertest = require('supertest')

const server = supertest.agent("http://localhost:3003")
const server2 = supertest.agent("http://localhost:3000")

describe('sample', function(){

    it("should return home page", function(done){
        server2
        .get("http://localhost:3000")
        .expect("Content-type",'json')
        .expect(200)
        .end(function(err,res){
            res.status.should.equal(200)
            done()
        })
    })

    it("should return add venue page", function(done){
        server2
        .get("http://localhost:3000/add-venue")
        .expect("Content-type",'json')
        .expect(200)
        .end(function(err,res){
            res.status.should.equal(200)
            done()
        })
    })

    it("should return  venue summary page", function(done){
        server2
        .get("http://localhost:3000/venue-summary/:id")
        .expect("Content-type",'json')
        .expect(200)
        .end(function(err,res){
            res.status.should.equal(200)
            done()
        })
    })

    it("should return ok if req is json", function(done){
        server
        .post("/api/venue_info")
        .send({venue:"Anna's House", capacity: 5, address: "London city", geolocation: "London", email: "anna@anna.com", startDate: "2022-03-10", endDate: "2022-03-11", venueImage: "https://robohash.org/iddelectusmagnam.png?size=50x50&set=set1"})
        .expect("Content-type",'json')
        .expect(200)
        .end(function(err,res){
            expect(res.text).toEqual('ok') 
            done()
        })
    })

    it("should return error if req is not json", function(done){
        server
        .post("/api/venue_info")
        .send("Not valid input")
        .expect("Content-type",'json')
        .expect(503)
        .end(function(err,res){
            expect(res.text).toEqual(error) 
            done()
        })
    })

}
)