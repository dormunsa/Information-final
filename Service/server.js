const express    = require('express')
var cors         = require('cors');
const fileUpload = require(`express-fileupload`);

const app = express()
const port = process.env.PORT || 3000
app.set('port', port)
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload());