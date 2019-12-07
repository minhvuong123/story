const express =  require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");



// use package
app.use('/public', express.static('public'));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// middlewares

// use controllers
const version = require('./config/constants').versions[require('./config/constants').versions.length - 1];

app.use(`/api/${version}/category`, require(`./controllers/${version}/category`));
app.use(`/api/${version}/story`, require(`./controllers/${version}/story`));
app.use(`/api/${version}/chapter`, require(`./controllers/${version}/chapter`));
app.use(`/api/${version}/user`, require(`./controllers/${version}/user`));

// handle invalid routes
app.all('*', (req, res) => {
    res.status(404).json({
        error: true,
        message: "INVALID ROUTE"
    })
})

// start server

const PORT = 3001 || process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));