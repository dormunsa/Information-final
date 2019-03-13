const consts = require('./consts')
const mongoose = require('mongoose')

const { MLAB_URL, DB_USER, DB_PASS } = consts;

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    user: DB_USER,
    pass: DB_PASS,
    autoReconnect: true
  };

  mongoose.connect( MLAB_URL, options)
  .then(() => console.log(`connected`))
  .catch(err => console.log(`connection error: ${err}`));
