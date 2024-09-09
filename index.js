const express = require('express')
require("dotenv").config()

const database = require("./config/database")
database.connect()

const systemConfig = require('./config/system')

const routeAdmin = require("./routes/admin/index.route")

const route = require("./routes/client/index.route")

const cookieParser = require("cookie-parser")

const session = require("express-session")

var methodOverride = require('method-override')

var bodyParser = require('body-parser')

var flash = require('express-flash')

const app = express()
const port = process.env.PORT

app.use(bodyParser.urlencoded({ extended: false }))


app.use(methodOverride('_method'))


app.set("view engine", "pug")
app.set("views", `${__dirname}/views`)

app.use(express.static(`${__dirname}/public`))

app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());

// Routes
routeAdmin(app)
route(app)

// App Locals Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})