const path = require('path')
const express = require('express');
const { engine } = require('express-handlebars')
const app = express();
const sass = require('node-sass')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
// override with POST having ?_method=PUT
app.use(methodOverride('_method'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const morgan = require('morgan'); //quan sát
const port = 3000;

const db = require('./config/db');
//connect db
db.connect();

const route = require('./routers');
//middleware
app.engine('hbs', engine({
    extname: ".hbs",
    helpers: {
        sum: (a, b) => a + b,
    }

}));
app.use(express.json())
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "resources", "views"))
app.use(express.static(path.join(__dirname, "public")))
console.log(__dirname)
app.use(morgan('combined'));
//Router
route(app);

app.listen(port, () => console.log(`example app listening at http://localhost:${port}`));