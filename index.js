const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())

//controllers
const UserController = require('./controllers/users')
const DetailController = require('./controllers/dorms')
const AuthController = require('./controllers/auth_login')
const BookingController = require('./controllers/bookings')
//Middleware
const { authenticated } = require('./middleware')

app.group("/api", (router) => {

    //auth API
    router.post('/login', AuthController.login)
    //Api Booking
    router.get('/bookings', BookingController.show)
    router.get('/booking/:id', BookingController.showdetail)
    router.post('/bookin', BookingController.store)

    //API User
    router.get('/users', UserController.index)
    router.get('/user/:id', UserController.show)
    router.post('/register', UserController.store)
    router.patch('/user/:id', authenticated, UserController.update)
    router.delete('/user/:id', authenticated, UserController.delete)
    //Api Detail
    router.get('/dorms',authenticated, DetailController.index)
    router.get('/dorm/:id', DetailController.show)
    router.post('/dorm',authenticated, DetailController.store)
    // router.patch('/dorm/:id', authenticated, DetailController.update)
    // router.delete('/dorm/:id', authenticated, DetailController.delete)
})

app.get('/', (req, res) => res.send('API PAPA KOST!'))
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))