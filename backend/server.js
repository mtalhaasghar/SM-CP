const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

require('dotenv').config();

// initialize application
const app = express()
const db = require('./config/database').mongodbURL
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

// Connection with database
const startApp = () => {
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true}).then(()=>{
        console.log('Database connected')
    }) 
    .catch((err) => {
        console.log('error', err)
    })
}
startApp()
// calling routes
const authenticationRoutes = require('./routes/auth')

app.use('/auth', authenticationRoutes)

app.get('/', (req, res) => {
    res.send('My App is working')
})

app.listen(port, ()=> {
    console.log(`server is running on port: ${port}`);
})