const mongoose = require('mongoose');


const wordLocationsScheme = new mongoose.Schema({
    docNumber : { type : Number, ref : 'Documents', required : true},
    nemberOfHits : { type : Number , required : true }
})
const wordSchema = new mongoose.Schema({
    literallyWord: { type: String, required: true },
    refernces: [{ type : wordLocationsScheme, required : true }]
  },
  { collection: 'words' });
module.exports = mongoose.model('Word', wordSchema);
