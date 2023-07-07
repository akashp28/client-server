const express = require('express')
const app = express();
app.use(express.json())

const AuthRoute = require('./routes/home-auth')
const LogRoute = require('./routes/log-auth')
const RegRoute = require('./routes/reg-auth')

app.use("/", AuthRoute)
app.use("/", LogRoute)
app.use("/", RegRoute)

app.listen(8000, () => { console.log("Server listening"); })


