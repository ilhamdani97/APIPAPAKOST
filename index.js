const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

//controllers
const UserController = require('./controllers/users')
const FacilityController = require('./controllers/facilities')
const DetailController = require('./controllers/dorms')
const AuthController = require('./controllers/auth_login')
//Middleware
const { authenticated } = require('./middleware')

app.group("/api", (router) => {

    //auth API
    router.post('/login', AuthController.login)

    //API User
    router.get('/users', UserController.index)
    router.get('/user/:id', UserController.show)
    router.post('/register', UserController.store)
    router.patch('/user/:id', authenticated, UserController.update)
    router.delete('/user/:id', authenticated, UserController.delete)
    // API Facility
    router.get('/facilities', FacilityController.index)
    router.get('/facility/:id', FacilityController.show)
    router.post('/facility', authenticated, FacilityController.store)
    router.patch('/facility/:id', authenticated, FacilityController.update)
    router.delete('/facility/:id', authenticated, FacilityController.delete)
    
    //Api Detail
    router.get('/dorms', DetailController.index)
    router.get('/dorm/:id', DetailController.show)
    router.post('/dorm', authenticated, DetailController.store)
    router.patch('/dorm/:id', authenticated, DetailController.update)
    router.delete('/dorm/:id', authenticated, DetailController.delete)
})


app.listen(port, () => console.log(`Listening on port ${port}!`))